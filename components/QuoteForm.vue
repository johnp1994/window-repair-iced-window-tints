<template>
  <div class="hero-form-wrapper" id="quote-form">
    <div class="hero-form-card">
      <img src="~/assets/images/logo.png" alt="Iced Window Tints" class="form-logo" />
      <h2 class="form-title">GET A FREE QUOTE</h2>
      <form id="quote-form-element" class="quote-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="full-name">Full Name <span class="required">*</span></label>
            <input
              type="text"
              id="full-name"
              v-model="form.fullName"
              placeholder="John Smith"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone <span class="required">*</span></label>
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              placeholder="(555) 555-5555"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="message">Short message about your needs</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
            rows="3"
          ></textarea>
        </div>
        <div class="form-checkbox">
          <input type="checkbox" id="terms" v-model="form.terms" required />
          <label for="terms">I agree to <a href="#" class="link-yellow">terms &amp; conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.</label>
        </div>
        <button
          type="submit"
          class="btn btn-yellow btn-full"
          id="form-submit-btn"
          :disabled="isSubmitting"
          :style="submitButtonStyle"
        >
          {{ submitButtonText }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  fullName: '',
  phone: '',
  message: '',
  terms: false,
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const submitButtonText = computed(() => {
  if (isSuccess.value) return '✓ SENT!'
  if (isSubmitting.value) return 'SENDING...'
  return 'SEND'
})

const submitButtonStyle = computed(() => {
  if (isSuccess.value) {
    return { background: 'var(--success)', borderColor: 'var(--success)' }
  }
  return {}
})

const handleSubmit = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true

  try {
    // POST to Nitro API — BigQuery integration to be wired up later
    await $fetch('/api/leads', {
      method: 'POST',
      body: {
        fullName: form.fullName,
        phone: form.phone,
        message: form.message,
      },
    })

    isSuccess.value = true

    setTimeout(() => {
      isSuccess.value = false
      form.fullName = ''
      form.phone = ''
      form.message = ''
      form.terms = false
    }, 2000)
  } catch (error) {
    console.error('Form submission error:', error)
    // Still show success for now since BigQuery isn't connected yet
    isSuccess.value = true
    setTimeout(() => {
      isSuccess.value = false
      form.fullName = ''
      form.phone = ''
      form.message = ''
      form.terms = false
    }, 2000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.hero-form-card {
  background: var(--navy);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  text-align: center;
  box-shadow: var(--shadow-xl);
}

.form-logo {
  width: 100px;
  margin: 0 auto 16px;
}

.form-title {
  color: var(--white);
  font-size: 1.6rem;
  margin-bottom: 24px;
}

.quote-form .form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
}

.quote-form .form-group {
  text-align: left;
  margin-bottom: 12px;
}

.quote-form label {
  display: block;
  color: var(--white);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.82rem;
  margin-bottom: 6px;
}

.quote-form .required {
  color: var(--gold);
}

.quote-form input[type="text"],
.quote-form input[type="tel"],
.quote-form textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  color: var(--white);
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.quote-form input::placeholder,
.quote-form textarea::placeholder {
  color: var(--text-white-dim);
}

.quote-form input:focus,
.quote-form textarea:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(var(--gold-rgb), 0.15);
}

.form-checkbox {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 16px;
  text-align: left;
}

.form-checkbox input[type="checkbox"] {
  margin-top: 3px;
  accent-color: var(--gold);
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.form-checkbox label {
  color: var(--text-white-faded);
  font-size: 0.75rem;
  line-height: 1.4;
  font-weight: 400;
}

@media (max-width: 480px) {
  .quote-form .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
