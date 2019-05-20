export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
