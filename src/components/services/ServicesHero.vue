<template>
  <section class="services-hero">
    <div class="services-hero__overlay"></div>
    <div class="services-hero__glow"></div>

    <div class="container services-hero__container">
      <div class="services-hero__content fade-in">
        <p class="services-hero__eyebrow">
          Ingeniería eléctrica y obras civiles
        </p>

        <h1>Servicios eléctricos para proyectos de distintas escalas.</h1>

        <p>
          Desarrollamos soluciones en Baja y Media Tensión, desde el diseño y la
          evaluación técnica hasta la ejecución de obras, redes, empalmes,
          alumbrado y sistemas eléctricos complementarios.
        </p>
      </div>

      <aside
        class="services-hero__panel fade-in"
        aria-label="Especialidades de PROCELEC"
      >
        <p>Especialidades</p>

        <div class="services-hero__tags">
          <span>BT / MT</span>
          <span>Empalmes</span>
          <span>Redes</span>
          <span>Alumbrado</span>
          <span>Obras civiles</span>
          <span>Estudios técnicos</span>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.services-hero {
  position: relative;
  min-height: 62vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(
      90deg,
      rgba(3, 8, 17, 0.97) 0%,
      rgba(3, 8, 17, 0.84) 52%,
      rgba(3, 8, 17, 0.76) 100%
    ),
    url('../../assets/images/fondo.jpg');
  background-size: cover;
  background-position: center;
}

.services-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(
      circle at 74% 36%,
      rgba(0, 153, 255, 0.28),
      transparent 32%
    ),
    linear-gradient(
      to bottom,
      rgba(3, 8, 17, 0.08),
      rgba(3, 8, 17, 0.72)
    );
}

.services-hero__glow {
  position: absolute;
  top: 22%;
  right: 12%;
  z-index: -1;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  background: rgba(0, 153, 255, 0.18);
  filter: blur(60px);
  pointer-events: none;
}

.services-hero__container {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--navbar-height) + 6rem);
  padding-bottom: 5.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 350px;
  align-items: center;
  gap: 4rem;
}

.services-hero__content {
  max-width: 720px;
}

.services-hero__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.services-hero h1 {
  max-width: 760px;
  margin-bottom: 1.4rem;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--color-white);
}

.services-hero__content > p:last-child {
  max-width: 650px;
  color: rgba(255, 255, 255, 0.78);
  text-align: justify;
}

.services-hero__panel {
  padding: 1.6rem;
  border: 1px solid rgba(99, 216, 255, 0.22);
  border-radius: var(--radius-xl);
  background:
    linear-gradient(
      160deg,
      rgba(13, 26, 43, 0.82),
      rgba(3, 8, 17, 0.76)
    );
  backdrop-filter: blur(20px);
  box-shadow:
    var(--shadow-dark),
    0 0 55px rgba(0, 153, 255, 0.12);
}

.services-hero__panel > p {
  margin-bottom: 1.2rem;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.services-hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.services-hero__tags span {
  display: inline-flex;
  padding: 0.65rem 0.85rem;
  border: 1px solid rgba(99, 216, 255, 0.16);
  border-radius: var(--radius-full);
  font-size: 0.86rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.84);
  background: rgba(255, 255, 255, 0.055);
}

@media (max-width: 900px) {
  .services-hero__container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .services-hero__panel {
    max-width: 480px;
  }
}

@media (max-width: 640px) {
  .services-hero {
    min-height: auto;
  }

  .services-hero__container {
    padding-top: calc(var(--navbar-height) + 5rem);
    padding-bottom: 4rem;
  }

  .services-hero h1 {
    font-size: clamp(2.35rem, 12vw, 3.7rem);
  }

  .services-hero__content > p:last-child {
    text-align: left;
  }

  .services-hero__panel {
    padding: 1.3rem;
    border-radius: var(--radius-lg);
  }
}
</style>