<template>
  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title center">OUR SERVICES<span class="title-underline center"></span></h2>
      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card animate-in"
          :id="service.id"
        >
          <div class="service-image">
            <img :src="service.image" :alt="service.title" />
          </div>
          <div class="service-body">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <a href="#" class="btn btn-dark">LEARN MORE <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import slidingDoor from '~/assets/images/sliding-door.png'
import windowRepair from '~/assets/images/window-repair.png'
import commercialGlass from '~/assets/images/commercial-glass.png'

const services = [
  {
    id: 'service-vehicle-tint',
    title: 'Vehicle Window Tinting',
    description: 'Premium automotive tinting services for enhanced privacy, heat reduction, and UV protection for your vehicle.',
    image: slidingDoor,
  },
  {
    id: 'service-home-repair',
    title: 'Home Window Repair',
    description: 'Expert residential window repair services in Cleveland, addressing cracks, seals, and glass replacement.',
    image: windowRepair,
  },
  {
    id: 'service-commercial-tint',
    title: 'Commercial Window Tinting',
    description: 'Energy-efficient and secure window tinting solutions for businesses, offices, and storefronts.',
    image: commercialGlass,
  },
  {
    id: 'service-storm-window',
    title: 'Storm Window Solutions',
    description: 'Specialized repair and tinting for storm windows to improve durability and insulation in any weather.',
    image: slidingDoor,
  },
]
</script>

<style scoped>
.services-section {
  padding: var(--section-padding);
  background: var(--gray-bg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-medium);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.15);
}

.service-image {
  height: 200px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.service-card:hover .service-image img {
  transform: scale(1.08);
}

.service-body {
  padding: 24px;
}

.service-body h3 {
  font-size: 1rem;
  color: var(--navy);
  margin-bottom: 10px;
}

.service-body p {
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
