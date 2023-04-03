export default defineNuxtPlugin(() => {
  const markdowns = import.meta.glob('~/assets/markdown/**/*.md', {
    import: 'default',
    eager: true,
    as: "raw",
  })

  const images = import.meta.glob('~/assets/img/**/*', {
    import: 'default',
    eager: true,
    as: "url",
  })

  const videos = import.meta.glob('~/assets/videos/**/*', {
    import: 'default',
    eager: true,
    as: "url",
  })

  return {
    provide: {
      requireMarkdown: (path: string) => {
        return markdowns[`/assets/markdown/${path}`]
      },
      requireImg: (path: string) => {
        return images[`/assets/img/${path}`]
      },
      requireVideo: (path: string) => {
        return { 
          desktop: videos[`/assets/videos/${path}/big.mp4`],
          mobile: videos[`/assets/videos/${path}/small.mp4`],
        }
      },
    }
  }
})
