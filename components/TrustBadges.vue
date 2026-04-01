<template>
  <section id="trust-badges" class="trust-section">
    <div class="container">
      <div class="trust-grid">
        <div v-for="badge in badges" :key="badge.label" class="trust-item animate-in">
          <div class="trust-icon"><i :class="badge.icon"></i></div>
          <span>{{ badge.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const badges = [
  { icon: 'fas fa-map-marker-alt', label: '100% Local' },
  { icon: 'fas fa-home', label: 'Family Business' },
  { icon: 'fas fa-award', label: '23+ Years Experience' },
  { icon: 'fas fa-shield-halved', label: 'Insured' },
  { icon: 'fas fa-certificate', label: 'Fully Licensed' },
  { icon: 'fas fa-wheelchair', label: 'Handicap Accessible' },
]
</script>

<style scoped>
.trust-section {
  background: var(--navy);
  padding: 30px 0;
  position: relative;
  z-index: 4;
}

.trust-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--white);
  text-align: center;
}

.trust-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-circle);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--gold);
  transition: all var(--transition-fast);
}

.trust-item:hover .trust-icon {
  border-color: var(--gold);
  background: rgba(var(--gold-rgb), 0.1);
  transform: scale(1.1);
}

.trust-item span {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 480px) {
  .trust-grid { gap: 20px; }
}
</style>
