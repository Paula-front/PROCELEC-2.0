<template>
  <section
    id="formulario-contacto"
    class="contact-form-section section"
  >
    <div class="container contact-form-section__container">
      <div class="contact-form-section__intro">
        <p class="contact-form-section__eyebrow">
          Iniciemos una conversación
        </p>

        <h2>Hablemos de tu proyecto.</h2>

        <p>
          Completa el formulario con los antecedentes principales y revisaremos tu
          solicitud para orientarte de acuerdo con las características técnicas del
          proyecto.
        </p>

        <div class="contact-form-section__note">
          <strong>¿Por qué elegir PROCELEC?</strong>

          <ul>
            <li>Atención personalizada.</li>
            <li>Evaluación técnica de tu proyecto.</li>
            <li>Respuesta oportuna y acompañamiento profesional.</li>
          </ul>
        </div>
      </div>

      <form
        class="contact-form"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <div class="contact-form__grid">
          <div class="contact-form__field">
            <label for="name">Nombre completo</label>

            <input
              id="name"
              v-model.trim="form.name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Ingresa tu nombre"
              :aria-invalid="Boolean(errors.name)"
              :aria-describedby="errors.name ? 'name-error' : undefined"
            />

            <small
              v-if="errors.name"
              id="name-error"
              class="contact-form__error"
            >
              {{ errors.name }}
            </small>
          </div>

          <div class="contact-form__field">
            <label for="company">
              Empresa <span>(opcional)</span>
            </label>

            <input
              id="company"
              v-model.trim="form.company"
              type="text"
              name="company"
              autocomplete="organization"
              placeholder="Nombre de la empresa"
            />
          </div>

          <div class="contact-form__field">
            <label for="email">Correo electrónico</label>

            <input
              id="email"
              v-model.trim="form.email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="nombre@correo.cl"
              :aria-invalid="Boolean(errors.email)"
              :aria-describedby="errors.email ? 'email-error' : undefined"
            />

            <small
              v-if="errors.email"
              id="email-error"
              class="contact-form__error"
            >
              {{ errors.email }}
            </small>
          </div>

          <div class="contact-form__field">
            <label for="phone">Teléfono</label>

            <input
              id="phone"
              v-model.trim="form.phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              placeholder="+56 9 1234 5678"
              :aria-invalid="Boolean(errors.phone)"
              :aria-describedby="errors.phone ? 'phone-error' : undefined"
            />

            <small
              v-if="errors.phone"
              id="phone-error"
              class="contact-form__error"
            >
              {{ errors.phone }}
            </small>
          </div>
        </div>

        <fieldset class="contact-form__fieldset">
          <legend>Tipo de proyecto</legend>

          <div class="contact-form__options">
            <label
              v-for="option in projectTypes"
              :key="option"
              class="contact-form__option"
            >
              <input
                v-model="form.projectType"
                type="radio"
                name="projectType"
                :value="option"
              />

              <span>{{ option }}</span>
            </label>
          </div>

          <small
            v-if="errors.projectType"
            class="contact-form__error contact-form__error--block"
          >
            {{ errors.projectType }}
          </small>
        </fieldset>

        <div class="contact-form__field contact-form__message">
          <label for="message">Cuéntanos sobre tu proyecto</label>

          <textarea
            id="message"
            v-model.trim="form.message"
            name="message"
            rows="6"
            placeholder="Describe brevemente el trabajo que necesitas, ubicación y antecedentes relevantes."
            :aria-invalid="Boolean(errors.message)"
            :aria-describedby="errors.message ? 'message-error' : undefined"
          ></textarea>

          <small
            v-if="errors.message"
            id="message-error"
            class="contact-form__error"
          >
            {{ errors.message }}
          </small>
        </div>

        <div class="contact-form__actions">
          <button
            class="btn btn-primary contact-form__submit"
            type="submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Enviando...' : 'Enviar consulta' }}
          </button>

          <p>
            Al enviar este formulario autorizas a PROCELEC a contactarte para
            responder tu solicitud.
          </p>
        </div>

        <p
          v-if="statusMessage"
          class="contact-form__status"
          :class="{
            'contact-form__status--success': submitStatus === 'success',
            'contact-form__status--error': submitStatus === 'error',
          }"
          role="status"
          aria-live="polite"
        >
          {{ statusMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const projectTypes = [
  'Habitacional',
  'Comercial',
  'Industrial',
  'Infraestructura',
  'Otro',
]

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref('')
const statusMessage = ref('')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+\d\s()-]{8,20}$/

const hasErrors = computed(() =>
  Object.values(errors).some(Boolean),
)

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })
}

