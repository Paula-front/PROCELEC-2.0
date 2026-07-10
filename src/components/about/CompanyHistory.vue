<template>
  <section class="company-history section">
    <div class="container company-history__container">
      <div class="company-history__content">
        <p class="company-history__eyebrow">Nuestra historia</p>

        <h2>
          Una empresa joven, respaldada por experiencia técnica en terreno.
        </h2>

        <p>
          PROCELEC nace el año 2024 como una empresa especializada en proyectos
          eléctricos y obras civiles, respaldada por un equipo profesional con
          más de diez años de experiencia en redes de distribución, empalmes,
          alumbrado, canalizaciones, gestión normativa y ejecución de obras.
        </p>

        <p>
          Nuestro trabajo se orienta a entregar soluciones confiables para
          proyectos residenciales, comerciales, industriales y de infraestructura,
          manteniendo siempre un enfoque en la seguridad, la calidad técnica y el
          cumplimiento de la normativa vigente.
        </p>
      </div>

      <div class="company-history__grid" aria-label="Datos destacados de PROCELEC">
        <article
          v-for="stat in companyStats"
          :key="stat.label"
          class="company-history__stat"
        >
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { companyStats } from '../../utils/companyData'
</script>

<style scoped>
.company-history {
  background:
    linear-gradient(180deg, var(--color-white) 0%, var(--color-light-soft) 100%);
}

.company-history__container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  align-items: start;
  gap: 4rem;
}

.company-history__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.company-history h2 {
  max-width: 720px;
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  color: var(--color-text);
}

.company-history p {
  max-width: 760px;
  margin-bottom: 1.1rem;
  color: var(--color-gray);
  text-align: justify;
}

.company-history__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.company-history__stat {
  min-height: 150px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--radius-lg);
  background: var(--color-white);
  border: 1px solid rgba(0, 153, 255, 0.1);
  box-shadow: var(--shadow-soft);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);
}

.company-history__stat:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 153, 255, 0.24);
  box-shadow: 0 22px 54px rgba(3, 8, 17, 0.16);
}

.company-history__stat strong {
  font-size: 1.75rem;
  font-family: var(--font-heading);
  color: var(--color-primary);
  line-height: 1;
}

.company-history__stat span {
  color: var(--color-gray);
  line-height: 1.5;
}

@media (max-width: 980px) {
  .company-history__container {
    grid-template-columns: 1fr;
  }

  .company-history__grid {
    max-width: 640px;
  }
}

@media (max-width: 640px) {
  .company-history__grid {
    grid-template-columns: 1fr;
  }

  .company-history p {
    text-align: left;
  }
}
</style>