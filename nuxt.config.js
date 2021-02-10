export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: '2 Heures de perdues, podcast cinéma',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Chaque semaine, l’équipe de 2 heures de perdues revient avec humour et mauvaise foi sur un film pour le décrypter scène par scène. ( site non officiel )' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#39b982' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    download: true,
    base64: true,
    families: {
      Lato: [700, 900],
      Rubik: [800]
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
    'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  sitemap: {
    hostname: 'https://www.2hdp-dev.com',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  serverMiddleware: ["redirect-ssl"]
}
