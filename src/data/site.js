import { getContent } from './content.js'

const settings = () => getContent().settings

export const WHATSAPP_NUMBER = settings().whatsappNumber
export const STORE_ADDRESS = settings().address
export const STORE_HOURS = settings().hours
export const STORE_PHONE = settings().phone

export const navLinks = [
  ['Home', '#home'],
  ['Our Story', '#story'],
  ['Catalog', '#catalog'],
  ['Contact', '#contact'],
]

export const features = [
  ['sparkles', 'Curated Finds', 'A constantly evolving collection of aesthetic gifts and lifestyle pieces — there’s always something new.'],
  ['heart', 'Student-Friendly', 'Trendy gifts and accessories without the intimidating price tag — designed for young shoppers.'],
  ['clock', 'Last-Minute Friendly', 'A convenient destination when you need to find something special quickly — no scrolling needed.'],
  ['smile', 'Warm Service', 'A welcoming in-store experience with organized displays and helpful assistance.'],
]
