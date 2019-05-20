<template lang="pug">
v-content
  hero
  event.background
  news
  what.background
  sns
  contact.background
</template>

<script>
import hero from '@/components/Hero.vue'
import event from '@/components/Event.vue'
import news from '@/components/News.vue'
import what from '@/components/What.vue'
import sns from '@/components/Sns.vue'
import contact from '@/components/Contact.vue'

export default {
  components: {
    hero,
    event,
    news,
    what,
    sns,
    contact
  },
  head(){
    return {
      title: 'Geek Women Japan'
    }
  }
}
</script>
<style lang="sass" scoped>
</style>

