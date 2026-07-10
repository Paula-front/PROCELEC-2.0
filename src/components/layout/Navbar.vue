<template>
  <header
    class="navbar"
    :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isMobileMenuOpen }"
  >
    <div class="navbar__shell">
      <RouterLink to="/" class="navbar__logo" aria-label="Ir al inicio de PROCELEC">
        <img :src="logoBlanco" alt="PROCELEC" />
      </RouterLink>

      <nav class="navbar__nav" aria-label="Navegación principal">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/servicios">Servicios</RouterLink>
        <RouterLink to="/proyectos">Proyectos</RouterLink>
        <RouterLink to="/quienes-somos">Empresa</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>

      <RouterLink to="/contacto" class="navbar__cta">
        Contactar
      </RouterLink>

      <button
        class="navbar__toggle"
        type="button"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Abrir o cerrar menú"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="navbar__mobile" v-if="isMobileMenuOpen">
      <RouterLink to="/" @click="closeMobileMenu">Inicio</RouterLink>
      <RouterLink to="/servicios" @click="closeMobileMenu">Servicios</RouterLink>
      <RouterLink to="/proyectos" @click="closeMobileMenu">Proyectos</RouterLink>
      <RouterLink to="/quienes-somos" @click="closeMobileMenu">Empresa</RouterLink>
      <RouterLink to="/contacto" @click="closeMobileMenu">Contacto</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import logoBlanco from '../../assets/logos/logoblanco.png'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 1.25rem;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 0 1.5rem;
  transition: all var(--transition-base);
}

.navbar__shell {
  width: 100%;
  max-width: var(--container-width);
  min-height: 68px;
  margin: 0 auto;
  padding: 0.7rem 0.9rem 0.7rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-full);
  background: rgba(3, 8, 17, 0.38);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.24);
}

.navbar--scrolled .navbar__shell,
.navbar--open .navbar__shell {
  background: rgba(3, 8, 17, 0.88);
  border-color: rgba(99, 216, 255, 0.18);
}

.navbar__logo {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar__logo img {
  width: 124px;
  height: auto;
}

.navbar__nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1.65rem;
}

.navbar__nav a {
  position: relative;
  font-size: 0.92rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.78);
  transition: color var(--transition-base);
}

.navbar__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.45rem;
  width: 0;
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-primary-light);
  transition: width var(--transition-base);
}

.navbar__nav a:hover,
.navbar__nav a.router-link-active {
  color: var(--color-white);
}

.navbar__nav a:hover::after,
.navbar__nav a.router-link-active::after {
  width: 100%;
}

.navbar__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 1.15rem;
  border-radius: var(--radius-full);
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--color-white);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  box-shadow: 0 14px 32px var(--color-glow);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.navbar__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 44px var(--color-glow-strong);
}

.navbar__toggle {
  display: none;
  width: 44px;
  height: 44px;
  margin-left: auto;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
}

.navbar__toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 5px auto;
  border-radius: var(--radius-full);
  background: var(--color-white);
  transition: transform var(--transition-base);
}

.navbar--open .navbar__toggle span:first-child {
  transform: translateY(3.5px) rotate(45deg);
}

.navbar--open .navbar__toggle span:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

.navbar__mobile {
  width: min(100%, var(--container-width));
  margin: 0.75rem auto 0;
  padding: 1rem;
  display: grid;
  gap: 0.25rem;
  border: 1px solid rgba(99, 216, 255, 0.18);
  border-radius: var(--radius-lg);
  background: rgba(3, 8, 17, 0.94);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow-dark);
}

.navbar__mobile a {
  padding: 0.9rem 1rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.82);
}

.navbar__mobile a.router-link-active,
.navbar__mobile a:hover {
  color: var(--color-white);
  background: rgba(0, 153, 255, 0.12);
}

@media (max-width: 920px) {
  .navbar__nav,
  .navbar__cta {
    display: none;
  }

  .navbar__toggle {
    display: block;
  }
}

@media (max-width: 640px) {
  .navbar {
    top: 0.8rem;
    padding: 0 1rem;
  }

  .navbar__shell {
    min-height: 62px;
    padding: 0.6rem 0.75rem 0.6rem 1rem;
  }

  .navbar__logo img {
    width: 108px;
  }
}
</style>