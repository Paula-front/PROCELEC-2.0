<template>
  <footer class="footer">
    <div class="footer__container">
      <div>
        <h2 class="footer__brand">PROCELEC</h2>
        <p>Proyectos eléctricos y obras civiles.</p>
      </div>

      <p class="footer__copy">
        © {{ currentYear }} PROCELEC. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-dark);
  color: var(--color-white);
  padding: 2rem 1.5rem;
}

.footer__container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}

.footer__brand {
  color: var(--color-white);
  font-size: 1.1rem;
}

.footer p {
  color: rgba(255, 255, 255, 0.72);
}

.footer__copy {
  text-align: right;
}

@media (max-width: 768px) {
  .footer__container {
    flex-direction: column;
  }

  .footer__copy {
    text-align: left;
  }
}
</style>