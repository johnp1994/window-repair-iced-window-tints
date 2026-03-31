<template>
  <div class="review-page">
    <div class="review-container">
      <!-- Initial State: Ask for rating -->
      <transition name="fade" mode="out-in">
        <div v-if="state === 'initial'" key="initial" class="review-card">
          <img src="~/assets/images/logo.png" alt="The Glassperts" class="review-logo" />
          <h1 class="review-title">How was your experience?</h1>
          <p class="review-subtitle">We value your feedback. Please rate us below:</p>
          
          <div class="stars-container">
            <button 
              v-for="star in 5" 
              :key="star"
              type="button"
              class="star-btn"
              @mouseover="hoverRating = star"
              @mouseleave="hoverRating = 0"
              @click="handleRating(star)"
              :aria-label="`Rate ${star} stars`"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                :class="['star-icon', { 'filled': star <= (hoverRating || rating) }]"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Positive State: 4 or 5 stars -->
        <div v-else-if="state === 'positive'" key="positive" class="review-card positive-state">
          <!-- 5 Stars display -->
          <div class="stars-display">
            <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="star-icon filled">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h1 class="review-title text-gold">Awesome!</h1>
          <p class="review-subtitle">We're so glad to hear you had a great experience.</p>
          <p class="review-text">Would you mind taking a moment to share your experience on Google? It helps our small business immensely.</p>
          
          <a :href="googleReviewUrl" target="_blank" rel="noopener noreferrer" class="btn btn-yellow btn-full google-btn">
            Yes, Leave a Review on Google
          </a>
        </div>

        <!-- Negative State: 1 to 3 stars -->
        <div v-else-if="state === 'negative'" key="negative" class="review-card form-state">
          <h1 class="review-title">We're sorry to hear that.</h1>
          <p class="review-subtitle">We strive for 5-star service. Please tell us how we can improve.</p>
          
          <form @submit.prevent="submitFeedback" class="quote-form internal-form">
            <div class="form-group">
              <label for="feedback">Your Feedback <span class="required">*</span></label>
              <textarea 
                id="feedback" 
                v-model="feedbackData.message" 
                rows="4" 
                placeholder="Tell us what went wrong..."
                required
              ></textarea>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name (Optional)</label>
                <input type="text" id="name" v-model="feedbackData.name" placeholder="John Doe" />
              </div>
              <div class="form-group">
                <label for="phone">Phone (Optional)</label>
                <input type="tel" id="phone" v-model="feedbackData.phone" placeholder="(555) 555-5555" />
              </div>
            </div>

            <button 
              type="submit" 
              class="btn btn-yellow btn-full"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Feedback to Owner' }}
            </button>
          </form>
        </div>

        <!-- Submitted State -->
        <div v-else-if="state === 'submitted'" key="submitted" class="review-card submitted-state">
          <div class="success-icon">✓</div>
          <h1 class="review-title">Thank you</h1>
          <p class="review-subtitle">Your feedback has been sent directly to the business owner.</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const rating = ref(0)
const hoverRating = ref(0)
const state = ref<'initial' | 'positive' | 'negative' | 'submitted'>('initial')
const isSubmitting = ref(false)

// Placeholder for Google Review Link
const googleReviewUrl = ref('https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE')

const feedbackData = reactive({
  rating: 0,
  message: '',
  name: '',
  phone: '',
})

// Check for URL parameters if we send personalized links
const route = useRoute()
onMounted(() => {
  if (route.query.name) feedbackData.name = route.query.name as string
  if (route.query.phone) feedbackData.phone = route.query.phone as string
})

const handleRating = (selectedRating: number) => {
  rating.value = selectedRating
  feedbackData.rating = selectedRating
  
  // Natural delay to let user see their selection before transitioning
  setTimeout(() => {
    if (selectedRating === 5) {
      state.value = 'positive'
    } else {
      state.value = 'negative'
    }
  }, 400)
}

const submitFeedback = async () => {
  if (isSubmitting.value || !feedbackData.message) return
  isSubmitting.value = true

  try {
    await $fetch('/api/feedback', {
      method: 'POST',
      body: feedbackData,
    })
    
    // Show success screen
    state.value = 'submitted'
  } catch (error) {
    console.error('Failed to submit feedback', error)
    // Fail gracefully for user
    state.value = 'submitted'
  } finally {
    isSubmitting.value = false
  }
}

// Meta tags for SEO/sharing
useHead({
  title: 'Rate Your Experience | The Glassperts',
  meta: [
    { name: 'description', content: 'We value your feedback. Please let us know how your experience with The Glassperts went.' }
  ]
})
</script>

<style scoped>
.review-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  padding: 40px 20px;
}

.review-container {
  width: 100%;
  max-width: 500px;
}

.review-card {
  background: var(--navy);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  text-align: center;
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.review-logo {
  width: 120px;
  margin: 0 auto 24px;
}

.review-title {
  color: var(--white);
  font-size: 1.8rem;
  margin-bottom: 12px;
  font-family: var(--font-heading);
}

.review-subtitle {
  color: var(--text-white-dim);
  font-size: 1rem;
  margin-bottom: 32px;
  line-height: 1.5;
}

.review-text {
  color: var(--white);
  font-size: 1.1rem;
  margin-bottom: 32px;
  line-height: 1.5;
}

/* Stars Rating System */
.stars-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

.star-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
}

.star-btn:hover {
  transform: scale(1.15);
}

.star-icon {
  width: 48px;
  height: 48px;
  fill: transparent;
  stroke: var(--border-light);
  stroke-width: 1.5;
  transition: all 0.2s ease;
}

.star-icon.filled {
  fill: var(--gold);
  stroke: var(--gold);
}

@media (max-width: 480px) {
  .star-icon {
    width: 38px;
    height: 38px;
  }
}

/* Positive State specific */
.stars-display {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}
.stars-display .star-icon {
  width: 32px;
  height: 32px;
  stroke-width: 1;
}
.text-gold {
  color: var(--gold);
}
.google-btn {
  font-size: 1.1rem;
  padding: 16px 24px;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(253, 185, 39, 0.3);
}

/* Form Styles */
.quote-form.internal-form {
  text-align: left;
}

.internal-form .form-group {
  margin-bottom: 16px;
}

.internal-form label {
  display: block;
  color: var(--white);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 6px;
}

.internal-form .required {
  color: var(--gold);
}

.internal-form input[type="text"],
.internal-form input[type="tel"],
.internal-form textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  color: var(--white);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.internal-form input::placeholder,
.internal-form textarea::placeholder {
  color: var(--text-white-dim);
}

.internal-form input:focus,
.internal-form textarea:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(var(--gold-rgb), 0.15);
}

.internal-form .form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}

/* Submitted State */
.success-icon {
  width: 80px;
  height: 80px;
  background: var(--gold);
  color: var(--navy);
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 24px;
  font-weight: bold;
}

/* Vue Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
