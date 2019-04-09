<template lang="pug">
v-container(
  grid-list-md
  text-xs-center
  )
  .text-xs-center
    h2.headline(v-t="'sns.title'")
    v-layout(
      row
      wrap
      )
      v-flex(xs6)
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
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              )
              blockquote.fb-xfbml-parse-ignore(
                cite="https://www.facebook.com/geekWomenJapan/"
              )
                a(
                  href="https://www.facebook.com/geekWomenJapan/"
                  ) Geek Women Japan

      v-flex(xs6)
        v-card()
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

