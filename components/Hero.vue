<template lang="pug">
  v-layout.my-3(
    column
    align-center
    justify-center
  )
    img(
      src="@/static/ogimage.png"
      alt ="geek women japans"
      )
    h1.my-5(
      class="mb-2 display-1 text-xs-center font-weight-bold"
    )
      span(
        v-t="'hero.title_1'"
        )
      span(
        class="sub--text"
        v-t="'hero.title_2'"
        )
    div(
      class="subheading mb-3 text-xs-center"
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

