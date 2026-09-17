import { useEffect, useState } from 'react'
import { whatsappLink } from '../../lib/links.js'
import Icon from '../ui/Icon.jsx'

export default function FloatingChat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!visible) return null

  return <a className="floating-chat" href={whatsappLink()} target="_blank" rel="noreferrer"><Icon name="chat" /><span>Chat with us</span></a>
}
