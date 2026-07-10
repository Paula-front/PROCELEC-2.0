<template>
  <section class="values-section section">
    <div class="container">
      <div class="values-section__header">
        <p class="values-section__eyebrow">Nuestros valores</p>

        <h2>Principios que guían cada proyecto.</h2>

        <p>
          Nuestra forma de trabajar se basa en criterios técnicos, responsabilidad
          profesional y compromiso con cada cliente.
        </p>
      </div>

      <div class="values-section__grid">
        <article
          v-for="value in companyValues"
          :key="value.title"
          class="values-card"
        >
          <div class="values-card__title">
            <span class="values-card__dot"></span>
            <h3>{{ value.title }}</h3>
          </div>

          <p>{{ value.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { companyValues } from '../../utils/companyData'
</script>

<style scoped>
.values-section {
  background: var(--color-white);
}

.values-section__header {
  max-width: 760px;
  margin-bottom: 3.5rem;
}

.values-section__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.values-section h2 {
  margin-bottom: 1.2rem;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  color: var(--color-text);
}

.values-section__header p {
  color: var(--color-gray);
  text-align: justify;
}

.values-section__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.values-card {
  min-height: 210px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.4rem;
  border-radius: var(--radius-lg);
  background: var(--color-light-soft);
  border: 1px solid rgba(0, 153, 255, 0.12);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base),
    background var(--transition-base);
}

.values-card:hover {
  transform: translateY(-5px);
  background: var(--color-white);
  border-color: rgba(0, 153, 255, 0.3);
  box-shadow: 0 20px 46px rgba(0, 153, 255, 0.13);
}

.values-card__title {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.values-card__dot {
  width: 0.75rem;
  height: 0.75rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--color-primary);
  box-shadow: 0 0 18px var(--color-glow);
}

.values-card h3 {
  font-size: 1rem;
  color: var(--color-primary);
}

.values-card p {
  color: var(--color-gray);
  line-height: 1.65;
  text-align: left;
}

@media (max-width: 1100px) {
  .values-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 760px) {
  .values-section__grid {
    grid-template-columns: 1fr;
  }

  .values-card {
    min-height: auto;
  }

  .values-section__header p {
    text-align: left;
  }
}
</style>