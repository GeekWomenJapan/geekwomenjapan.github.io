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
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
}
</script>
<style lang="sass" scoped>
</style>
