export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/app.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['konsta'],
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },

  buildModules:[],
  serverMiddleware:[]
});

