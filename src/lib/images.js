export function getImageUrl(url) {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url
  }
  const cleanPath = url.startsWith('/') ? url.slice(1) : url
  const base = import.meta.env.BASE_URL || './'
  const normalizedBase = base.endsWith('/') ? base : base + '/'
  return normalizedBase + cleanPath
}
