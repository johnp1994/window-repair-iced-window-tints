<template>
  <section id="cta-banner" class="cta-section">
    <div class="container">
      <h2>GET A FREE QUOTE TODAY!</h2>
      <p>The glassperts sliding glass door &amp; window repair</p>
      <div class="cta-buttons">
        <a href="tel:+18664937545" class="btn btn-yellow btn-large" id="cta-phone-btn">
          <i class="fas fa-phone"></i> (866)-493-7545
        </a>
        <a href="#quote-form" class="btn btn-outline-white btn-large" id="cta-quote-btn" @click.prevent="scrollToQuote">
          GET FREE QUOTE
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>

<style scoped>
.cta-section {
  padding: 60px 0;
  background: linear-gradient(135deg, var(--navy) 0%, #003060 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -60%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: rgba(var(--gold-rgb), 0.08);
  border-radius: var(--radius-circle);
}

.cta-section h2 {
  color: var(--white);
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.cta-section p {
  color: var(--text-white-faded);
  font-size: 1rem;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 480px) {
  .cta-section h2 { font-size: 1.6rem; }
}
</style>
