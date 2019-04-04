<template>
  <v-app>
    <AppHeader></AppHeader>
    <Nuxt></Nuxt>
    <DrawerNavigation></DrawerNavigation>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import DrawerNavigation from '@/components/DrawerNavigation.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    DrawerNavigation
  }
}
</script>
<style lang="sass" scoped>
</style>
