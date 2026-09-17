import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function copyImages() {
  const artifactDir = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/f07e5ffe-8afe-4a78-a509-5381a630fbec'
  const publicImagesDir = path.resolve(process.cwd(), 'public/images')

  try {
    if (!fs.existsSync(publicImagesDir)) {
      fs.mkdirSync(publicImagesDir, { recursive: true })
    }
    if (fs.existsSync(artifactDir)) {
      const imagesToCopy = [
        { src: 'giftshore_storefront_1789681079541.png', dest: 'storefront.png' },
        { src: 'giftshore_storefront_1789681079541.png', dest: 'storefront.webp' },
        { src: 'giftshore_jewelry_1789681096651.png', dest: 'giftshore-jewelry.png' },
        { src: 'giftshore_giftboxes_1789681112784.png', dest: 'giftshore-giftboxes.png' },
        { src: 'giftshore_decor_1789681127065.png', dest: 'giftshore-decor.png' },
      ]

      for (const item of imagesToCopy) {
        const srcPath = path.join(artifactDir, item.src)
        const destPath = path.join(publicImagesDir, item.dest)
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, destPath)
          console.log(`[Vite Middleware] Copied ${item.src} -> ${item.dest}`)
        }
      }
    }
  } catch (err) {
    console.error('[Vite Middleware] Error copying images:', err)
  }
}

const copyImagesPlugin = () => ({
  name: 'copy-images-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      copyImages()
      next()
    })
  }
})

export default defineConfig({
  plugins: [react(), copyImagesPlugin()],
})
