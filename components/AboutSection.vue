<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-grid animate-in">
        <div class="about-content">
          <h2 class="section-title">ABOUT US<span class="title-underline"></span></h2>
          <p>Iced Window Tints is Cleveland's premier shop for expert Automotive Window Tinting, custom Vinyl Wraps, and Professional Detailing. Led by Zay, we specialize in transforming vehicles with high-quality finishes while also providing expert residential and commercial window solutions. Our commitment to excellence, meticulous attention to detail, and customer satisfaction has made us a trusted name for both car enthusiasts and homeowners throughout Cleveland, Ohio.</p>
          <p class="about-highlight">ICE-COLD PRECISION IN EVERY TINT</p>
        </div>
        <div class="about-image">
          <img src="~/assets/images/company-van.png" alt="Iced Window Tints Service Vehicle" />
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
