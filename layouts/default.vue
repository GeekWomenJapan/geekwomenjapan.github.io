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
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'agreement',
          to: '/agreement'
        },
        {
          icon: 'bubble_chart',
          title: 'conducts',
          to: '/conducts'
        },
        {
          icon: 'bubble_chart',
          title: 'conference2016',
          to: '/conference/2016'
        },
        {
          icon: 'bubble_chart',
          title: 'conference2017',
          to: '/conference/2017'
        }
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
.container
    background-color gray
    display flex
    align-items center
    justify-content center
</style>
