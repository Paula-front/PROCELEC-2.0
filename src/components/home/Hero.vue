<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroBackground})` }">
    <div class="hero__overlay"></div>
    <div class="hero__glow hero__glow--one"></div>
    <div class="hero__glow hero__glow--two"></div>

    <div class="hero__container">
      <div class="hero__content fade-in">
        <p class="hero__eyebrow">Ingeniería eléctrica · Obras civiles</p>

        <h1>
          Soluciones eléctricas en Baja y Media Tensión
        </h1>

        <p class="hero__description">
          Desarrollamos proyectos eléctricos, obras civiles, empalmes y redes de distribución para los sectores residencial, comercial e industrial, con foco en seguridad, calidad y cumplimiento normativo.
        </p>

        <div class="hero__actions" aria-label="Acciones principales">
          <RouterLink to="/contacto" class="btn btn-primary">
            Contactar
          </RouterLink>

          <RouterLink to="/servicios" class="hero__link">
            Ver servicios
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>

      <aside class="hero-panel fade-in" aria-label="Cobertura técnica PROCELEC">
        <div class="hero-panel__header">
          <span class="hero-panel__kicker">PROCELEC</span>
          <h2>Cobertura Técnica</h2>
        </div>

        <ul class="hero-panel__list">
          <li>
            <span>⚡</span>
            <p>Empalmes monofásicos, trifásicos y BT / MT</p>
          </li>
          <li>
            <span>⚡</span>
            <p>Redes aéreas y subterráneas</p>
          </li>
          <li>
            <span>⚡</span>
            <p>Proyectos residenciales e industriales</p>
          </li>
          <li>
            <span>⚡</span>
            <p>Obras civiles y eléctricas integrales</p>
          </li>
          <li>
            <span>⚡</span>
            <p>Gestión técnica y normativa</p>
          </li>
        </ul>

        <div class="hero-panel__footer">
  <span>📞 +56 9 5133 7137</span>
  <span>✉️ fsanhueza@procelec.cl</span>
</div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import heroBackground from '../../assets/images/fondo.jpg'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  z-index: -3;
  background:
    linear-gradient(
      90deg,
      rgba(3, 8, 17, 0.98) 0%,
      rgba(3, 8, 17, 0.9) 42%,
      rgba(3, 8, 17, 0.74) 72%,
      rgba(3, 8, 17, 0.86) 100%
    ),
    radial-gradient(circle at 68% 36%, rgba(0, 153, 255, 0.22), transparent 32%),
    radial-gradient(circle at 14% 72%, rgba(99, 216, 255, 0.12), transparent 30%);
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(3, 8, 17, 0.18), transparent 42%, rgba(3, 8, 17, 0.92)),
    radial-gradient(circle at center, transparent 42%, rgba(0, 0, 0, 0.38) 100%);
}

.hero__glow {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(42px);
  opacity: 0.45;
  pointer-events: none;
}

.hero__glow--one {
  width: 18rem;
  height: 18rem;
  right: 14%;
  top: 24%;
  background: rgba(0, 153, 255, 0.32);
}

.hero__glow--two {
  width: 14rem;
  height: 14rem;
  left: 10%;
  bottom: 8%;
  background: rgba(99, 216, 255, 0.16);
}

.hero__container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: calc(var(--navbar-height) + 6.5rem) 1.5rem 6rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 390px;
  align-items: center;
  gap: 4.5rem;
}

.hero__content {
  max-width: 650px;
}

.hero__eyebrow {
  margin-bottom: 1.1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.hero h1 {
  max-width: 690px;
  margin-bottom: 1.45rem;
  font-size: clamp(2.45rem, 5.2vw, 4.5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
  color: var(--color-white);
}

.hero__description {
  max-width: 560px;
  margin-bottom: 2.25rem;
  font-size: 1.02rem;
  color: rgba(255, 255, 255, 0.78);
  text-align: justify;
}

.hero__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.hero__link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 800;
  color: var(--color-white);
  transition:
    gap var(--transition-base),
    color var(--transition-base);
}

.hero__link:hover {
  gap: 0.75rem;
  color: var(--color-primary-light);
}

.hero-panel {
  position: relative;
  width: 100%;
  padding: 1.65rem;
  border: 1px solid rgba(99, 216, 255, 0.24);
  border-radius: var(--radius-xl);
  background:
    linear-gradient(180deg, rgba(13, 26, 43, 0.82), rgba(3, 8, 17, 0.78));
  backdrop-filter: blur(22px);
  box-shadow:
    0 26px 80px rgba(0, 0, 0, 0.42),
    0 0 70px rgba(0, 153, 255, 0.16);
  overflow: hidden;
}

.hero-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(135deg, rgba(99, 216, 255, 0.18), transparent 32%),
    linear-gradient(315deg, rgba(0, 153, 255, 0.12), transparent 34%);
  opacity: 0.9;
}

.hero-panel::after {
  content: '';
  position: absolute;
  inset: 1px;
  pointer-events: none;
  border-radius: calc(var(--radius-xl) - 1px);
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 82%);
}

.hero-panel__header,
.hero-panel__list,
.hero-panel__footer {
  position: relative;
  z-index: 1;
}

.hero-panel__kicker {
  display: inline-flex;
  margin-bottom: 0.6rem;
  padding: 0.42rem 0.72rem;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  color: var(--color-primary-light);
  background: rgba(0, 153, 255, 0.12);
  border: 1px solid rgba(99, 216, 255, 0.2);
}

.hero-panel h2 {
  margin-bottom: 1.25rem;
  font-size: 1.55rem;
  color: var(--color-white);
}

.hero-panel__list {
  display: grid;
  gap: 0.7rem;
}

.hero-panel__list li {
  display: grid;
  grid-template-columns: 2.2rem 1fr;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}

.hero-panel__list span {
  display: grid;
  place-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 900;
  color: var(--color-primary-light);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(99, 216, 255, 0.16);
}

.hero-panel__list p {
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.35;
}

.hero-panel__footer {
  margin-top: 1.35rem;
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: var(--radius-md);
  background: rgba(0, 153, 255, 0.1);
  border: 1px solid rgba(99, 216, 255, 0.17);
}

.hero-panel__footer span {
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.95rem;
}

@media (max-width: 980px) {
  .hero__container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .hero-panel {
    max-width: 440px;
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: auto;
  }

  .hero__container {
    padding: calc(var(--navbar-height) + 5rem) 1.1rem 4.5rem;
  }

  .hero h1 {
    font-size: clamp(2.35rem, 12vw, 3.7rem);
  }

  .hero__description {
    max-width: 100%;
    text-align: left;
  }

  .hero__actions {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero__actions .btn {
    width: 100%;
  }

  .hero-panel {
    padding: 1.25rem;
    border-radius: var(--radius-lg);
  }

  .hero-panel__footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>