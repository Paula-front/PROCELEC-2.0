<template>
  <section class="mission-vision section">
    <div class="container">

      <div class="mission-vision__intro">
        <p class="mission-vision__eyebrow">
          ¿Por qué elegir PROCELEC?
        </p>

        <h2>
          Experiencia, compromiso y soluciones eléctricas confiables.
        </h2>

        <div class="mission-vision__features">

          <div
            v-for="item in features"
            :key="item"
            class="mission-vision__feature"
          >
            ✔ {{ item }}
          </div>

        </div>
      </div>

      <div class="mission-vision__grid">

        <article class="mission-card">

          <span>MISIÓN</span>

          <p>
            Desarrollar soluciones eléctricas y obras civiles de alta calidad,
            entregando un servicio confiable, seguro y eficiente, que contribuya
            al éxito de cada proyecto y a la satisfacción de nuestros clientes.
          </p>

        </article>

        <article class="mission-card">

          <span>VISIÓN</span>

          <p>
            Consolidarnos como una empresa referente en proyectos eléctricos y
            obras civiles, destacando por la excelencia técnica, la innovación,
            el compromiso con la seguridad y el cumplimiento de la normativa vigente.
          </p>

        </article>

      </div>

    </div>
  </section>
</template>

<script setup>

const features = [
  'Más de 10 años de experiencia',
  'Especialistas en Baja y Media Tensión',
  'Cumplimiento de normativa SEC y RIC',
  'Soluciones integrales para cada proyecto',
  'Atención personalizada y compromiso técnico'
]

</script>

<style scoped>

.mission-vision{
    background:var(--color-light-soft);
}

.mission-vision__intro{

    margin-bottom:4rem;

}

.mission-vision__eyebrow{

    margin-bottom:1rem;

    color:var(--color-primary);

    font-size:.85rem;

    font-weight:800;

    letter-spacing:.16em;

    text-transform:uppercase;

}

.mission-vision h2{

    max-width:720px;

    margin-bottom:2rem;

    font-size:clamp(2rem,4vw,3.2rem);

    line-height:1.05;

}

.mission-vision__features{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

    gap:1rem;

}

.mission-vision__feature{

    padding:1rem 1.25rem;

    border-radius:var(--radius-md);

    background:white;

    box-shadow:var(--shadow-soft);

    transition:.3s;

}

.mission-vision__feature:hover{

    transform:translateY(-4px);

}

.mission-vision__grid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:2rem;

}

.mission-card{

    padding:2rem;

    border-radius:var(--radius-xl);

    background:white;

    box-shadow:var(--shadow-soft);

}

.mission-card span{

    display:inline-flex;

    margin-bottom:1rem;

    padding:.5rem .9rem;

    border-radius:999px;

    background:rgba(0,153,255,.12);

    color:var(--color-primary);

    font-weight:800;

    letter-spacing:.08em;

}

.mission-card p{

    color:var(--color-gray);

    text-align:justify;

    line-height:1.8;

}

@media(max-width:900px){

.mission-vision__grid{

grid-template-columns:1fr;

}

}

@media(max-width:640px){

.mission-card p{

text-align:left;

}

}

</style>