<template lang="pug">
v-layout(
  justify-center
  wrap
  pa-3
)
  v-flex(
    xs12
    )
    .text-xs-center
      img(
        src="@/static/ogimage.png"
        alt ="geek women japans"
        )
      h1(
        class="mb-2 display-1 text-xs-center font-weight-bold"
      )
        span(
          v-t="'hero.title_1'"
          )
        span(
          class="sub--text"
          v-t="'hero.title_2'"
          )
  v-flex(
    xs12
    pa-3
    ).text-xs-center
      div(
        class="subheading mb-3"
        )
        span(
          v-t="'hero.introduction_1'"
        )
        br
        span(
          v-t="'hero.introduction_2'"
        )
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>

</style>

