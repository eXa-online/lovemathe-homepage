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

  return {
    provide: {
      requireMarkdown: (path: string) => {
        return markdowns[`/assets/markdown/${path}`]
      },
      requireImg: (path: string) => {
        return images[`/assets/img/${path}`]
      },
    }
  }
})
