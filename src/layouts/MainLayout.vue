<template>
  <div class="main-layout">
    <Navbar />

    <main class="main-layout__content">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
}

.main-layout__content {
  flex: 1;
  padding-top: var(--navbar-height);
}
</style>