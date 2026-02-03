// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/prismic'],

  prismic: {
    endpoint: 'balkrishna',
    clientConfig: {
      routes: [
        { type: 'home', path: '/' },
        { type: 'our-nursery', path: '/our-nursery/:uid' },
        { type: 'parents', path: '/parents/:uid' },
        { type: 'blog', path: '/post/:uid' },
      ],
      accessToken: process.env.NUXT_PUBLIC_PRISMIC_ACCESS_TOKEN || '',
    },
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Bal Krishna Nursery by Woolwich Temple',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Bal Krishna Nursery by Woolwich Temple. The new nursery is now open.',
        },
        {
          name: 'keywords',
          content:
            'nursery woolwich, nursery near me, nursery, local, woolwich, mandir, yuvak mandal, woolwich temple',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/feather.png' },
        { rel: 'manifest', href: '/js/manifest.json' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Quicksand:wght@500;600;700&display=swap',
        },
      ],
    },
  },

  tailwindcss: {},

  runtimeConfig: {
    public: {
      prismicAccessToken: process.env.NUXT_PUBLIC_PRISMIC_ACCESS_TOKEN || '',
    },
  },
})
