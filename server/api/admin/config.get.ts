import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
  // 1. Verify Authentication
  const session = getCookie(event, 'admin_session')
  if (session !== 'authenticated') {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized access' })
  }

  // 2. Read Admin Data
  const adminData = await getAdminData()

  // 3. Read config file
  const configPath = path.resolve(process.cwd(), 'data', 'config.json')
  
  try {
    const fileContent = await fs.readFile(configPath, 'utf-8')
    const configData = JSON.parse(fileContent)
    return {
      success: true,
      data: {
        ...configData,
        adminEmail: adminData.email || 'admin@glassexpertsfl.org'
      }
    }
  } catch (error) {
    return {
      success: true,
      data: {
        smtpHost: '',
        smtpPort: 587,
        smtpUser: '',
        smtpPass: '',
        businessEmail: '',
        adminEmail: adminData.email || 'admin@glassexpertsfl.org'
      }
    }
  }
})
