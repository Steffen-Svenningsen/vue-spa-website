<template>
  <div class="hero">
    <div>
      <h1>Artworld</h1>
    </div>
    <div class="img-container">
      <img src="@/assets/Hero.png" alt="Painting" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import ../assets/global
.hero
    width: 100%

    div
        width: 100%

        h1
            font-family: "Moglan", sans-serif
            font-size: 114px
            border-bottom: 1px solid $black
            margin-bottom: 1.25rem

    .img-container
        width: 100%

        img
            max-width: 100%
            height: auto
</style>
