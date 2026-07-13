<template>
  <section class="contact-hero">
    <div class="contact-hero__overlay"></div>
    <div class="contact-hero__glow"></div>

    <div class="container contact-hero__container">
      <div class="contact-hero__content fade-in">
        <p class="contact-hero__eyebrow">Contacto</p>

        <h1>Conversemos sobre tu próximo proyecto.</h1>

        <p>
          Cuéntanos qué necesitas y nuestro equipo revisará los antecedentes para
          orientarte con una solución técnica adecuada a las características de tu
          proyecto.
        </p>
      </div>

      <aside class="contact-hero__panel fade-in" aria-label="Datos de contacto">
        <p class="contact-hero__panel-label">Contacto directo</p>

        <div class="contact-hero__details">
          <a href="tel:+56951337137">
            <span>Teléfono</span>
            <strong>+56 9 5133 7137</strong>
          </a>

          <a href="mailto:fsanhueza@procelec.cl">
            <span>Correo</span>
            <strong>fsanhueza@procelec.cl</strong>
          </a>

          <div>
            <span>Cobertura</span>
            <strong>Región de Valparaíso, Región Metropolitana y  Región de Coquimbo</strong>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(
      90deg,
      rgba(3, 8, 17, 0.98) 0%,
      rgba(3, 8, 17, 0.86) 50%,
      rgba(3, 8, 17, 0.72) 100%
    ),
    url('../../assets/images/fondo.jpg');
  background-size: cover;
  background-position: center;
}

.contact-hero__overlay {
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

.contact-hero__glow {
  position: absolute;
  top: 22%;
  right: 12%;
  z-index: -1;
  width: 19rem;
  height: 19rem;
  border-radius: 50%;
  background: rgba(0, 153, 255, 0.2);
  filter: blur(70px);
  pointer-events: none;
}

.contact-hero__container {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--navbar-height) + 6rem);
  padding-bottom: 5.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  align-items: center;
  gap: 4rem;
}

.contact-hero__content {
  max-width: 720px;
}

.contact-hero__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.contact-hero h1 {
  max-width: 760px;
  margin-bottom: 1.4rem;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--color-white);
}

.contact-hero__content > p:last-child {
  max-width: 640px;
  color: rgba(255, 255, 255, 0.78);
  text-align: justify;
}

.contact-hero__panel {
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

.contact-hero__panel-label {
  margin-bottom: 1.3rem;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-primary-light);
}

.contact-hero__details {
  display: grid;
  gap: 0.9rem;
}

.contact-hero__details a,
.contact-hero__details div {
  padding: 1rem;
  display: grid;
  gap: 0.3rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(99, 216, 255, 0.14);
  background: rgba(255, 255, 255, 0.045);
}

.contact-hero__details span {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.58);
}

.contact-hero__details strong {
  color: var(--color-white);
  line-height: 1.35;
}

@media (max-width: 900px) {
  .contact-hero__container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .contact-hero__panel {
    max-width: 500px;
  }
}

@media (max-width: 640px) {
  .contact-hero {
    min-height: auto;
  }

  .contact-hero__container {
    padding-top: calc(var(--navbar-height) + 5rem);
    padding-bottom: 4rem;
  }

  .contact-hero h1 {
    font-size: clamp(2.35rem, 12vw, 3.7rem);
  }

  .contact-hero__content > p:last-child {
    text-align: left;
  }

  .contact-hero__panel {
    padding: 1.3rem;
    border-radius: var(--radius-lg);
  }
}
</style>