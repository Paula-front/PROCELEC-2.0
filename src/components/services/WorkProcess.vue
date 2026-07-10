<template>
  <section class="work-process section">
    <div class="container">

      <div class="work-process__header">
        <p class="work-process__eyebrow">Nuestro proceso</p>

        <h2>Así desarrollamos cada proyecto.</h2>

        <p>
          Cada proyecto sigue una metodología orientada a garantizar calidad,
          cumplimiento técnico y una ejecución eficiente desde el inicio hasta la
          entrega final.
        </p>
      </div>

      <div class="work-process__timeline">

        <article
          v-for="step in steps"
          :key="step.number"
          class="work-process__card"
        >
          <div class="work-process__number">
            {{ step.number }}
          </div>

          <h3>{{ step.title }}</h3>

          <p>{{ step.description }}</p>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>

const steps = [

{
number:'01',
title:'Levantamiento',
description:'Analizamos los requerimientos técnicos, condiciones del terreno y normativa aplicable.'
},

{
number:'02',
title:'Ingeniería',
description:'Diseñamos la solución más adecuada considerando seguridad, eficiencia y factibilidad.'
},

{
number:'03',
title:'Ejecución',
description:'Desarrollamos las obras eléctricas con altos estándares de calidad y supervisión.'
},

{
number:'04',
title:'Entrega',
description:'Realizamos pruebas, documentación técnica y entrega formal del proyecto.'
}

]

</script>

<style scoped>

.work-process{

background:var(--color-white);

}

.work-process__header{

max-width:760px;

margin-bottom:4rem;

}

.work-process__eyebrow{

margin-bottom:1rem;

font-size:.85rem;

font-weight:800;

letter-spacing:.16em;

text-transform:uppercase;

color:var(--color-primary);

}

.work-process h2{

margin-bottom:1.3rem;

font-size:clamp(2rem,4vw,3.2rem);

line-height:1.05;

}

.work-process__header p{

color:var(--color-gray);

text-align:justify;

}

.work-process__timeline{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:1.5rem;

}

.work-process__card{

position:relative;

padding:2rem;

border-radius:var(--radius-lg);

background:var(--color-light-soft);

box-shadow:var(--shadow-soft);

transition:all var(--transition-base);

}

.work-process__card:hover{

transform:translateY(-6px);

box-shadow:0 24px 50px rgba(3,8,17,.12);

}

.work-process__number{

width:60px;

height:60px;

margin-bottom:1.5rem;

display:flex;

justify-content:center;

align-items:center;

border-radius:50%;

background:var(--color-primary);

color:white;

font-size:1.2rem;

font-weight:700;

}

.work-process h3{

margin-bottom:1rem;

color:var(--color-text);

}

.work-process__card p{

color:var(--color-gray);

line-height:1.7;

text-align:left;

}

@media(max-width:1100px){

.work-process__timeline{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:700px){

.work-process__timeline{

grid-template-columns:1fr;

}

.work-process__header p{

text-align:left;

}

}

</style>