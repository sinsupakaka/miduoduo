const defaultFolder = '跨境创业孵化营'

const modules = import.meta.glob(
  [
    '../../assets/**/*.{png,jpg,jpeg,webp,svg,gif}',
    '!../../assets/**/preview.png',
  ],
  {
    eager: true,
    import: 'default',
  },
)

const assets = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [
    path.replace('../../assets/', ''),
    url,
  ]),
)

export const asset = (name, folder = defaultFolder) => {
  const key = `${folder}/${name}`

  if (!assets[key]) {
    console.warn(`[assets] Missing asset: ${key}`)
  }

  return assets[key] || ''
}
