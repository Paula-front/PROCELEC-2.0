<template>
  <article class="glow-card">
    <div class="glow-card__light"></div>

    <div class="glow-card__content">
      <slot />
    </div>
  </article>
</template>

<script setup>
</script>

<style scoped>
.glow-card {
  position: relative;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(0, 153, 255, 0.12);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.98),
      rgba(247, 251, 255, 0.94)
    );
  box-shadow: var(--shadow-soft);
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base);
}

.glow-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(
      135deg,
      rgba(99, 216, 255, 0.13),
      transparent 34%
    );
  opacity: 0;
  transition: opacity var(--transition-base);
}

.glow-card__light {
  position: absolute;
  top: -5rem;
  right: -5rem;
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  pointer-events: none;
  background: rgba(0, 153, 255, 0.16);
  filter: blur(42px);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.glow-card__content {
  position: relative;
  z-index: 1;
  height: 100%;
}

.glow-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 153, 255, 0.32);
  box-shadow:
    0 26px 60px rgba(3, 8, 17, 0.15),
    0 0 42px rgba(0, 153, 255, 0.1);
}

.glow-card:hover::before,
.glow-card:hover .glow-card__light {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .glow-card,
  .glow-card::before,
  .glow-card__light {
    transition: none;
  }

  .glow-card:hover {
    transform: none;
  }
}
</style>