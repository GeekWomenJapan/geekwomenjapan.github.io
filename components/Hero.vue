<template lang="pug">
section
  img(
    src="@/static/ogimage.png"
    alt ="geek women japan logo"
    )
  h1(
    white--text
    mb-2
    display-1
    text-xs-center
    v-t="'hero.title'"
    )
  div(subheading mb-3 text-xs-center v-t="'hero.introduction_1'")
  div(subheading mb-3 text-xs-center v-t="'hero.introduction_2'")
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>

</style>

