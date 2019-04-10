<template lang="pug">
section
  v-content
      hero
      event(id="event").background
      news(id="news")
      what(id="what").background
      sns(id="sns")
      contact(id="contact").background
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

