<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <button name="menu" class="hamburger">
      <div class="line"></div>
      <div class="line"></div>
    </button>
  </header>
</template>

<style lang="sass" scoped>
@import ../assets/global

header
    background: transparent
    padding: 1.5rem 2.5rem
    display: flex
    justify-content: space-between

    nav
        display: flex
        gap: 1.5rem

        a
            text-decoration: none
            color: $black
            font-family: "Montserrat", sans-serif
            font-size: 14px

    .hamburger
      background: none
      border: none
      position: relative
      cursor: pointer
      width: 34px
      padding-bottom: 1rem

      .line
        background: $black
        height: 2px
        position: absolute

        &:nth-of-type(1)
          width: 28px

        &:nth-of-type(2)
          width: 20px
          transform: translateY(8px)
          right: 0
</style>
