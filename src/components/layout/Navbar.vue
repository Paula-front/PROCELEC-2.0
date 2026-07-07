<template>
  <header class="navbar">
    <div class="navbar__container">
      <RouterLink to="/" class="navbar__brand" aria-label="Ir al inicio">
        <span class="navbar__brand-mark">P</span>
        <span class="navbar__brand-text">PROCELEC</span>
      </RouterLink>

      <nav class="navbar__nav" aria-label="Navegación principal">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/quienes-somos">Quiénes Somos</RouterLink>
        <RouterLink to="/servicios">Servicios</RouterLink>
        <RouterLink to="/proyectos">Proyectos</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: var(--navbar-height);
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid var(--color-gray-light);
  backdrop-filter: blur(16px);
}

.navbar__container {
  width: 100%;
  max-width: var(--container-width);
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-dark);
}

.navbar__brand-mark {
  width: 2.35rem;
  height: 2.35rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--color-white);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  box-shadow: 0 0 22px var(--color-glow);
}

.navbar__brand-text {
  font-size: 1rem;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__nav a {
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-dark-soft);
  transition: color var(--transition-base);
}

.navbar__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.45rem;
  width: 0;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.navbar__nav a:hover,
.navbar__nav a.router-link-active {
  color: var(--color-primary);
}

.navbar__nav a:hover::after,
.navbar__nav a.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .navbar__nav {
    display: none;
  }
}
</style>