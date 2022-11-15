<script setup lang="ts">
import Hero from "@/components/HeroComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <div class="home">
    <Hero />
    <section>
      <div v-motion-pop-visible-once class="col">
        <h1>
          Buy artwork <br />
          in our app
        </h1>
        <p>
          For the publication of the first work in the application, the system
          charges a commission, which depends on the current situation in the
          blockchain
        </p>
        <ButtonComponent>
          Download on the <span class="bold">AppStore</span>
        </ButtonComponent>
        <div class="slider">
          <button>←</button>
          <button>→</button>
        </div>
      </div>
      <div v-motion-slide-visible-once-right>
        <img
          class="appstore"
          src="@/assets/Appstore.webp"
          width="400"
          height="750"
          alt="Artworld App"
        />
      </div>
    </section>
    <section>
      <div v-motion-slide-visible-once-left class="paintings">
        <img
          src="@/assets/RedPainting.webp"
          width="320"
          height="480"
          alt="Red Painting"
        />
        <img
          src="@/assets/OrangePainting.webp"
          width="320"
          height="480"
          alt="Orange Painting"
        />
      </div>
      <div v-motion-pop-visible-once class="col">
        <h1>
          NFT Gallery <br />
          of your Dreams
        </h1>
        <p>
          Each painting uses minimal visual language based on early computer
          graphics tp convey impressions related to architecture, landscape,
          light, depth and climate
        </p>
        <ButtonComponent> Learn more &nbsp; → </ButtonComponent>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@import ../assets/global

.home
  padding: 1rem 2.5rem

  section
    margin-top: 14%
    margin-bottom: 20%
    display: flex
    flex-wrap: wrap
    justify-content: space-between

    .col

      h1
        font-family: "Moglan", sans-serif
        font-size: 54px
        margin-bottom: 50px
        color: $black

      p
        font-family: "Montserrat", sans-serif
        font-size: 18px
        margin-bottom: 70px
        color: $black

      .slider
        display: flex
        margin-top: 70px
        gap: 0.7rem

        button
          width: 30px
          height: 30px
          border-radius: 100px
          border: none
          cursor: pointer
          transition: 0.2s

          &:hover
            transform: scale(1.05)

          &:nth-child(1)
            background: #f5f5f5
            border: 1px solid $black

          &:nth-child(2)
            background: $black
            border: 1px solid $black
            color: $background

  section

    .appstore
      transform: translateY(-100px)


    .paintings
      width: clamp(200px, 4vw, 700px)

      img

        &:nth-child(2)
          position: absolute
          transform: translate(220px, -120%)

@media (max-width:650px)

  .appstore
    display: none

  .paintings
    margin-bottom: 2rem

    img

      &:nth-child(2)
        display: none
</style>
