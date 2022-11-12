<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="sass" scoped>
@import ../assets/global

button
    color: $background
    border: none
    cursor: pointer
    padding: 1rem
    transition: 0.2s
    background: $black
    font-family: "Montserrat", sans-serif

    &:hover
        transform: scale(0.95)
</style>
