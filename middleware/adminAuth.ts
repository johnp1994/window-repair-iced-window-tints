export default defineNuxtRouteMiddleware((to, from) => {
  const sessionToken = useCookie('admin_session')
  
  if (sessionToken.value !== 'authenticated') {
    // Redirect to the login page if not authenticated
    return navigateTo('/admin/login')
  }
})
