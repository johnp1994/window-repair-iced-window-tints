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
import pinkBronco from '~/assets/images/pink-bronco.png'
import yellowCharger from '~/assets/images/yellow-charger.png'
import styling from '~/assets/images/styling-v2.png'
import detailing from '~/assets/images/detail-v2.png'
import comm from '~/assets/images/comm-v2.png'

const galleryItems = [
  { image: pinkBronco, alt: 'Custom Pink Bronco styling and tint' },
  { image: yellowCharger, alt: 'Yellow Charger with dark premium window tint' },
  { image: styling, alt: 'Professional automotive styling details' },
  { image: detailing, alt: 'High-gloss ceramic coating transformation' },
  { image: comm, alt: 'Commercial window tinting shop exterior' },
  { image: pinkBronco, alt: 'Completed "Iced Out" custom wrap' },
]
</script>

<style scoped>
.gallery-section {
  padding: var(--section-padding);
  background: var(--dark);
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
