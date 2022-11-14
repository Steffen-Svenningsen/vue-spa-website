<template>
  <footer>
    <div>
      <h1>Contact</h1>
      <div class="flex">
        <a href="#">Find us</a>
        <a href="#">Call us</a>
        <a href="#">Mail us</a>
      </div>
    </div>
    <div>
      <h1>Blog</h1>
      <div class="flex">
        <a href="#">Latest trends in Art</a>
        <a href="#">MoMA's newest collection</a>
        <a href="#">Upcoming artists</a>
      </div>
    </div>
    <div>
      <h1>Support Artworld</h1>
      <div class="flex">
        <a href="#">Donations</a>
        <a href="#">Become a Artworld Supporter</a>
        <a href="#">Partnership</a>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@import ../assets/global.sass

footer
    background: transparent
    padding: 1.5rem 2.5rem
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    gap: 6rem

    div
        width: fit-content

        h1
            font-family: "Moglan", sans-serif
            font-size: 42px
            text-decoration: underline
            margin-bottom: 60px

        a
            text-decoration: none
            font-family: "Montserrat", sans-serif
            color: $black
            position: relative

            &::before
                content: ''
                position: absolute
                background: $primary
                width: 24px
                height: 6px
                transform: translateY(10px)
                opacity: 0.40
                transition: 0.2s

            &:hover::before
                width: 80px
                opacity: 0.75
                
</style>
