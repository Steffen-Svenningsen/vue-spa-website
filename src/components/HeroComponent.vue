<template>
  <div class="hero">
    <div>
      <h1>Artworld</h1>
    </div>
    <div class="hero-img"></div>
  </div>
</template>

<style lang="sass" scoped>
@import ../assets/global
.hero
    width: 100%

    div
        width: 100%

        h1
            font-size: clamp(84px, 10vw, 112px)
            font-family: "Moglan", sans-serif
            border-bottom: 1px solid $black
            margin-bottom: 1.25rem

    .hero-img
        width: 100%
        height: 400px
        background-size: cover
        background-image: url("../assets/Hero.webp")
</style>
