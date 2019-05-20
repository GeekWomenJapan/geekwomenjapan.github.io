<template lang="pug">
v-app
  appHeader
  Nuxt
  appFooter
</template>

<script>
import appHeader from '@/components/AppHeader.vue'
import appFooter from '@/components/AppFooter.vue'

export default {
  components: {
    appHeader,
    appFooter
  },
    data() {
      return {
      }
    }
}
</script>
<style lang="sass" scoped>
</style>
