<template lang="pug">
.container
  h1.red top {{ name }}!
</template>

<script>
export default {
  data () {
    return {
      name: '名前'
    }
  }
}
</script>
<style scoped lang="stylus">
.container
    background-color red
    height 100vh
    display flex
    align-items center
    justify-content center
.red
    color #fff
</style>
