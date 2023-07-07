import vitePluginRequire from "vite-plugin-require";
import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    "@/assets/css/main.scss",
    "@/assets/css/sizes.scss",
  ],
  modules: [
    '@nuxt/image',
    'nuxt-delay-hydration',
  ],
  delayHydration: { 
    mode: 'manual',
    // enables nuxt-delay-hydration in dev mode for testing  
    debug: process.env.NODE_ENV === 'development'
  },
  plugins: [
    {src: '~/plugins/vue-number-animation', mode: 'client'}
  ],
  nitro: {
    prerender: {
      ignore: ["/false"]
    },
  },
  app: {
    components: {
      "dirs": [
        "~/components",
        { path: '~/components/atoms', extensions: ['vue'] },
      ]
    },
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
    assetsInclude: ['**/*.md','**/*.svg','**/*.png','**/*.jpg','**/*.webp','**/*.webm','**/*.mp4'],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            '@use "@/assets/css/_mediaQueries.scss" as *;',
            '@use "@/assets/css/_z-indexes.scss" as *;',
            '@use "@/assets/css/_colors.scss" as *;',
          ].join("")
        }
      }
    },
    resolve: {
      alias: {
        // "@" -> "/User/project-root/src/views"
        '@': path.join(__dirname, 'src'),
      },
    },
  },

  // for now just workarounds
  hooks: {
    // workaround for `Hydration completed but contains mismatches.`
    // caused by netlify issue
    // https://github.com/nuxt/nuxt.js/issues/14445
    'vite:extendConfig'(config, { isServer }) {
      if (isServer) {
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
    // workaround for forced preload of all videos
    // caused by the build process having the default of `prefetch: true`
    // without option to change it
    // reduces page size from 120M to 2M
    'build:manifest': (manifest) => {
      const keysToRemove = []

      for (const key in manifest) {
        const file = manifest[key]

        if (file.assets) {
          file.assets = file.assets
            .filter(
              (asset: string) =>
                !asset.endsWith('.webp') &&
                !asset.endsWith('.jpg') &&
                !asset.endsWith('.png') &&
                !asset.endsWith('.mp4') &&
                !asset.endsWith('.svg') &&
                !asset.endsWith('.webm')
            )
        }
      }
    }
  },

//   modules: [
//     ['vue-scrollto/nuxt', { duration: 300,
//       easing: 'ease-in-out',
//       force: true, }],
//   ],
})
