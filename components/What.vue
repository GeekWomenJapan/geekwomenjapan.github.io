<template lang="pug">
v-layout.my-5(
  column
  wrap
  align-center
)
  v-flex.my-3(
    xs12
    sm4
    )
    .text-xs-center
      h2.headline(v-t="'whatisgeekwomen.title'")
  v-flex(xs12)
    v-container(grid-list-xl)
      v-layout(
        row
        wrap
        align-start
        fill-height
        )
        v-flex(
          xs12
          md4
          )
          v-card.elevation-0.transparent
            v-card-text.text-xs-center
              v-icon.pink--text.text--lighten-2(x-large) fa-user
            v-card-title.layout.justify-center(primary-title)
              .headline.text-xs-center(v-t="'whatisgeekwomen.definition_1.title'")
            v-card-text.text-xs-center(v-t="'whatisgeekwomen.definition_1.description'")
        v-flex(xs12, md4)
          v-card.elevation-0.transparent
            v-card-text.text-xs-center
              v-icon.pink--text.text--lighten-2(x-large) fas fa-code
            v-card-title.layout.justify-center(primary-title)
              .headline(v-t="'whatisgeekwomen.definition_2.title'")
            v-card-text.text-xs-center(v-t="'whatisgeekwomen.definition_2.description'")
        v-flex(
          xs12
          md4
          )
          v-card.elevation-0.transparent
            v-card-text.text-xs-center
              v-icon.pink--text.text--lighten-2(x-large) fas fa-users
            v-card-title.layout.justify-center(primary-title)
              .headline.text-xs-center(v-t="'whatisgeekwomen.definition_3.title'")
            v-card-text.text-xs-center(v-t="'whatisgeekwomen.definition_3.description'")
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>

</style>

