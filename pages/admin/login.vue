<template>
  <div class="admin-login-page">
    <div class="login-card">
      <img src="~/assets/images/logo.png" alt="The Glassperts" class="login-logo" />
      <h1 class="login-title">Admin Dashboard</h1>
      <p class="login-subtitle">Please enter the master password to continue.</p>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Admin Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="admin@glassexpertsfl.org" 
            required 
            :class="{ 'error-border': errorMessage }"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Enter password..." 
            required 
            :class="{ 'error-border': errorMessage }"
          />
          <div class="forgot-link-container">
            <NuxtLink to="/admin/forgot-password" class="forgot-link">Forgot Password?</NuxtLink>
          </div>
          <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
        </div>
        
        <button type="submit" class="btn btn-yellow btn-full" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Sign In' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const router = useRouter()

// If they somehow are already logged in, quickly boot them to /admin
const cookie = useCookie('admin_session')
onMounted(() => {
  if (cookie.value === 'authenticated') {
    router.push('/admin')
  }
})

const handleLogin = async () => {
  if (isLoading.value) return
  isLoading.value = true
  errorMessage.value = ''

  try {
    const res = await $fetch('/api/admin/login', {
      method: 'POST',
      body: { 
        email: email.value,
        password: password.value 
      }
    })

    if (res.success) {
      router.push('/admin')
    }
  } catch (error: any) {
    errorMessage.value = error.data?.statusMessage || 'Invalid credentials. Please try again.'
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: 'Admin Login | The Glassperts'
})
</script>

<style scoped>
.admin-login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  padding: 20px;
}

.login-card {
  background: var(--navy);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.login-logo {
  width: 100px;
  margin: 0 auto 24px;
}

.login-title {
  color: var(--white);
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.login-subtitle {
  color: var(--text-white-dim);
  font-size: 0.95rem;
  margin-bottom: 32px;
}

.login-form {
  text-align: left;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  color: var(--white);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.forgot-link-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

.forgot-link {
  color: var(--gold);
  font-size: 0.8rem;
  text-decoration: none;
}
.forgot-link:hover {
  text-decoration: underline;
}
.admin-login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  padding: 20px;
}

.login-card {
  background: var(--navy);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.login-logo {
  width: 100px;
  margin: 0 auto 24px;
}

.login-title {
  color: var(--white);
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.login-subtitle {
  color: var(--text-white-dim);
  font-size: 0.95rem;
  margin-bottom: 32px;
}

.login-form {
  text-align: left;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  color: var(--white);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-light);
  background: rgba(255, 255, 255, 0.07);
  color: var(--white);
  font-family: var(--font-body);
  transition: all var(--transition-fast);
}

.form-group input:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(var(--gold-rgb), 0.15);
}

.form-group input.error-border {
  border-color: #ff4d4f;
}

.error-text {
  color: #ff4d4f;
  font-size: 0.85rem;
  margin-top: 6px;
}
</style>
