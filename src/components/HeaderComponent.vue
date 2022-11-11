<template>
  <header>
    <div class="container">
      <router-link class="logo" to="/">Logo</router-link>
      <nav>
        <router-link to="/services">What we offer</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div class="contact-placeholder"></div>
      <button class="contact" to="/">Contact</button>
    </div>
  </header>
</template>

<style lang="sass" scoped>
@import ../assets/global

header
  top: 20px
  width: 100%
  position: fixed

  .container
    width: 80%
    margin: auto
    border: 1px solid rgba(255, 255, 255, 0.20)
    display: flex
    padding: 1rem 2rem
    position: relative
    background: $primary
    align-items: center
    border-radius: 50px
    justify-content: space-between

    .logo
        color: $white
        font-size: 1.75rem
        font-family: "Vollkorn", serif
        text-decoration: none

    nav
        gap: 2.5rem
        display: flex
        font-weight: 400
        font-family: "Poppins", sans-serif

        a
            color: white
            text-decoration: none

    .contact-placeholder
        width: 7ch
    .contact
        right: 0
        width: 100px
        color: $black
        border: none
        height: 71px
        cursor: pointer
        display: grid
        position: absolute
        background: $secondary
        font-weight: 500
        place-items: center
        font-family: "Poppins", sans-serif
        border-radius: 50px
        text-decoration: none
</style>
