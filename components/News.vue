<template lang="pug">
v-layout(
  justify-center
  wrap
  pa-3
)
  a(
    class="anchor"
    id="news"
    )
  v-flex.my-3(
    xs12
    sm6
    md6
    )
    .text-xs-center
      h2.headline(v-t="'news.title'")
  v-flex(xs12)
    v-container(grid-list-xl)
      v-list(dense)
          v-list-tile
            v-list-tile-content
              v-list-tile-title(v-t="'news.topics1.days'")
            v-list-tile-content
              v-list-tile-title
                v-tooltip(bottom)
                  template(v-slot:activator='{ on }')
                    span(
                      v-on=''
                      v-t="'news.topics1.title'"
                    ) 
                  span(v-t="'news.tool_tip'")
          v-divider
          v-list-tile(
            href="https://techplay.jp/event/711004"
            grey--link            
          )            
            v-list-tile-content
              v-list-tile-title(v-t="'news.topics2.days'")
            v-list-tile-content
              v-list-tile-title
                v-tooltip(bottom)
                  template(v-slot:activator='{ on }')
                    span(
                      v-on='on'
                      v-t="'news.topics2.title'"
                      ) 
                  span(v-t="'news.tool_tip'")
          v-divider
          v-list-tile(
            href="https://techplay.jp/eventreport/639483"
            grey--link
          )
            v-list-tile-content
              v-list-tile-title(v-t="'news.topics3.days'")
            v-list-tile-content
              v-list-tile-title
                v-tooltip(bottom)
                  template(v-slot:activator='{ on }')
                    span(
                      v-on='on'
                      v-t="'news.topics3.title'"
                      class="text-sm-left"
                      ) 
                  span(v-t="'news.tool_tip'")
          v-divider
          v-list-tile(
            href="https://docs.google.com/spreadsheets/d/11Ap8fiR00ARIzMY5cy0Rrj0roVN-MCylkFn1zt-ahUw/edit#gid=0"
            grey--link
          )
            v-list-tile-content
              v-list-tile-title(v-t="'news.topics4.days'")
            v-list-tile-content
              v-list-tile-title
                v-tooltip(bottom)
                  template(v-slot:activator='{ on }')
                    span(
                      v-on='on'
                      v-t="'news.topics4.title'"
                      class="text-sm-left"
                      ) 
                  span(v-t="'news.tool_tip'")
          v-divider
          v-list-tile(
            href="https://www.oracle.co.jp/events/javaday/2017/#secSpecial"
            grey--link
          )
            v-list-tile-content
              v-list-tile-title(v-t="'news.topics5.days'")
            v-list-tile-content
              v-list-tile-title
                v-tooltip(bottom)
                  template(v-slot:activator='{ on }')
                    span(
                      v-on='on'
                      v-t="'news.topics5.title'"
                      class="text-sm-left"
                      ) 
                  span(v-t="'news.tool_tip'")
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

