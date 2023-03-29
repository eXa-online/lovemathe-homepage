import vitePluginRequire from "vite-plugin-require";
import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  vite: false, // required for require
  app: {
    buildAssetsDir: "/dist/",
    head: {
      title: "lovemathe",
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'keywords', name: 'keywords', content: 'Lovemathe, Rechenschwäche, Dyskalkulie, Förderung, Mathematik' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Die offizielle Webseite des Lovemathe Förderspiels.', // TODO: better website meta description
        },
      ],
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/icons/favicon-16x16.png',
          sizes: '16x16',
        },
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/icons/favicon-32x32.png',
          sizes: '32x32',
        },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
      ],
    },
  },
  vite: {
    assetsInclude: ['**/*.md','**/*.svg','**/*.png','**/*.jpg'],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_mediaQueries.scss" as *;'
        }
      }
    },
    resolve: {
      alias: {
        // "@" -> "/User/project-root/src/views"
        '@': path.join(__dirname, 'src'),
      },
    },
  }

//   modules: [
//     ['vue-scrollto/nuxt', { duration: 300,
//       easing: 'ease-in-out',
//       force: true, }],
//   ],
})
