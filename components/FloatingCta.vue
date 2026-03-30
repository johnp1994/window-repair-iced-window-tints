<template>
  <a
    href="#quote-form"
    class="floating-cta"
    :class="{ visible: isVisible }"
    id="floating-quote-btn"
    @click.prevent="scrollToQuote"
  >
    GET FREE QUOTE
  </a>
</template>

<script setup lang="ts">
const isVisible = ref(false)

const scrollToQuote = () => {
  if (import.meta.client) {
    const el = document.querySelector('#quote-form')
    if (el) {
      const headerH = document.getElementById('site-header')?.offsetHeight || 80
      const top = el.getBoundingClientRect().top + window.scrollY - headerH
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  const onScroll = () => {
    isVisible.value = window.scrollY > 100
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
})
</script>

<style scoped>
.floating-cta {
  position: fixed;
  bottom: 90px;
  right: 24px;
  z-index: 900;
  background: var(--gold);
  color: var(--navy);
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 1px;
  padding: 14px 22px;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-gold);
  cursor: pointer;
  transition: all var(--transition-fast);
  opacity: 0;
  transform: translateY(20px);
  text-transform: uppercase;
}

.floating-cta.visible {
  opacity: 1;
  transform: translateY(0);
}

.floating-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(var(--gold-rgb), 0.5);
}
</style>
