<template>
  <section class="services-grid section">
    <div class="container">
      <div class="services-grid__header">
        <p class="services-grid__eyebrow">Nuestros servicios</p>

        <h2>Soluciones eléctricas integrales para cada proyecto.</h2>

        <p>
          Desarrollamos servicios especializados en Baja y Media Tensión,
          abarcando diseño, ejecución, regularización y apoyo técnico para
          proyectos residenciales, comerciales, industriales y de infraestructura.
        </p>
      </div>

      <div class="services-grid__content">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
import { services } from '../../utils/servicesData'
</script>

<style scoped>
.services-grid {
  background:
    linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-light-soft) 100%
    );
}

.services-grid__header {
  max-width: 780px;
  margin-bottom: 3.5rem;
}

.services-grid__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.services-grid h2 {
  margin-bottom: 1.2rem;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  color: var(--color-text);
}

.services-grid__header p {
  color: var(--color-gray);
  text-align: justify;
}

.services-grid__content {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

@media (max-width: 1100px) {
  .services-grid__content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .services-grid__header p {
    text-align: left;
  }

  .services-grid__content {
    grid-template-columns: 1fr;
  }
}
</style>