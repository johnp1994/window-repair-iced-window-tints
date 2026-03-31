export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.email || !body.password) {
    throw createError({ statusCode: 400, statusMessage: 'Email and password are required' })
  }

  const adminData = await getAdminData()

  // Verify Email
  if (body.email.toLowerCase() !== adminData.email.toLowerCase()) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
  }

  // Verify Password
  const isValidPassword = verifyPassword(body.password, adminData.passwordHash)
  if (!isValidPassword) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
  }

  // Set secure cookie
  setCookie(event, 'admin_session', 'authenticated', {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/'
  })

  return { success: true }
})
