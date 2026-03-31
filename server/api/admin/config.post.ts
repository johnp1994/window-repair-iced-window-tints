import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
  // 1. Verify Authentication
  const session = getCookie(event, 'admin_session')
  if (session !== 'authenticated') {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized access' })
  }

  // 2. Read Body Payload
  const body = await readBody(event)

  if (!body) {
    throw createError({ statusCode: 400, statusMessage: 'Payload required' })
  }

  // 3. Ensure 'data' directory exists
  const dataDir = path.resolve(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }

  // 4. Save SMTP Settings to config.json
  const configPath = path.join(dataDir, 'config.json')
  
  const serverConfig = {
    smtpHost: body.smtpHost || '',
    smtpPort: parseInt(body.smtpPort) || 587,
    smtpUser: body.smtpUser || '',
    smtpPass: body.smtpPass || '',
    businessEmail: body.businessEmail || ''
  }

  await fs.writeFile(configPath, JSON.stringify(serverConfig, null, 2), 'utf-8')

  // 5. Update Admin Auth Identity Data
  if (body.adminEmail) {
    await updateAdminData({ email: body.adminEmail })
  }

  return {
    success: true,
    message: 'Configuration saved successfully'
  }
})
