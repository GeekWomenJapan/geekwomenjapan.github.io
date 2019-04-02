<template lang="pug">
.footer
  v-footer(
    height="auto"
    )
    v-layout(
      justify-center
      row
      wrap 
    )
      v-btn(
        large
        v-for="(item,i) in items"
        :key="i"
        :to= "item.to"
        color="grey"
        flat
        round
      ) {{ item.title }}
      v-flex(
        py-3
        text-xs-center
        grey--text
        xs12    
      ) &copy; Geek Women Japan. All rights reserved.
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: '運用規約',
          to: '/agreement'
        },
        {
          title: '行動規約',
          to: '/conducts'
        },
      ]
    }
  }
}
</script>

