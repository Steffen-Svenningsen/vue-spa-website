<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <div class="contact">
    <div class="contact-form">
      <h1>Send us a message here</h1>
      <ContactForm />
    </div>
    <div>
      <img
        src="@/assets/Service.svg"
        width="500"
        height="500"
        alt="Customer service"
      />
    </div>
  </div>
</template>

<style lang="sass">
@import ../assets/global.sass

.contact
  padding: 4rem
  display: flex
  flex-wrap: wrap
  justify-content: space-between

  div

    img
      width: 100%

  .contact-form
    max-width: 600px
    min-width: 500px

    h1
      font-size: 2rem
      font-family: "Moglan", sans-serif
      padding-left: 1rem

@media (max-width:650px)
  .contact-form
    min-width: 100% !important
</style>
