<template>
  <section class="about-cta">
    <div class="about-cta__overlay"></div>

    <div class="container about-cta__container">
      <div class="about-cta__content">
        <p class="about-cta__eyebrow">Trabajemos juntos</p>

        <h2>¿Necesitas desarrollar un proyecto eléctrico?</h2>

        <p>
          Nuestro equipo puede acompañarte desde la planificación técnica hasta la
          ejecución, con foco en seguridad, calidad y cumplimiento normativo.
        </p>

        <RouterLink to="/contacto" class="btn btn-primary">
          Contactar
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about-cta {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(rgba(3, 8, 17, 0.86), rgba(3, 8, 17, 0.92)),
    url('../../assets/images/fondo.jpg');
  background-size: cover;
  background-position: center;
}

.about-cta__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 78% 38%, rgba(0, 153, 255, 0.24), transparent 34%),
    linear-gradient(90deg, rgba(3, 8, 17, 0.96), rgba(3, 8, 17, 0.72));
}

.about-cta__container {
  position: relative;
  z-index: 1;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.about-cta__content {
  max-width: 720px;
}

.about-cta__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.about-cta h2 {
  max-width: 700px;
  margin-bottom: 1.4rem;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: var(--color-white);
}

.about-cta p {
  max-width: 620px;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.78);
  text-align: justify;
}

@media (max-width: 640px) {
  .about-cta__container {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }

  .about-cta p {
    text-align: left;
  }

  .about-cta .btn {
    width: 100%;
  }
}
</style>