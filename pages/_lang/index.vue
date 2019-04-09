<template lang="pug">
v-content
  v-layout(
      column
      justify-center
      align-center
      wrap
  )
    hero
    event(id="event").green.lighten-5
    news(id="news")
    what(id="what").green.lighten-5
    sns(id="sns")
    contact(id="contact").green.lighten-5
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
  }
}
</script>
<style lang="sass" scoped>
</style>

