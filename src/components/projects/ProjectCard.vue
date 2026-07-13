<template>
  <article class="project-card">
    <div class="project-card__image-wrapper">
      <img
        :src="image"
        :alt="title"
        class="project-card__image"
        loading="lazy"
      />

      <div class="project-card__overlay"></div>

      <div class="project-card__category">
        {{ category }}
      </div>
    </div>

    <div class="project-card__content">
      <div>
        <h3>{{ title }}</h3>

        <p class="project-card__location">
          {{ location }}
        </p>
      </div>

      <p class="project-card__description">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.project-card {
  overflow: hidden;
  border: 1px solid rgba(0, 153, 255, 0.12);
  border-radius: var(--radius-xl);
  background: var(--color-white);
  box-shadow: var(--shadow-soft);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 153, 255, 0.28);
  box-shadow:
    0 26px 60px rgba(3, 8, 17, 0.16),
    0 0 42px rgba(0, 153, 255, 0.1);
}

.project-card__image-wrapper {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-dark-soft);
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 700ms ease,
    filter 700ms ease;
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(
      to top,
      rgba(3, 8, 17, 0.72),
      rgba(3, 8, 17, 0.08) 58%
    );
}

.project-card__category {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid rgba(99, 216, 255, 0.24);
  border-radius: var(--radius-full);
  font-size: 0.74rem;
  font-weight: 800;
  color: var(--color-white);
  background: rgba(3, 8, 17, 0.66);
  backdrop-filter: blur(12px);
}

.project-card__content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.project-card h3 {
  margin-bottom: 0.4rem;
  font-size: 1.3rem;
  line-height: 1.2;
  color: var(--color-text);
}

.project-card__location {
  font-size: 0.82rem;
  color: var(--color-primary);
}

.project-card__description {
  color: var(--color-gray);
  line-height: 1.65;
  text-align: left;
}

.project-card:hover .project-card__image {
  transform: scale(1.045);
  filter: saturate(1.06) contrast(1.02);
}

@media (max-width: 640px) {
  .project-card__content {
    min-height: auto;
  }
}
</style>