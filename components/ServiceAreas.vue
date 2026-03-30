<template>
  <section id="service-areas" class="areas-section">
    <div class="container">
      <h2 class="section-title center">PROUDLY SERVING THESE AREAS<span class="title-underline center"></span></h2>
      <div class="areas-grid">
        <div class="areas-map">
          <div class="map-placeholder">
            <i class="fas fa-map-marked-alt"></i>
            <p>South Florida Service Area</p>
          </div>
        </div>
        <div class="areas-list">
          <div
            v-for="area in areas"
            :key="area"
            class="area-item animate-in"
          >
            <i class="fas fa-map-marker-alt"></i>
            <span>{{ area }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const areas = [
  'Miami', 'Kendall', 'Coral Gables', 'Homestead', 'Pinecrest',
  'Miami Lakes', 'Miami Beach', 'Hollywood', 'Cutler Bay', 'Cutler Ridge',
]
</script>

<style scoped>
.areas-section {
  padding: var(--section-padding);
  background: var(--white);
}

.areas-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.map-placeholder {
  background: var(--gray-bg);
  border-radius: var(--radius-lg);
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1rem;
  gap: 12px;
}

.map-placeholder i {
  font-size: 4rem;
  color: var(--gold);
}

.areas-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.area-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: var(--gray-bg);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.area-item:hover {
  background: var(--navy);
  color: var(--white);
  transform: translateX(6px);
}

.area-item i {
  color: var(--gold);
  font-size: 1.1rem;
}

.area-item span {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.88rem;
  text-transform: capitalize;
}

@media (max-width: 768px) {
  .areas-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .areas-list {
    grid-template-columns: 1fr;
  }
}
</style>
