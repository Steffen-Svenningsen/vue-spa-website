<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/">Shop</router-link>
      <router-link to="/">About</router-link>
      <router-link to="/">Contacts</router-link>
    </nav>
    <button class="hamburger">
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
</style>
