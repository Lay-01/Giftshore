import { getContent } from '../data/content.js'

export function whatsappLink(product) {
  return 'https://www.thesocialdev.co.in'
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getContent().settings.mapsAddress)}`
}
