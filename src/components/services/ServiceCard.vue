<template>
  <GlowCard>
    <article class="service-card">

      <div class="service-card__icon">
        <component :is="icon" :size="32" :stroke-width="2.2" />
      </div>

      <h3>{{ title }}</h3>

      <p>
        {{ description }}
      </p>

      <span class="service-card__link">
        Más información →
      </span>

    </article>
  </GlowCard>
</template>

<script setup>
import GlowCard from '../common/GlowCard.vue'

defineProps({
  icon: {
    type: Object,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

.service-card{

    height:100%;

    padding:2rem;

    display:flex;

    flex-direction:column;

}

.service-card__icon{

    width:72px;

    height:72px;

    margin-bottom:1.75rem;

    display:flex;

    justify-content:center;

    align-items:center;

    border-radius:20px;

    color:var(--color-primary);

    background:rgba(0,153,255,.08);

    transition:all var(--transition-base);

}

.service-card h3{

    margin-bottom:1rem;

    font-size:1.35rem;

    line-height:1.25;

    color:var(--color-text);

}

.service-card p{

    flex:1;

    color:var(--color-gray);

    line-height:1.75;

    text-align:left;

}

.service-card__link{

    margin-top:2rem;

    display:inline-flex;

    align-items:center;

    gap:.5rem;

    font-size:.9rem;

    font-weight:700;

    color:var(--color-primary);

    transition:gap var(--transition-base);

}

.service-card:hover .service-card__icon{

    transform:translateY(-3px);

    background:rgba(0,153,255,.12);

    box-shadow:0 0 25px rgba(0,153,255,.18);

}

.service-card:hover .service-card__link{

    gap:.9rem;

}

</style>