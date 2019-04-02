<template lang="pug">
.header
  v-toolbar
    v-container
      v-layout
        v-toolbar-side-icon(@click.stop='drawer = !drawer')
    v-navigation-drawer(v-model='drawer', absolute='', temporary='')
      v-list.pa-1
        v-list-tile(avatar='')
          v-list-tile-avatar
            img.logo(src="@/static/logo.png" alt ="TOP")
          v-list-tile-content
            v-list-tile-title John Leider
      v-list.pt-0(dense='')
        v-divider
        v-subheader menu
        v-list-tile(v-for='item in menu', :key='item.title', :to="item.to", @click='')
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
        v-list(subheader)
          v-subheader hogehoge
        v-list-tile(v-for='item in footermenu', :key='item.title', :to="item.to", @click='')
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
    v-btn(icon)
    img.logo(src="@/static/logo.png" alt ="TOP")
    v-toolbar-title(color="grey") Geek Women Japan
    v-spacer
    v-toolbar-items(class="hidden-sm-and-down")
      v-btn(
        v-for="(item,i) in items"
        :key="i"
        :to= "item.to"
        color="grey"
        flat
    ) {{ item.title }}
    v-spacer
    v-toolbar-items
      v-btn(icon)
        v-icon fas fa-twitter-square
      v-btn(icon)
        v-icon folder_open
</template>
<script>

export default {
  data () {
    return {
      drawer: null,
      menu: [
        {
          title: 'TOP',
          icon: '',
          to: '/'
        },
        {
          title: 'EVENT',
          icon: '',
          to: '#event'
        },
        {
          title: 'What is GEEK WOMEN?',
          icon: '',
          to: '#what'
        },
        {
          title: 'SNS',
          icon: '',
          to: '#sns'
        },
        {
          title: 'CONTACT',
          icon: '',
          to: '#contact'
        }
        ],
      footermenu:[
        {
          title: '運用規約',
          to: '/agreement'
        },
        {
          title: '行動規約',
          to: '/conducts'
        }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.header
  left: 0
  top: 0
  position: fixed
  width: 100%
  z-index: 24
.logo
  width: 30px
  height: 30px
</style>

