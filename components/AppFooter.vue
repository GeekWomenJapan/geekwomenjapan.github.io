<template lang="pug">
.footer
  footer
    v-footer(
      height="auto"
      )
      v-layout(
        justify-center
        row
        wrap
       )
        v-btn(
          large
          color="grey"
          flat
          :to="$i18n.path('agreement')"
          round
          v-t="'footer.agreement'"
        )
        v-btn(
          large
          color="grey"
          flat
          :to="$i18n.path('conducts')"
          round
          v-t="'footer.conducts'"
        )
        v-flex(
          py-3
          text-xs-center
          grey--text
          xs12
        )
        v-flex(
          py-3
          text-xs-center
          grey--text
          xs12
        ) &copy; {{ $t("footer.copyright") }}
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style lang="sass" scoped>

</style>

