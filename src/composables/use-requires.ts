export const useMarkdownImport = () => {
  const markdowns = import.meta.glob('~/assets/markdown/**/*.md', {
    import: 'default',
    eager: true,
    as: 'raw'
  })

  return (path: string) => markdowns[`/assets/markdown/${path}`]
}

export const useImageImport = () => {
  const images = import.meta.glob('~/assets/img/**/*', {
    import: 'default',
    eager: true,
    as: 'url'
  })

  return (path: string) => images[`/assets/img/${path}`]
}

export const useVideoImport = () => {
  const videos = import.meta.glob('~/assets/videos/**/*', {
    import: 'default',
    eager: true,
    as: 'url'
  })

  return (path: string) => ({
    desktop: videos[`/assets/videos/${path}/big.mp4`],
    mobile: videos[`/assets/videos/${path}/small.mp4`]
  })
}
