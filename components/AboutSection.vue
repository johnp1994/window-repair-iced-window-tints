<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-grid animate-in">
        <div class="about-content">
          <h2 class="section-title">ABOUT US<span class="title-underline"></span></h2>
          <p>The glassperts sliding glass door &amp; window repair is a family-owned business started by Manny Vega, who began his career at 16 and decided to open the company in 2007. We bring years of hands-on experience in sliding door, window, and glass repair, focusing on quality and customer satisfaction.</p>
          <p class="about-highlight">WHAT WE ARE BEST AT</p>
        </div>
        <div class="about-image">
          <img src="~/assets/images/company-van.png" alt="The Glassperts Company Van" />
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
