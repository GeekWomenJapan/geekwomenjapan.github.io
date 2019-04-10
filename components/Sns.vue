<template lang="pug">
v-container.my-5(
  grid-list-md
  text-xs-center
  )
  v-layout(
    wrap
    fill-height
    )
    v-flex(
      d-flex
      xs12
      sm6
      md6
      )
      v-card
        v-card-text.px-0
          .fb-root
            script(
              async
              defer
              crossorigin="anonymous"
              src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.2"
              )
            .fb-page(
              data-href="https://www.facebook.com/geekWomenJapan/"
              data-tabs="timeline"
              data-width="500"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            )

    v-flex(
      d-flex
      xs12
      sm6
      md6
      )
      v-card
        a.twitter-timeline(
          data-height="545"
          href="https://twitter.com/geekwomenjapan?ref_src=twsrc%5Etfw"
          ) Tweets by geekwomenjapan
        script(
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8")
</template>

<script>
export default {
  
}
</script>
<style lang="sass" scoped>

</style>

