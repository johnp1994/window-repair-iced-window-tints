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
  { icon: 'fas fa-phone-alt', title: 'Contact Us', description: 'Reach out to us by phone or through our contact form' },
  { icon: 'fas fa-clipboard-list', title: 'Free Estimate', description: 'We provide a free, no-obligation estimate for your needs' },
  { icon: 'fas fa-tools', title: 'Repair', description: 'Our expert technicians perform the repair with quality materials' },
  { icon: 'fas fa-check-circle', title: 'Complete', description: 'Enjoy your perfectly repaired glass doors and windows' },
]
</script>

<style scoped>
.process-section {
  padding: var(--section-padding);
  background: var(--white);
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
  background: var(--gold);
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
  background: var(--navy);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 16px;
  transition: all var(--transition-fast);
}

.process-step:hover .process-icon {
  background: var(--gold);
  color: var(--navy);
  transform: scale(1.1);
}

.process-step h3 {
  font-size: 0.9rem;
  color: var(--navy);
  margin-bottom: 8px;
}

.process-step p {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.process-connector {
  display: flex;
  align-items: center;
  padding-top: 75px;
  color: var(--gold);
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
