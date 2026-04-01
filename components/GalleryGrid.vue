<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <p class="section-label">SEE WHY OUR CUSTOMERS LOVE US</p>
      <h2 class="section-title center">SEE OUR WORK<span class="title-underline center"></span></h2>
      <div class="gallery-grid">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="gallery-item animate-in"
        >
          <img :src="item.image" :alt="item.alt" />
        </div>
      </div>
      <div class="gallery-cta">
        <a href="#" class="btn btn-outline-white" id="gallery-see-all-btn">SEE ALL PHOTOS</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import slidingDoor from '~/assets/images/sliding-door.png'
import windowRepair from '~/assets/images/window-repair.png'
import commercialGlass from '~/assets/images/commercial-glass.png'
import companyVan from '~/assets/images/company-van.png'
import heroBg from '~/assets/images/hero-bg.png'

const galleryItems = [
  { image: slidingDoor, alt: 'Vehicle window tinting' },
  { image: windowRepair, alt: 'Home window glass repair' },
  { image: commercialGlass, alt: 'Commercial window tinting' },
  { image: companyVan, alt: 'Iced Window Tints service vehicle' },
  { image: heroBg, alt: 'Window repair work in progress' },
  { image: slidingDoor, alt: 'Completed window tint job' },
]
</script>

<style scoped>
.gallery-section {
  padding: var(--section-padding);
  background: var(--navy);
}

.gallery-section .section-label {
  color: rgba(255, 255, 255, 0.5);
}

.gallery-section .section-title {
  color: var(--white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
  position: relative;
}

.gallery-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(var(--navy-rgb), 0);
  transition: background var(--transition-fast);
}

.gallery-item:hover::after {
  background: rgba(var(--navy-rgb), 0.3);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.gallery-cta {
  text-align: center;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
