import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'
import fs from 'fs/promises'
import path from 'path'

const DEFAULT_EMAIL = 'admin@glassexpertsfl.org'
const DEFAULT_PASS = 'secret123'

// Hash password using scrypt
export function hashPassword(password: string, salt?: string) {
  const currentSalt = salt || randomBytes(16).toString('hex')
  const derivedKey = scryptSync(password, currentSalt, 64).toString('hex')
  return `${currentSalt}:${derivedKey}`
}

// Verify password
export function verifyPassword(password: string, hash: string) {
  const [salt, key] = hash.split(':')
  if (!salt || !key) return false
  
  const keyBuffer = Buffer.from(key, 'hex')
  const derivedKey = scryptSync(password, salt, 64)
  
  try {
    return timingSafeEqual(keyBuffer, derivedKey)
  } catch {
    return false
  }
}

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.resolve(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
  return dataDir
}

// Get Admin Data (creates default if it doesn't exist)
export async function getAdminData() {
  const dataDir = await ensureDataDir()
  const filePath = path.join(dataDir, 'admin.json')
  
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content)
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      // Create default
      const defaultData = {
        email: DEFAULT_EMAIL,
        passwordHash: hashPassword(DEFAULT_PASS),
        resetToken: null,
        resetTokenExpiry: null
      }
      await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), 'utf-8')
      return defaultData
    }
    throw err
  }
}

// Update Admin Data
export async function updateAdminData(updates: Partial<{ email: string, passwordHash: string, resetToken: string | null, resetTokenExpiry: number | null }>) {
  const current = await getAdminData()
  const filePath = path.join(process.cwd(), 'data', 'admin.json')
  const merged = { ...current, ...updates }
  await fs.writeFile(filePath, JSON.stringify(merged, null, 2), 'utf-8')
  return merged
}