const validateForm = () => {
  clearErrors()

  if (form.name.length < 3) {
    errors.name = 'Ingresa tu nombre completo.'
  }

  if (!emailPattern.test(form.email)) {
    errors.email = 'Ingresa un correo electrónico válido.'
  }

  if (!phonePattern.test(form.phone)) {
    errors.phone = 'Ingresa un teléfono válido.'
  }

  if (!form.projectType) {
    errors.projectType = 'Selecciona un tipo de proyecto.'
  }

  if (form.message.length < 20) {
    errors.message = 'Describe tu proyecto con al menos 20 caracteres.'
  }

  return !hasErrors.value
}

const resetForm = () => {
  form.name = ''
  form.company = ''
  form.email = ''
  form.phone = ''
  form.projectType = ''
  form.message = ''
}

const handleSubmit = async () => {
  submitStatus.value = ''
  statusMessage.value = ''

  if (!validateForm()) {
    submitStatus.value = 'error'
    statusMessage.value = 'Revisa los campos marcados antes de enviar.'
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch('/api/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || 'No fue posible enviar la consulta.',
      )
    }

    submitStatus.value = 'success'
    statusMessage.value =
      'Tu consulta fue enviada correctamente. Nos comunicaremos contigo a la brevedad.'

    resetForm()
  } catch (error) {
    submitStatus.value = 'error'
    statusMessage.value =
      error instanceof Error
        ? error.message
        : 'Ocurrió un problema al enviar el formulario. Inténtalo nuevamente.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-form-section {
  scroll-margin-top: 7.5rem;
  background:
    linear-gradient(
      180deg,
      var(--color-light-soft) 0%,
      var(--color-white) 100%
    );
}

.contact-form-section__container {
  display: grid;
  grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: 4rem;
}

.contact-form-section__intro {
  position: sticky;
  top: 8.5rem;
  max-width: 510px;
}

.contact-form-section__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.contact-form-section h2 {
  margin-bottom: 1.3rem;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  color: var(--color-text);
}

.contact-form-section__intro > p {
  color: var(--color-gray);
  line-height: 1.75;
  text-align: justify;
}

.contact-form-section__note {
  margin-top: 2rem;
  padding: 1.25rem;
  display: grid;
  gap: 0.45rem;
  border: 1px solid rgba(0, 153, 255, 0.14);
  border-radius: var(--radius-lg);
  background: rgba(0, 153, 255, 0.06);
}

.contact-form-section__note strong {
  color: var(--color-primary);
}

.contact-form-section__note ul {
  margin-top: 0.7rem;
  display: grid;
  gap: 0.65rem;
}

.contact-form-section__note li {
  position: relative;
  padding-left: 1.35rem;
  color: var(--color-gray);
  line-height: 1.55;
}

.contact-form-section__note li::before {
  content: '✓';
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 900;
  color: var(--color-primary);
}

.contact-form {
  width: 100%;
  max-width: 780px;
  justify-self: end;
  padding: 2rem;
  border: 1px solid rgba(0, 153, 255, 0.13);
  border-radius: var(--radius-xl);
  background: var(--color-white);
  box-shadow: var(--shadow-card);
}

.contact-form__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
}

