<template lang="pug">
.container
  h1.red top of the world!
    //- v-container
    //-   v-layout
    //-     v-toolbar-side-icon(@click.stop='drawer = !drawer')
    //- v-navigation-drawer(v-model='drawer', absolute='', temporary='')
    //-   v-list.pa-1
    //-     v-list-tile(avatar='')
    //-       v-list-tile-avatar
    //-         img.logo(src="@/static/logo.png" alt ="TOP")
    //-       v-list-tile-content
    //-         v-list-tile-title John Leider
    //-   v-list.pt-0(dense='')
    //-     v-divider
    //-     v-subheader menu
    //-     v-list-tile(v-for='item in menu', :key='item.title', :to="item.to", @click='')
    //-       v-list-tile-action
    //-         v-icon {{ item.icon }}
    //-       v-list-tile-content
    //-         v-list-tile-title {{ item.title }}
    //-     v-list(subheader)
    //-       v-subheader hogehoge
    //-     v-list-tile(v-for='item in footermenu', :key='item.title', :to="item.to", @click='')
    //-       v-list-tile-action
    //-         v-icon {{ item.icon }}
    //-       v-list-tile-content
    //-         v-list-tile-title {{ item.title }}
</template>

<script>
export default {
  data () {

  }
}
</script>
<style scoped lang="stylus">
.container
    background-color gray
    display flex
    align-items center
    justify-content center
.red
    color #fff
</style>
