export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.token || !body.newPassword) {
    throw createError({ statusCode: 400, statusMessage: 'Token and new password are required' })
  }

  const adminData = await getAdminData()

  // Verify Token Exists and Matches
  if (!adminData.resetToken || adminData.resetToken !== body.token) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid or expired password reset token' })
  }

  // Verify Expiry
  if (!adminData.resetTokenExpiry || Date.now() > adminData.resetTokenExpiry) {
    throw createError({ statusCode: 400, statusMessage: 'Your password reset token has expired' })
  }

  // Hash new password and clear the reset token records
  const newHash = hashPassword(body.newPassword)
  await updateAdminData({ 
    passwordHash: newHash, 
    resetToken: null, 
    resetTokenExpiry: null 
  })

  return { success: true }
})
