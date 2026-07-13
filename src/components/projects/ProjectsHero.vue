<template>
  <section class="projects-hero">
    <div class="projects-hero__overlay"></div>
    <div class="projects-hero__glow"></div>

    <div class="container projects-hero__container">
      <div class="projects-hero__content fade-in">
        <p class="projects-hero__eyebrow">
          Experiencia en terreno
        </p>

        <h1>
          Proyectos que respaldan nuestra experiencia.
        </h1>

        <p>
          Conoce algunos de los proyectos eléctricos y obras civiles en los que
          nuestro equipo ha participado, desarrollando soluciones para
          instalaciones residenciales, comerciales, industriales y de
          infraestructura.
        </p>
      </div>

      <aside
        class="projects-hero__panel fade-in"
        aria-label="Áreas de experiencia de PROCELEC"
      >
        <p class="projects-hero__panel-label">
          Áreas de experiencia
        </p>

        <ul class="projects-hero__list">
          <li>
            <span></span>
            Proyectos inmobiliarios
          </li>

          <li>
            <span></span>
            Infraestructura eléctrica
          </li>

          <li>
            <span></span>
            Instalaciones comerciales
          </li>

          <li>
            <span></span>
            Proyectos industriales
          </li>

          <li>
            <span></span>
            Redes y electrificación
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.projects-hero {
  position: relative;
  min-height: 62vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(
      90deg,
      rgba(3, 8, 17, 0.98) 0%,
      rgba(3, 8, 17, 0.86) 50%,
      rgba(3, 8, 17, 0.7) 100%
    ),
    url('../../assets/images/parquegranadilla.jpeg');
  background-size: cover;
  background-position: center;
}

.projects-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(
      circle at 76% 35%,
      rgba(0, 153, 255, 0.28),
      transparent 34%
    ),
    linear-gradient(
      to bottom,
      rgba(3, 8, 17, 0.08),
      rgba(3, 8, 17, 0.82)
    );
}

.projects-hero__glow {
  position: absolute;
  top: 22%;
  right: 10%;
  z-index: -1;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: rgba(0, 153, 255, 0.2);
  filter: blur(70px);
  pointer-events: none;
}

.projects-hero__container {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--navbar-height) + 6rem);
  padding-bottom: 5.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  align-items: center;
  gap: 4rem;
}

.projects-hero__content {
  max-width: 730px;
}

.projects-hero__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.projects-hero h1 {
  max-width: 760px;
  margin-bottom: 1.4rem;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--color-white);
}

.projects-hero__content > p:last-child {
  max-width: 650px;
  color: rgba(255, 255, 255, 0.78);
  text-align: justify;
}

.projects-hero__panel {
  padding: 1.7rem;
  border: 1px solid rgba(99, 216, 255, 0.22);
  border-radius: var(--radius-xl);
  background:
    linear-gradient(
      160deg,
      rgba(13, 26, 43, 0.84),
      rgba(3, 8, 17, 0.8)
    );
  backdrop-filter: blur(20px);
  box-shadow:
    var(--shadow-dark),
    0 0 58px rgba(0, 153, 255, 0.14);
}

.projects-hero__panel-label {
  margin-bottom: 1.3rem;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.projects-hero__list {
  display: grid;
  gap: 0.9rem;
}

.projects-hero__list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.5;
}

.projects-hero__list span {
  width: 0.55rem;
  height: 0.55rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--color-primary-light);
  box-shadow: 0 0 16px var(--color-glow);
}

@media (max-width: 900px) {
  .projects-hero__container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .projects-hero__panel {
    max-width: 480px;
  }
}

@media (max-width: 640px) {
  .projects-hero {
    min-height: auto;
  }

  .projects-hero__container {
    padding-top: calc(var(--navbar-height) + 5rem);
    padding-bottom: 4rem;
  }

  .projects-hero h1 {
    font-size: clamp(2.35rem, 12vw, 3.7rem);
  }

  .projects-hero__content > p:last-child {
    text-align: left;
  }

  .projects-hero__panel {
    padding: 1.3rem;
    border-radius: var(--radius-lg);
  }
}
</style>