export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '2 Heures de perdues, podcast cinéma',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#39b982' },

  ssr: true,

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
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa'
  ],
  
  pwa: {
    meta: {
      theme_color: '#150C21',
      lang: 'fr',
      description: 'Chaque semaine, l’équipe de 2 heures de perdues revient avec humour et mauvaise foi sur un film pour le décrypter scène par scène. ( site non officiel )',
      ogTitle: '2 Heures de perdues, podcast cinéma',
      ogDescription: 'Chaque semaine, l’équipe de 2 heures de perdues revient avec humour et mauvaise foi sur un film pour le décrypter scène par scène. ( site non officiel )',
      ogSiteName: '2 Heures de perdues, podcast cinéma',
      ogHost: 'https://www.2hdp-dev.com/'
    }
  },

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
}
