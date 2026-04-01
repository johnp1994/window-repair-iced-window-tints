<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-grid animate-in">
        <div class="about-content">
          <h2 class="section-title">ABOUT US<span class="title-underline"></span></h2>
          <p>Founded and led by Zay, Iced Window Tints is Cleveland's premier automotive styling and maintenance powerhouse. With over <strong>4+ years of industry experience</strong> and <strong>3000+ vehicles</strong> successfully transformed, Zay has built a reputation for perfection in everything from high-end window tinting and custom vinyl wraps to comprehensive detailing.</p>
          <p>We're not just about tints; we are a full-service custom shop. Whether you're looking for professional paint correction and ceramic coating, custom painted calipers and rims, or expert mechanical maintenance like oil changes and brakes, Iced Window Tints delivers "ice-cold" precision to every job.</p>
          <p class="about-highlight">THE ICER: 3000+ VEHICLES TRANSFORMED 🥶🔪</p>
        </div>
        <div class="about-image">
          <img src="~/assets/images/iced-van.png" alt="Iced Window Tints Service Vehicle" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: var(--section-padding);
  background: var(--white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-content p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-highlight {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--gold);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.about-image img {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-slow);
}

.about-image:hover img {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
