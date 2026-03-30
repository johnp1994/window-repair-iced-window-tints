// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Enable SSR for SEO + Core Web Vitals
  ssr: true,

  // Modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  // Google Fonts — self-hosted for performance (no render-blocking CDN)
  googleFonts: {
    families: {
      'Montserrat': [400, 500, 600, 700, 800, 900],
      'Open Sans': [400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
    download: true,
    base64: false,
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png'],
  },

  // Global CSS
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/main.css',
  ],

  // App head defaults
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | The Glassperts',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
    },
  },

  // Runtime config (BigQuery credentials will go here later)
  runtimeConfig: {
    // Server-only keys
    bigqueryProjectId: '',
    bigqueryDataset: '',
    // Public keys (exposed to client)
    public: {
      siteUrl: 'https://glassexpertsfl.org',
    },
  },

  compatibilityDate: '2025-01-01',
})
