<script setup lang="ts">
import Hero from "@/components/HeroComponent.vue";
</script>

<template>
  <div class="home">
    <Hero />
  </div>
</template>

<style lang="sass" scoped>
@import ../assets/global

.home
  padding: 1rem 2.5rem

  .hero-title
    font-family: "Moglan", sans-serif
    width: 100%
</style>
