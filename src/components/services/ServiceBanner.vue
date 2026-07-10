<template>
  <section class="service-banner">
    <div class="service-banner__overlay"></div>

    <div class="container service-banner__container">
      <div class="service-banner__intro">
        <p class="service-banner__eyebrow">Capacidad técnica</p>

        <h2>Experiencia aplicada a proyectos eléctricos reales.</h2>

        <p>
          Integramos conocimientos técnicos, experiencia en terreno y cumplimiento
          normativo para desarrollar soluciones confiables en Baja y Media Tensión.
        </p>
      </div>

      <div class="service-banner__grid" aria-label="Capacidades técnicas de PROCELEC">
        <article
          v-for="item in capabilities"
          :key="item.title"
          class="service-banner__item"
        >
          <component
            :is="item.icon"
            class="service-banner__icon"
            :size="24"
            :stroke-width="2"
            aria-hidden="true"
          />

          <div>
            <strong>{{ item.title }}</strong>
            <span>{{ item.text }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  BadgeCheck,
  Cable,
  ClipboardCheck,
  Gauge,
  Lightbulb,
  Zap,
} from 'lucide-vue-next'

const capabilities = [
  {
    icon: BadgeCheck,
    title: '+10 años',
    text: 'Experiencia del equipo técnico',
  },
  {
    icon: Zap,
    title: 'BT / MT',
    text: 'Soluciones en Baja y Media Tensión',
  },
  {
    icon: ClipboardCheck,
    title: 'SEC · RIC',
    text: 'Trabajo bajo criterios normativos',
  },
  {
    icon: Cable,
    title: 'Redes',
    text: 'Infraestructura aérea y subterránea',
  },
  {
    icon: Lightbulb,
    title: 'Alumbrado',
    text: 'Sistemas públicos y ornamentales',
  },
  {
    icon: Gauge,
    title: 'Eficiencia',
    text: 'Mejora del desempeño eléctrico',
  },
]
</script>

<style scoped>
.service-banner {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      rgba(3, 8, 17, 0.98),
      rgba(7, 17, 31, 0.96)
    ),
    url('../../assets/images/fondo.jpg');
  background-size: cover;
  background-position: center;
}

.service-banner__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 78% 35%,
      rgba(0, 153, 255, 0.22),
      transparent 34%
    ),
    linear-gradient(
      90deg,
      rgba(3, 8, 17, 0.98),
      rgba(3, 8, 17, 0.82)
    );
}

.service-banner__container {
  position: relative;
  z-index: 1;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.service-banner__intro {
  max-width: 760px;
  margin-bottom: 3.5rem;
}

.service-banner__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.service-banner h2 {
  max-width: 720px;
  margin-bottom: 1.3rem;
  font-size: clamp(2.1rem, 4vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  color: var(--color-white);
}

.service-banner__intro > p:last-child {
  max-width: 650px;
  color: rgba(255, 255, 255, 0.76);
  text-align: justify;
}

.service-banner__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.service-banner__item {
  min-height: 140px;
  padding: 1.35rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid rgba(99, 216, 255, 0.16);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.055);
  backdrop-filter: blur(16px);
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    background var(--transition-base),
    box-shadow var(--transition-base);
}

.service-banner__item:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 216, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 42px rgba(0, 153, 255, 0.1);
}

.service-banner__icon {
  flex-shrink: 0;
  color: var(--color-primary-light);
}

.service-banner__item strong {
  display: block;
  margin-bottom: 0.45rem;
  font-size: 1.05rem;
  color: var(--color-white);
}

.service-banner__item span {
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.55;
}

@media (max-width: 900px) {
  .service-banner__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .service-banner__container {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }

  .service-banner__intro > p:last-child {
    text-align: left;
  }

  .service-banner__grid {
    grid-template-columns: 1fr;
  }
}
</style>