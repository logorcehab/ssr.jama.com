const isTestingAnalytics = false

const buildSettings = {
    transpile: ['vue-lottie']
}
export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Sparc' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
    ]
  },
  /*
  ** Global CSS
  * These won't have share the style with other files but will still be global
  */
  css: [    
  ],
  styleResources: {
    scss: [
    ]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
    ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
  ],
  loading: {
    color: '#4267B2',
    height: '2px'
  },
  axios: {
    proxy: process.env.NODE_ENV !== 'production'
  },
  proxy: {
    '/apis/': {
      target: process.env.BACK_END_URL || 'http://localhost:5000'
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: buildSettings,
  router: {
    middleware: ['device-detector']
  }
}
