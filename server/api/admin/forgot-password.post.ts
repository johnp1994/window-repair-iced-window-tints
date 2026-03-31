import { randomBytes } from 'crypto'
import fs from 'fs/promises'
import path from 'path'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body.email) {
    throw createError({ statusCode: 400, statusMessage: 'Email is required' })
  }

  const adminData = await getAdminData()

  // Always return success to prevent email enumeration attacks
  if (body.email.toLowerCase() !== adminData.email.toLowerCase()) {
    // Delay slightly to prevent timing attacks
    await new Promise(r => setTimeout(r, 500))
    return { success: true }
  }

  // Generate Reset Token
  const resetToken = randomBytes(32).toString('hex')
  const resetTokenExpiry = Date.now() + 1000 * 60 * 60 // 1 hour

  // Save to DB
  await updateAdminData({ resetToken, resetTokenExpiry })

  // Send Email using dynamic config
  const configPath = path.resolve(process.cwd(), 'data', 'config.json')
  let fsConfig: any = {}
  try {
    const fileContent = await fs.readFile(configPath, 'utf-8')
    fsConfig = JSON.parse(fileContent)
  } catch (error) {
    console.log('No local config.json found for SMTP via Forgot Password.')
  }

  const runtimeConf = useRuntimeConfig()
  const finalHost = fsConfig.smtpHost || runtimeConf.smtpHost
  const finalPort = Number(fsConfig.smtpPort || runtimeConf.smtpPort) || 587
  const finalUser = fsConfig.smtpUser || runtimeConf.smtpUser
  const finalPass = fsConfig.smtpPass || runtimeConf.smtpPass

  // If SMTP is not setup, log it clearly (user is warned in documentation about this constraint)
  if (!finalHost || !finalUser || !finalPass) {
    console.warn('⚠️ Cannot send password reset email: SMTP settings are not configured.')
    console.warn(`[DEVELOPER DEBUG ONLY]: Reset Token is ${resetToken}`)
    return { success: true }
  }

  const resetLink = `${runtimeConf.public.siteUrl || 'http://localhost:3000'}/admin/reset-password?token=${resetToken}`

  try {
    const transporter = nodemailer.createTransport({
      host: finalHost,
      port: finalPort,
      secure: finalPort === 465,
      auth: {
        user: finalUser,
        pass: finalPass,
      },
    })

    await transporter.sendMail({
      from: `"The Glassperts System" <${finalUser}>`,
      to: adminData.email,
      subject: `Password Reset Request`,
      html: `
        <h3>Password Reset Request</h3>
        <p>You requested to reset your admin dashboard password.</p>
        <p>Click the link below to set a new password. This link will expire in 1 hour.</p>
        <a href="${resetLink}" style="display:inline-block;padding:12px 24px;background:#fdb927;color:#0b1d3a;text-decoration:none;border-radius:6px;font-weight:bold;">Reset Password</a>
        <p><br/><small>If you did not request this, please ignore this email.</small></p>
      `,
    })
    console.log('📧 Password reset email sent successfully.')
  } catch (err) {
    console.error('Failed to send password reset email via SMTP:', err)
  }

  return { success: true }
})
