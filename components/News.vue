<template lang="pug">
v-layout.my-3(
  justify-center
  wrap
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
                      v-on='off'
                      v-t="'news.topics1.title'"
                      class="text-sm-left"
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
                      class="text-sm-left"
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
    data: () => ({
      items: [
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', title: 'Birthday gift', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
      ]
    })
  }
</script>
<style lang="sass" scoped>

</style>

