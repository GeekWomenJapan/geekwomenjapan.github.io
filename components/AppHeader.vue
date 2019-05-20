<template lang="html">
<div class="header-navigation">
 <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img
              src="@/static/logo.png"
              class="logo"
              alt ="TOP">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'header.title'"
            >
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile
            avatar
            :href="$i18n.path('#')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'header.top'">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            avatar
            :href="$i18n.path('#event')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'header.event'">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            avatar
            :href="$i18n.path('#news')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'header.news'">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            avatar
            :href="$i18n.path('#what')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'header.what'">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            avatar
            :href="$i18n.path('#sns')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'header.sns'">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            avatar
            :href="$i18n.path('#contact')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'header.contact'">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      <v-divider></v-divider>
        <v-list-tile
            avatar
            :to="$i18n.path('agreement')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'footer.agreement'">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            avatar
            :to="$i18n.path('conducts')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'footer.conducts'">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      <v-divider></v-divider>
        <v-subheader
          v-t="'conference.title'">
        </v-subheader>
        <v-list-tile
            avatar
            :to="$i18n.path('conference/2016')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'conference.2016'"
              > 
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            avatar
            :to="$i18n.path('conference/2017')">
          <v-list-tile-content>
            <v-list-tile-title
              class="grey--text"
              v-t="'conference.2017'"              
              > 
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  <header>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-toolbar-side-icon
    class="hidden-md-and-up"
    @click.stop="drawer = !drawer" />
    <v-btn flat fab icon>
      <a :href="$i18n.path('#')">
        <img
          src="@/static/logo.png"
          class="logo"
          alt ="TOP">
      </a>
    </v-btn>
    <v-toolbar-title
      class="grey--text"
      v-t="'header.title'"
     ></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        color="grey"
        flat
        :href="$i18n.path('')"
        v-t="'header.top'">
      </v-btn>
      <v-btn
        color="grey"
        flat
        :href="$i18n.path('#event')"
        v-t="'header.event'">
      </v-btn>
      <v-btn
        color="grey"
        flat
        :href="$i18n.path('#news')"
        v-t="'header.news'">
      </v-btn>
      <v-btn
        color="grey"
        flat
        :href="$i18n.path('#what')"
        v-t="'header.what'">
      </v-btn>
      <v-btn
        color="grey"
        flat
        :href="$i18n.path('#sns')"
        v-t="'header.sns'">
      </v-btn>
      <v-btn
        color="grey"
        flat
        :href="$i18n.path('#contact')"
        v-t="'header.contact'">
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
    <v-btn icon>
      <a v-if="$i18n.locale === 'ja'" :href="`/en` + $route.fullPath" active-class="none" exact>
        {{ $t('header.en') }}
      </a>
      <a v-else :href="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
        {{ $t('header.ja') }}
      </a>
    </v-btn>
    <v-btn icon>
        <a
          class="twitter-share-button"
          href="https://twitter.com/share"
          data-url="http://geekwomenjapan.github.io/"
          data-text="女性エンジニアが集まるカンファレンスイベント運営団体「Geek Women Japan」"
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
  </header>
</div>
</template>

<script>
export default {
  scrollToTop: true,
  components: {
  },
    data () {
      return {
        clipped: false,
        drawer: null,
        right: null
      }
    }
}
</script>
<style lang="sass">
.logo
  width: 30px
  height: 30px
</style>
