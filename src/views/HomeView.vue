<template>
  <section class="home-view section">
    <div class="container">
      <p class="home-view__eyebrow">PROCELEC 2.0</p>
      <h1>Proyectos eléctricos y obras civiles</h1>
      <p>
        Sitio en construcción. Esta será la nueva plataforma digital de PROCELEC.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.home-view {
  min-height: calc(100vh - var(--navbar-height));
  display: flex;
  align-items: center;
  background: var(--color-light);
}

.home-view__eyebrow {
  margin-bottom: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.home-view h1 {
  max-width: 760px;
  margin-bottom: 1rem;
  font-size: clamp(2.4rem, 6vw, 5rem);
}

.home-view p {
  max-width: 620px;
  font-size: 1.1rem;
}
</style>