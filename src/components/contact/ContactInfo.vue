<template>
  <section class="contact-info section">
    <div class="container contact-info__container">
      <div class="contact-info__content">
        <p class="contact-info__eyebrow">Hablemos de tu proyecto</p>

        <h2>Estamos disponibles para orientarte.</h2>

        <p>
          Puedes comunicarte directamente con PROCELEC para consultas técnicas,
          evaluación de proyectos eléctricos, empalmes, redes, alumbrado, obras
          civiles y otros requerimientos asociados a instalaciones en Baja y
          Media Tensión.
        </p>
      </div>

      <div class="contact-info__grid">
        <article class="contact-info__card">
          <div class="contact-info__icon">
            <Phone :size="24" :stroke-width="2" aria-hidden="true" />
          </div>

          <div>
            <span>Teléfono</span>

            <a href="tel:+56951337137">
              +56 9 5133 7137
            </a>
          </div>
        </article>

        <article class="contact-info__card">
          <div class="contact-info__icon">
            <Mail :size="24" :stroke-width="2" aria-hidden="true" />
          </div>

          <div>
            <span>Correo electrónico</span>

            <a href="mailto:fsanhueza@procelec.cl">
              fsanhueza@procelec.cl
            </a>
          </div>
        </article>

        <article class="contact-info__card">
          <div class="contact-info__icon">
            <MapPin :size="24" :stroke-width="2" aria-hidden="true" />
          </div>

          <div>
            <span>Cobertura</span>

            <strong>
              Región de Valparaíso, Región Metropolitana y  Región de Coquimbo
            </strong>
          </div>
        </article>

        <article class="contact-info__card">
          <div class="contact-info__icon">
            <Clock3 :size="24" :stroke-width="2" aria-hidden="true" />
          </div>

          <div>
            <span>Horario de atención</span>

            <strong>
              Lunes a viernes
            </strong>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-vue-next'
</script>

<style scoped>
.contact-info {
  background:
    linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-light-soft) 100%
    );
}

.contact-info__container {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: start;
  gap: 4rem;
}

.contact-info__content {
  max-width: 580px;
}

.contact-info__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.contact-info h2 {
  margin-bottom: 1.3rem;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  color: var(--color-text);
}

.contact-info__content > p:last-child {
  color: var(--color-gray);
  line-height: 1.75;
  text-align: justify;
}

.contact-info__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.contact-info__card {
  min-height: 150px;
  padding: 1.35rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid rgba(0, 153, 255, 0.12);
  border-radius: var(--radius-lg);
  background: var(--color-white);
  box-shadow: var(--shadow-soft);
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base);
}

.contact-info__card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 153, 255, 0.28);
  box-shadow:
    0 22px 50px rgba(3, 8, 17, 0.14),
    0 0 36px rgba(0, 153, 255, 0.08);
}

.contact-info__icon {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: var(--radius-md);
  color: var(--color-primary);
  background: rgba(0, 153, 255, 0.1);
}

.contact-info__card span {
  display: block;
  margin-bottom: 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-gray);
}

.contact-info__card a,
.contact-info__card strong {
  color: var(--color-text);
  line-height: 1.5;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.contact-info__card a {
  transition: color var(--transition-base);
}

.contact-info__card a:hover {
  color: var(--color-primary);
}

@media (max-width: 980px) {
  .contact-info__container {
    grid-template-columns: 1fr;
  }

  .contact-info__grid {
    max-width: 760px;
  }
}

@media (max-width: 640px) {
  .contact-info__content > p:last-child {
    text-align: left;
  }

  .contact-info__grid {
    grid-template-columns: 1fr;
  }

  .contact-info__card {
    min-height: auto;
  }
}
</style>