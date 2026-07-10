<template>
  <section class="about-hero">
    <div class="about-hero__overlay"></div>

    <div class="about-hero__container">
      <div class="about-hero__content fade-in">
        <p class="about-hero__eyebrow">Quiénes Somos</p>

        <h1>Ingeniería, experiencia y compromiso en cada proyecto.</h1>

        <p>
          PROCELEC nace como una empresa orientada al desarrollo de proyectos eléctricos,
          obras civiles y soluciones técnicas para clientes públicos y privados,
          respaldada por un equipo con experiencia en terreno, gestión normativa y ejecución de obras.
        </p>
      </div>

      <div class="about-hero__card fade-in">
        <span>PROCELEC 2.0</span>
        <strong>Soluciones eléctricas con enfoque técnico y humano.</strong>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-hero {
  position: relative;
  min-height: 72vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    linear-gradient(rgba(3, 8, 17, 0.82), rgba(3, 8, 17, 0.88)),
    url('../../assets/images/condominiobosquesdepuyheue.png');
  background-size: cover;
  background-position: center;
}

.about-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 75% 35%, rgba(0, 153, 255, 0.22), transparent 34%),
    linear-gradient(90deg, rgba(3, 8, 17, 0.95), rgba(3, 8, 17, 0.66));
}

.about-hero__container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: calc(var(--navbar-height) + 5rem) 1.5rem 5rem;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 4rem;
  align-items: center;
}

.about-hero__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.about-hero h1 {
  max-width: 760px;
  margin-bottom: 1.4rem;
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--color-white);
}

.about-hero p {
  max-width: 650px;
  color: rgba(255, 255, 255, 0.78);
  text-align: justify;
}

.about-hero__card {
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(99, 216, 255, 0.22);
  background: rgba(13, 26, 43, 0.76);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow-dark);
}

.about-hero__card span {
  display: inline-flex;
  margin-bottom: 1rem;
  padding: 0.45rem 0.8rem;
  border-radius: var(--radius-full);
  color: var(--color-primary-light);
  background: rgba(0, 153, 255, 0.12);
  font-weight: 800;
  letter-spacing: 0.08em;
}

.about-hero__card strong {
  display: block;
  color: var(--color-white);
  font-size: 1.55rem;
  line-height: 1.25;
}

@media (max-width: 900px) {
  .about-hero__container {
    grid-template-columns: 1fr;
  }

  .about-hero__card {
    max-width: 420px;
  }
}

@media (max-width: 640px) {
  .about-hero {
    min-height: auto;
  }

  .about-hero__container {
    padding: calc(var(--navbar-height) + 5rem) 1.1rem 4rem;
  }

  .about-hero p {
    text-align: left;
  }
}
</style>