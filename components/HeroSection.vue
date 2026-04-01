<template>
  <section id="hero" class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-inner">
      <div class="hero-content">
        <h1 class="hero-title">ICED WINDOW TINTS<br/>VEHICLE TINTING & HOME REPAIR</h1>
        <p class="hero-subtitle">Iced Window Tints specializes in premium vehicle tinting and expert home window repair services in Cleveland, Ohio. With a commitment to quality and professional service, we ensure your windows are perfectly iced and protected.</p>
      </div>
      <QuoteForm />
    </div>
    <div class="wave-divider">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 80C840 87 960 93 1080 90C1200 87 1320 73 1380 66.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  background: url('~/assets/images/hero-bg.png') center center / cover no-repeat;
  display: flex;
  align-items: center;
  padding-top: var(--header-height);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--navy-rgb), 0.88) 0%,
    rgba(var(--navy-rgb), 0.7) 50%,
    rgba(var(--navy-rgb), 0.5) 100%
  );
  z-index: 1;
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 60px 20px 140px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-title {
  font-size: 2.8rem;
  color: var(--white);
  margin-bottom: 24px;
  line-height: 1.15;
}

.hero-subtitle {
  color: var(--text-white-muted);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 520px;
}

.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  line-height: 0;
}

.wave-divider svg {
  width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-title { font-size: 2.2rem; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 1.8rem; }
  .hero-inner { padding: 40px 20px 120px; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 1.5rem; }
}
</style>
