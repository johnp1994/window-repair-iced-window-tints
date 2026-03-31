<template>
  <div class="admin-login-page">
    <div class="login-card">
      <img src="~/assets/images/logo.png" alt="The Glassperts" class="login-logo" />
      <h1 class="login-title">Create New Password</h1>
      <p class="login-subtitle" v-if="!isSuccess">Please enter your new admin password below.</p>
      
      <form v-if="!isSuccess" @submit.prevent="handleReset" class="login-form">
        <div class="form-group">
          <label for="password">New Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Enter new password..." 
            required 
            minlength="6"
            :class="{ 'error-border': errorMessage && errorMessage.includes('match') }"
          />
        </div>
        
        <div class="form-group">
          <label for="confirm">Confirm Password</label>
          <input 
            type="password" 
            id="confirm" 
            v-model="confirm" 
            placeholder="Confirm new password..." 
            required 
            minlength="6"
            :class="{ 'error-border': errorMessage && errorMessage.includes('match') }"
          />
        </div>
        
        <button type="submit" class="btn btn-yellow btn-full" :disabled="isLoading || !token">
          {{ isLoading ? 'Saving...' : 'Reset Password' }}
        </button>
        
        <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
        <p v-if="!token" class="error-text">No reset token provided. Please use the link from your email.</p>
      </form>
      
      <div v-else class="success-state">
        <div class="success-icon">✓</div>
        <h3>Password Reset!</h3>
        <p>Your password has been successfully updated.</p>
        <div class="back-link-container center">
          <NuxtLink to="/admin/login" class="btn btn-yellow">Go to Login</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const password = ref('')
const confirm = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)
const route = useRoute()
const token = computed(() => route.query.token as string)

const handleReset = async () => {
  if (isLoading.value) return
  if (!token.value) {
    errorMessage.value = 'Invalid reset link.'
    return
  }
  if (password.value !== confirm.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }
  
  isLoading.value = true
  errorMessage.value = ''

  try {
    await $fetch('/api/admin/reset-password', {
      method: 'POST',
      body: { 
        token: token.value,
        newPassword: password.value 
      }
    })
    isSuccess.value = true
  } catch (error: any) {
    errorMessage.value = error.data?.statusMessage || 'The token is invalid or has expired.'
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: 'Reset Password | The Glassperts'
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

.form-group input.error-border {
  border-color: #ff4d4f;
}

.error-text {
  color: #ff4d4f;
  font-size: 0.85rem;
  margin-top: 16px;
  text-align: center;
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
  margin-bottom: 12px;
}

.success-state p {
  color: var(--text-white-dim);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 24px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
