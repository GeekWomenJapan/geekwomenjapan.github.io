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
          v-t="'agreement.title'"
        )
        h3.my-2(
          class="headline"
          v-t="'agreement.clause_1.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.clause_1.description_1'")
          p(v-t="'agreement.clause_1.description_2'")
          i18n.text(
            path="agreement.clause_1.description_3",
            tag="p")
            a(
              place="clause_1_here",
              href="https://hotchpotchj37.wordpress.com/2015/12/25/geek-women-japan-%E8%A8%AD%E7%AB%8B%E3%81%AE%E3%81%8A%E3%81%AF%E3%81%AA%E3%81%97%E3%80%82/"
              gray--link
            ) {{$t('agreement.clause_1.clause_1_here')}}
        h3.my-2(
          class="headline"
          v-t="'agreement.clause_2.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.clause_2.description_1'")
          p(v-t="'agreement.clause_2.description_2'")
          p(v-t="'agreement.clause_2.description_3'")
        h3.my-2(
          class="headline"
          v-t="'agreement.clause_3.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.clause_3.description_1'")
          p(v-t="'agreement.clause_3.description_2'")
        h3.my-2(
          class="headline"
          v-t="'agreement.clause_4.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.clause_4.description_1'")
          p(v-t="'agreement.clause_4.description_2'")
          p(v-t="'agreement.clause_4.description_3'")
          p(v-t="'agreement.clause_4.description_4'")
          p(v-t="'agreement.clause_4.description_5'")
          p(v-t="'agreement.clause_4.description_6'")
        h3.my-2(
          class="headline"
          v-t="'agreement.clause_5.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.clause_5.description_1'")
          p(v-t="'agreement.clause_5.member_title_1'")
          p @okoysm
          p(v-t="'agreement.clause_5.member_title_2'")
          p @kanakogohzu / @mahya8585 / @omame1986 / @icachan / @matsumana07384
          p(v-t="'agreement.clause_5.description_2'")
          p(v-t="'agreement.clause_5.description_3'")
        h3.my-2(
          class="headline"
          v-t="'agreement.clause_6.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.clause_6.description_1'")
          p(v-t="'agreement.clause_6.description_2'")
          p(v-t="'agreement.clause_6.description_3'")
        h3.my-2(
          class="headline"
          v-t="'agreement.clause_7.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.clause_7.description_1'")
          p(v-t="'agreement.clause_7.description_2'")
          p(v-t="'agreement.clause_7.description_3'")
          p(v-t="'agreement.clause_7.description_4'")
        h3.my-2(
          class="headline"
          v-t="'agreement.clause_8.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.clause_8.description_1'")
          p(v-t="'agreement.clause_8.description_2'")
        h3.my-2(
          class="headline"
          v-t="'agreement.finally.title'"
          )
        blockquote(class="blockquote subheading")
          p(v-t="'agreement.finally.description_1'")
          p(v-t="'agreement.finally.description_2'")
        .text-xs-center
          p(v-t="'agreement.finally.update'")
          p(v-t="'agreement.finally.core_cast'")

</template>
<script>
export default {
    
}
</script>

<style lang="sass" scoped>

</style>

