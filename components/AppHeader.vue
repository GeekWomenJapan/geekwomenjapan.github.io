<template>
<div class="header">
  <v-toolbar>
  <v-btn icon>
    <img
      class="logo"
      src="@/static/logo.png"
      alt ="TOP">
    </img>
  </v-btn>
  <v-toolbar-title color="grey" >GEEK WOMEN JAPAN</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn
      color="grey"
      flat
      v-t="'header.top'">
    </v-btn>
    <v-btn
      color="grey"
      flat
      v-t="'header.event'">
    </v-btn>
    <v-btn
      color="grey"
      flat
      v-t="'header.news'">
    </v-btn>
    <v-btn
      color="grey"
      flat
      v-t="'header.what'">
    </v-btn>
    <v-btn
      color="grey"
      flat
      v-t="'header.sns'">
    </v-btn>
    <v-btn
      color="grey"
      flat
      v-t="'header.contact'">
    </v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-toolbar-items>
  <v-btn icon>
    <NuxtLink v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath" active-class="none" exact>
      {{ $t('header.en') }}
    </NuxtLink>
    <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
      {{ $t('header.ja') }}
    </NuxtLink>
  </v-btn>
  <v-btn icon>
      <a
        href="https://twitter.com/share"
        class="twitter-share-button"
        data-url="http://geekwomenjapan.github.io/"
        data-text="女性エンジニアの集まるカンファレンスイベント運営団体「Geek Women Japan」"
        data-via="geekwomenjapan"
        data-hashtags="geekwomenjapan">
        <i class="fab fa-twitter"></i>
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </v-btn>
  <v-btn icon>
      <a
          href="http://b.hatena.ne.jp/entry/http://geekwomenjapan.github.io/"
          class="hatena-bookmark-button"
          data-hatena-bookmark-title="Geek Women Japan"
          data-hatena-bookmark-layout="simple"
          title="このエントリーをはてなブックマークに追加">
        <i
          class="fab fa-blogger-b"
          alt="このエントリーをはてなブックマークに追加"
          style="border: none;"></i>
          <script
            type="text/javascript"
            src="https://b.st-hatena.com/js/bookmark_button.js"
            charset="utf-8"
            async="async">
          </script>
      </a>
  </v-btn>
  </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>

export default {
  data () {
    return {
      drawer: null,
      menu: [
        {
          title: 'TOP',
          icon: '',
          to: '/'
        },
        {
          title: 'EVENT',
          icon: '',
          to: '#event'
        },
        {
          title: 'What is GEEK WOMEN?',
          icon: '',
          to: '#what'
        },
        {
          title: 'SNS',
          icon: '',
          to: '#sns'
        },
        {
          title: 'CONTACT',
          icon: '',
          to: '#contact'
        }
        ],
      footermenu:[
        {
          title: '運用規約',
          to: '/agreement'
        },
        {
          title: '行動規約',
          to: '/conducts'
        }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.header
  left: 0
  top: 0
  position: fixed
  width: 100%
  z-index: 24
.logo
  width: 30px
  height: 30px
</style>

