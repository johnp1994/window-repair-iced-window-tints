<template>
  <section id="faq" class="faq-section">
    <div class="container">
      <h2 class="section-title center light">FREQUENTLY ASKED QUESTIONS<span class="title-underline center"></span></h2>
      <div class="faq-list">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item animate-in"
          :class="{ active: activeIndex === index }"
          :id="`faq-${index + 1}`"
        >
          <button class="faq-question" :aria-expanded="activeIndex === index" @click="toggle(index)">
            <span>{{ faq.question }}</span>
            <i class="fas fa-plus"></i>
          </button>
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'Can you provide references from past clients?',
    answer: 'Absolutely, we can provide references from past clients. Additionally, you can read the reviews and testimonials from our satisfied customers on our website. If you would like to speak with specific past clients, we can provide their contact information upon request.',
  },
  {
    question: 'What sets you apart from other contractors in the area?',
    answer: 'At The glassperts sliding glass door & window repair, we distinguish ourselves through meticulous attention to detail, a dedication to quality, and a personalized approach. We prioritize client communication to seamlessly bring their vision to life.',
  },
  {
    question: 'What types of services do you offer?',
    answer: 'Our services at The glassperts sliding glass door & window repair include sliding glass door repair, window glass repair, commercial glass repair, and installation of impact windows and doors. We are dedicated to providing top-quality workmanship and reliable solutions.',
  },
  {
    question: 'Is there a fee for a consultation or estimate/quote?',
    answer: 'No, The glassperts sliding glass door & window repair offers complimentary estimates to all prospective clients.',
  },
]

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.faq-section {
  padding: var(--section-padding);
  background: var(--navy);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.faq-question {
  width: 100%;
  padding: 22px 0;
  background: none;
  border: none;
  color: var(--white);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  gap: 16px;
  transition: color var(--transition-fast);
}

.faq-question:hover {
  color: var(--gold);
}

.faq-question i {
  color: var(--gold);
  font-size: 1rem;
  flex-shrink: 0;
  transition: transform var(--transition-fast);
}

.faq-item.active .faq-question i {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-medium), padding var(--transition-fast);
}

.faq-item.active .faq-answer {
  max-height: 300px;
  padding-bottom: 22px;
}

.faq-answer p {
  color: var(--text-white-faded);
  font-size: 0.9rem;
  line-height: 1.7;
}
</style>
