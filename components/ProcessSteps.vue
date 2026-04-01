<template>
  <section id="process" class="process-section">
    <div class="container">
      <h2 class="section-title center">OUR PROCESS<span class="title-underline center"></span></h2>
      <p class="section-subtitle">Our process is simple and only contains a few simple steps</p>
      <div class="process-grid">
        <template v-for="(step, index) in steps" :key="step.title">
          <div class="process-step animate-in" :id="`process-step-${index + 1}`">
            <div class="process-number">{{ index + 1 }}</div>
            <div class="process-icon"><i :class="step.icon"></i></div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
          <div v-if="index < steps.length - 1" class="process-connector">
            <i class="fas fa-arrow-right"></i>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { icon: 'fas fa-phone-alt', title: 'Consultation', description: 'Reach out for a custom quote for your automotive or commercial project.' },
  { icon: 'fas fa-clipboard-list', title: 'Design & Quote', description: 'We design your vision and provide a precise, no-obligation estimate.' },
  { icon: 'fas fa-tools', title: 'The Transformation', description: 'Our masters apply your premium tint, wrap, or detail with surgical precision.' },
  { icon: 'fas fa-check-circle', title: 'The Reveal', description: 'Drive away in your "Iced Out" masterpiece. Total satisfaction guaranteed.' },
]
</script>

<style scoped>
.process-section {
  padding: var(--section-padding);
  background: var(--navy-deep);
}

.process-grid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  margin-top: 20px;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  position: relative;
  flex: 1;
  max-width: 220px;
}

.process-number {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-circle);
  background: var(--primary);
  color: var(--navy);
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.process-icon {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-circle);
  background: var(--gray-card);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 16px;
  transition: all var(--transition-fast);
  border: 1px solid var(--border-light);
}

.process-step:hover .process-icon {
  background: var(--primary);
  color: var(--navy);
  transform: scale(1.1);
}

.process-step h3 {
  font-size: 1rem;
  color: var(--white);
  margin-bottom: 8px;
}

.process-step p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.process-connector {
  display: flex;
  align-items: center;
  padding-top: 75px;
  color: var(--primary);
  font-size: 1.2rem;
}

@media (max-width: 1024px) {
  .process-connector { display: none; }
  .process-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  .process-step { max-width: none; }
}

@media (max-width: 768px) {
  .process-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .process-grid {
    grid-template-columns: 1fr;
  }
}
</style>
