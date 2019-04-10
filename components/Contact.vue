<template lang="pug">
section
  v-layout(
    column
    wrap
    align-center
  )
    v-flex.my-3(
      xs12
      sm4
      )
      .text-xs-center
        h2.headline(v-t="'contact.title'")
        v-btn(
          fab
          dark
          color='cyan'
          href="https://twitter.com/geekwomenjapan"
          )
          v-icon fab fa-twitter
        v-btn(
          fab
          dark
          color='indigo'
          href="https://www.facebook.com/geekWomenJapan/"
          )
          v-icon fab fa-facebook-f
        v-btn(
          fab
          dark
          color='pink'
          href="mailto:geekwomen.japan@gmail.com"
        )
          v-icon fas fa-envelope
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>

</style>

