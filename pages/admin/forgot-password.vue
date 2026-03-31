<template>
  <div class="admin-login-page">
    <div class="login-card">
      <img src="~/assets/images/logo.png" alt="The Glassperts" class="login-logo" />
      <h1 class="login-title">Reset Password</h1>
      <p class="login-subtitle">Enter your admin email address to receive a password reset link.</p>
      
      <form v-if="!isSent" @submit.prevent="handleForgot" class="login-form">
        <div class="form-group">
          <label for="email">Admin Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="admin@glassexpertsfl.org" 
            required 
          />
        </div>
        
        <button type="submit" class="btn btn-yellow btn-full" :disabled="isLoading">
          {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
        </button>
        
        <div class="back-link-container">
          <NuxtLink to="/admin/login" class="back-link">Back to Login</NuxtLink>
        </div>
        
        <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
      </form>
      
      <div v-else class="success-state">
        <div class="success-icon">✓</div>
        <h3>Check your inbox</h3>
        <p>If that email matches an admin account, we've sent a password reset link to it.</p>
        <div class="back-link-container center">
          <NuxtLink to="/admin/login" class="back-link">Return to Login</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const isSent = ref(false)

const handleForgot = async () => {
  if (isLoading.value) return
  isLoading.value = true
  errorMessage.value = ''

  try {
    await $fetch('/api/admin/forgot-password', {
      method: 'POST',
      body: { email: email.value }
    })
    isSent.value = true
  } catch (error: any) {
    errorMessage.value = error.data?.statusMessage || 'An error occurred. Please try again later.'
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: 'Forgot Password | The Glassperts'
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
  line-height: 1.5;
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

.error-text {
  color: #ff4d4f;
  font-size: 0.85rem;
  margin-top: 16px;
  text-align: center;
}

.back-link-container {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.back-link-container.center {
  margin-top: 24px;
}

.back-link {
  color: var(--text-white-dim);
  font-size: 0.85rem;
  text-decoration: none;
}
.back-link:hover {
  text-decoration: underline;
  color: var(--white);
}

.success-state {
  text-align: center;
  animation: fadeIn 0.4s ease;
}

.success-icon {
  width: 60px;
  height: 60px;
  background: var(--gold);
  color: var(--navy);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 16px;
  font-weight: bold;
}

.success-state h3 {
  color: var(--white);
  margin-bottom: 8px;
}

.success-state p {
  color: var(--text-white-dim);
  font-size: 0.9rem;
  line-height: 1.5;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
