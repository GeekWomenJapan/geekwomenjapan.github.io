<template lang="pug">
v-app
  AppHeader
  nuxt
  AppFooter  
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="sass" scoped>
.container
    background-color gray
    display flex
    align-items center
    justify-content center
</style>