.contact-form__field {
  display: grid;
  gap: 0.55rem;
}

.contact-form__fieldset,
.contact-form__message,
.contact-form__actions {
  margin-top: 1.3rem;
}

.contact-form label,
.contact-form legend {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text);
}

.contact-form label span {
  margin-left: 0.25rem;
  font-size: 0.76rem;
  font-weight: 500;
  color: var(--color-gray);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(100, 116, 139, 0.24);
  border-radius: var(--radius-md);
  background: var(--color-light-soft);
  color: var(--color-text);
  outline: none;
  transition:
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    background var(--transition-base);
}

.contact-form input {
  min-height: 52px;
  padding: 0 1rem;
}

.contact-form textarea {
  min-height: 145px;
  padding: 1rem;
  resize: vertical;
  line-height: 1.6;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(100, 116, 139, 0.72);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: rgba(0, 153, 255, 0.62);
  background: var(--color-white);
  box-shadow: 0 0 0 4px rgba(0, 153, 255, 0.1);
}

.contact-form input[aria-invalid='true'],
.contact-form textarea[aria-invalid='true'] {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.07);
}

.contact-form__fieldset {
  padding: 0;
  border: 0;
}

.contact-form__fieldset legend {
  margin-bottom: 0.8rem;
}

.contact-form__options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.contact-form__option {
  cursor: pointer;
}

.contact-form__option input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.contact-form__option span {
  min-height: 42px;
  margin: 0;
  padding: 0 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(100, 116, 139, 0.22);
  border-radius: var(--radius-full);
  background: var(--color-light-soft);
  color: var(--color-gray);
  cursor: pointer;
  transition:
    transform var(--transition-base),
    color var(--transition-base),
    border-color var(--transition-base),
    background var(--transition-base),
    box-shadow var(--transition-base);
}

.contact-form__option:hover span {
  transform: translateY(-2px);
  border-color: rgba(0, 153, 255, 0.32);
}

.contact-form__option input:checked + span {
  border-color: rgba(0, 153, 255, 0.45);
  background: rgba(0, 153, 255, 0.1);
  color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 153, 255, 0.06);
}

.contact-form__option input:focus-visible + span {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

.contact-form__error {
  color: #b91c1c;
  font-size: 0.8rem;
  line-height: 1.4;
}

.contact-form__error--block {
  display: block;
  margin-top: 0.7rem;
}

.contact-form__actions {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-form__submit {
  min-width: 230px;
}

.contact-form__submit:disabled {
  cursor: wait;
  opacity: 0.68;
  transform: none;
}

.contact-form__actions p {
  max-width: 520px;
  color: var(--color-gray);
  font-size: 0.82rem;
  line-height: 1.5;
}

.contact-form__status {
  margin-top: 1.25rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  line-height: 1.5;
}

.contact-form__status--success {
  border: 1px solid rgba(22, 163, 74, 0.22);
  background: rgba(22, 163, 74, 0.08);
  color: #166534;
}

.contact-form__status--error {
  border: 1px solid rgba(220, 38, 38, 0.2);
  background: rgba(220, 38, 38, 0.07);
  color: #991b1b;
}

@media (max-width: 980px) {
  .contact-form-section__container {
    grid-template-columns: 1fr;
  }

  .contact-form-section__intro {
    position: static;
  }

  .contact-form {
    max-width: none;
    justify-self: stretch;
  }
}

@media (max-width: 640px) {
  .contact-form-section {
    scroll-margin-top: 6.5rem;
  }

  .contact-form-section__intro > p {
    text-align: left;
  }

  .contact-form {
    padding: 1.25rem;
    border-radius: var(--radius-lg);
  }

  .contact-form__grid {
    grid-template-columns: 1fr;
  }

  .contact-form__options {
    display: grid;
    grid-template-columns: 1fr;
  }

  .contact-form__option span {
    width: 100%;
  }

  .contact-form__submit {
    width: 100%;
    min-width: 0;
  }
}
</style>