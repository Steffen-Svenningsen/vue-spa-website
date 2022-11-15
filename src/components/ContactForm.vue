<template>
  <form class="flex">
    <label for="fname">First name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name" />
    <label for="lname">Last name</label>
    <input
      type="text"
      id="lname"
      name="lastname"
      placeholder="Your last name"
    />
    <label for="subject">Subject</label>
    <textarea
      placeholder="Write us a message"
      type="text"
      id="subject"
      name="subject"
    ></textarea>
    <input class="submit" type="submit" value="Send message" />
  </form>
</template>

<style lang="sass" scoped>
@import ../assets/global.sass

form
    width: 100%
    padding: 1rem
    border-radius: 10px
    box-sizing: border-box

    label
        font-family: "Moglan", sans-serif
        transform: translate(10px, 24px)
        font-weight: 700
    
    input
        border: none
        padding: 1rem
        outline: none
        font-family: "Montserrat", sans-serif

    textarea
        resize: none
        border: none
        padding: 1rem
        font-family: "Montserrat", sans-serif
        outline: none
    
    .submit
        cursor: pointer
        background: $black
        color: $background
</style>
