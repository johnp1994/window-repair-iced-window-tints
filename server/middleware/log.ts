/**
 * Server middleware — request logging.
 */
export default defineEventHandler((event) => {
  const method = event.method
  const path = getRequestURL(event).pathname

  // Only log API requests to avoid cluttering with static asset logs
  if (path.startsWith('/api/')) {
    console.log(`[${new Date().toISOString()}] ${method} ${path}`)
  }
})
