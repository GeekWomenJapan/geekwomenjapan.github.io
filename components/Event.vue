<template lang="pug">
v-layout(
  justify-center
  wrap
  pa-3
)
  a(
    class="anchor"
    id="event"
    )
  v-flex.my-3(
    xs12
    sm6
    md6
    )
    .text-xs-center
      h2.headline(
        v-t="'event.title'")
  v-flex(xs12)
    v-container(grid-list-xl)
      v-layout(
        row
        wrap
        align-cetner
        )
        v-flex.text-xs-center(
          xs12
          )          
          h2(
            class="subheading mb-3"
            v-t="'event.description'"
            )
          v-btn(
            round
            color='primary'
            dark
            large
            class="font-weight-bold"
            v-t="'event.link'"
            href="https://techplay.jp/eventreport/711004"
            )
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>
.anchor
  display: block
  padding-top: 70px
  margin-top: -70px
</style>

