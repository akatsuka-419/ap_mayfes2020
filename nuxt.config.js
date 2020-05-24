import colors from 'vuetify/es5/util/colors'

const baseURL = '' // todo
const description = '工学博覧会2020オンラインの公式ウェブサイトです。'


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + '工学博覧会2020',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },

      // OGP
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '工学博覧会2020',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseURL,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${baseURL}/ogp.jpg`,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '工学博覧会2020',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ja_JP',
      },

      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@apmayfes',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@apmayfes',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon-180x180.png'},
      { rel: 'icon', type: 'image/png', href: '/icon-192x192.png'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
