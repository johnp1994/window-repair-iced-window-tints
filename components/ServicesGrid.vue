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
import styling from '~/assets/images/styling-v2.png'
import detailing from '~/assets/images/detail-v2.png'
import aesthetics from '~/assets/images/aesthetics-v2.png'
import mech from '~/assets/images/mech-v2.png'
import tech from '~/assets/images/tech-v2.png'
import comm from '~/assets/images/comm-v2.png'

const services = [
  {
    id: 'service-auto-styling',
    title: 'Automotive Styling',
    description: 'Expert window tinting, headlight & taillight tints, custom vinyl wraps, decals, and chrome deletes for a total transformation.',
    image: styling,
  },
  {
    id: 'service-paint-protection',
    title: 'Detailing & Protection',
    description: 'Full interior/exterior detailing, paint correction, and ceramic coating for long-lasting "iced-out" shine and protection.',
    image: detailing,
  },
  {
    id: 'service-custom-wheels',
    title: 'Custom Aesthetics',
    description: 'Painted rims and painted calipers in any color of your choice, plus custom "shooting stars" interior headliners.',
    image: aesthetics,
  },
  {
    id: 'service-mechanical',
    title: 'Mechanical Maintenance',
    description: 'Keeping your vehicle running as good as it looks with professional oil changes, brake service, and new tires.',
    image: mech,
  },
  {
    id: 'service-aftermarket',
    title: 'Tech & Aftermarket Installs',
    description: 'Installation of radios, speakers, and any aftermarket parts to upgrade your ride with the latest technology.',
    image: tech,
  },
  {
    id: 'service-arch-tint',
    title: 'Commercial & Home Tints',
    description: 'Professional tinting for your business or home to improve energy efficiency, privacy, and curb appeal.',
    image: comm,
  },
]
</script>

<style scoped>
.services-section {
  padding: var(--section-padding);
  background: var(--navy-deep);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--gray-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-medium);
  border: 1px solid var(--border-light);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.4);
  border-color: var(--primary);
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
  font-size: 1.1rem;
  color: var(--white);
  margin-bottom: 10px;
}

.service-body p {
  color: var(--text-secondary);
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
