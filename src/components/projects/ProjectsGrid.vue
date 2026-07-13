<template>
  <section class="projects-grid section">
    <div class="container">
      <div class="projects-grid__header">
        <p class="projects-grid__eyebrow">Proyectos ejecutados</p>

        <h2>Experiencia aplicada en distintos tipos de obras.</h2>

        <p>
          Presentamos una selección de proyectos desarrollados por PROCELEC en
          ámbitos residenciales, comerciales, industriales y de infraestructura
          eléctrica.
        </p>
      </div>

      <div class="projects-grid__content">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :category="project.category"
          :location="project.location"
          :image="project.image"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '../../utils/projectsData'
</script>

<style scoped>
.projects-grid {
  background:
    linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-light-soft) 100%
    );
}

.projects-grid__header {
  max-width: 780px;
  margin-bottom: 3.5rem;
}

.projects-grid__eyebrow {
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.projects-grid h2 {
  margin-bottom: 1.2rem;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  color: var(--color-text);
}

.projects-grid__header p {
  color: var(--color-gray);
  text-align: justify;
}

.projects-grid__content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 760px) {
  .projects-grid__header p {
    text-align: left;
  }

  .projects-grid__content {
    grid-template-columns: 1fr;
  }
}
</style>