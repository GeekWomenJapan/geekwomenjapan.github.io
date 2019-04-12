<template lang="pug">
section
  v-content
    v-layout(
      justify-center
      wrap
      pa-3
    )
      v-flex(
        xs12
        md6
      )
        h2.my-5(
          class="mb-4 display-1 text-xs-center font-weight-bold"
          v-t="'code_of_conducts.title'"
        )
        blockquote(class="blockquote subheading")
          p(v-t="'code_of_conducts.topics_1.description_1'")
          p(v-t="'code_of_conducts.topics_1.description_2'")
        blockquote(class="blockquote subheading")
          p(v-t="'code_of_conducts.topics_2.description_1'")
          p(v-t="'code_of_conducts.topics_2.description_2'")
          p(v-t="'code_of_conducts.topics_2.description_3'")
          blockquote(class="blockquote subheading")
            ul
              li(v-t="'code_of_conducts.topics_2.list.1'")
              li(v-t="'code_of_conducts.topics_2.list.2'")
              li(v-t="'code_of_conducts.topics_2.list.3'")
              li(v-t="'code_of_conducts.topics_2.list.4'")
              li(v-t="'code_of_conducts.topics_2.list.5'")
              li(v-t="'code_of_conducts.topics_2.list.6'")
          p(v-t="'code_of_conducts.topics_2.description_4'")
          p(v-t="'code_of_conducts.topics_2.description_5'")
        h3.my-2(
          class="headline"
          v-t="'code_of_conducts.topics_3.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'code_of_conducts.topics_3.description_1'")
          p(v-t="'code_of_conducts.topics_3.description_2'")
          p(v-t="'code_of_conducts.topics_3.description_3'")
        h3.my-2(
          class="headline"
          v-t="'code_of_conducts.topics_4.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'code_of_conducts.topics_4.description_1'")
          p(v-t="'code_of_conducts.topics_4.description_2'")
          p(v-t="'code_of_conducts.topics_4.description_3'")
          p(v-t="'code_of_conducts.topics_4.description_4'")
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>
