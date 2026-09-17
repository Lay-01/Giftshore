import { products as defaultProducts } from './products.js'

export const CONTENT_KEY = 'giftshore-site-content'

export const defaultContent = {
  home: {
    eyebrow: 'Boutique Gift Shop',
    titleLine1: 'Little things.',
    titleLine2: 'Made to make',
    titleLine3: 'someone smile.',
    description: 'Trendy gifts, dainty jewelry, colorful bangles, heritage jhumkas and everyday treasures — curated for students, young shoppers, and anyone who loves a thoughtful little surprise.',
    location: 'Boutique District · City',
    introEyebrow: 'Welcome to Giftshore',
    introTitle: 'A little store with a lot to discover.',
    introText: 'GIFTSHORE brings together aesthetic gifts, jewelry, stationery, drinkware and small lifestyle finds — curated for students, young shoppers and anyone who loves a thoughtful little something.',
    heroImages: ['/images/shop-necklaces.webp', '/images/shop-display-tray.webp', '/images/shop-keychain-pen.webp'],
  },
  story: {
    tag: 'Visit us · Boutique District',
    eyebrow: 'Our Story',
    title: 'Made for gifting.\nChosen for you.',
    paragraphs: [
      'GIFTSHORE started with a simple idea — to build a cozy, welcoming space where students and local shoppers could find beautiful, affordable gifts without the overwhelm of a big marketplace.',
      "Tucked into the heart of the shopping district, we've grown into a neighborhood favorite for last-minute birthday gifts, aesthetic accessories, imitation jewelry, stationery and small lifestyle finds that bring genuine delight.",
      "Every shelf is curated with care. Every piece is selected to feel special without stretching a budget. And every visit is meant to feel like browsing through a friend's perfectly organized collection.",
    ],
    image: '/images/shop-display-tray.webp',
  },
  visit: { heading: 'Come find your next little thing.', image: '/images/shop-bangles-display.webp' },
  catalog: { eyebrow: 'Our Collection', heading: 'Find something worth gifting.', intro: 'From tiny trinkets to statement pieces, explore our ever-changing collection of things you\'ll want to keep — or gift.', categories: [{ id: 'all', label: 'All' }, { id: 'jewelry', label: 'Jewelry' }, { id: 'bangles', label: 'Bangles' }, { id: 'earrings', label: 'Earrings' }, { id: 'accessories', label: 'Accessories' }, { id: 'home', label: 'Home & Decor' }] },
  contact: {
    heading: 'Let\'s find the right gift.',
    intro: 'Whether you\'re looking for something specific, need help choosing a gift, or want to know what\'s available — just ask. We\'re happy to help you find exactly the right thing.',
    inquiryHeading: 'Send an Inquiry',
    inquiryText: 'Fill in the details and we\'ll get back to you.',
  },
  community: {
    heading: 'Don\'t miss the next find.',
    text: 'Join our community for new arrivals, fresh finds, gift inspiration and store updates.',
    link: 'https://www.thesocialdev.co.in',
  },
  settings: {
    whatsappNumber: '91XXXXXXXXXX',
    address: '123 Giftshore Lane, Suite 100, Boutique District, City, State 12345',
    hours: '7:30 AM – 10:30 PM · Every day',
    phone: '91XXXXXXXXXX',
    mapsAddress: '123 Giftshore Lane, Suite 100, Boutique District, City, State 12345',
  },
  products: defaultProducts,
}

export function getContent() {
  try {
    const saved = localStorage.getItem(CONTENT_KEY)
    if (!saved) return defaultContent
    const parsed = JSON.parse(saved)
    const res = {
      ...defaultContent,
      ...parsed,
      home: { ...defaultContent.home, ...parsed.home },
      story: { ...defaultContent.story, ...parsed.story },
      visit: { ...defaultContent.visit, ...parsed.visit },
      contact: { ...defaultContent.contact, ...parsed.contact },
      community: { ...defaultContent.community, ...parsed.community },
      settings: { ...defaultContent.settings, ...parsed.settings },
      catalog: { ...defaultContent.catalog, ...parsed.catalog },
      products: defaultProducts
    }
    if (res.story && (res.story.image === '/images/storefront.webp' || !res.story.image)) {
      res.story.image = '/images/shop-display-tray.webp'
    }
    if (res.community) {
      res.community.link = 'https://www.thesocialdev.co.in'
    }
    if (res.settings) {
      res.settings.whatsappNumber = '91XXXXXXXXXX'
      res.settings.phone = '91XXXXXXXXXX'
    }
    return res
  } catch {
    return defaultContent
  }
}

export function saveContent(content) {
  localStorage.setItem(CONTENT_KEY, JSON.stringify(content))
  window.dispatchEvent(new Event('giftshore-content-updated'))
}
