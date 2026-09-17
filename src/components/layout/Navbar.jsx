import { useEffect, useState } from 'react'
import { whatsappLink } from '../../lib/links.js'
import { scrollToSection } from '../../lib/navigation.js'

const navItems = [
  { label: 'Home', id: '#home' },
  { label: 'Our Story', id: '#story' },
  { label: 'Catalog', id: '#catalog' },
  { label: 'Contact', id: '#contact' },
]

const activeId = '#catalog'

/* Magnifying glass for enquire button */
function SearchGlyph() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7.5" />
      <line x1="20.5" y1="20.5" x2="16.65" y2="16.65" />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navigate = (id) => {
    setIsOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <header className="navbar">
        <nav className="navbar__inner" aria-label="Primary navigation">

          {/* BRAND — Far Left (serif, letter-spaced) */}
          <a
            href="#home"
            className="navbar__brand"
            onClick={(e) => { e.preventDefault(); navigate('#home') }}
            aria-label="GIFTSHORE — Home"
          >
            GIFTSHORE
          </a>

          {/* NAV LINKS — Center */}
          <ul className="navbar__links" role="menubar">
            {navItems.map((item) => {
              const isActive = item.id === activeId
              return (
                <li key={item.id} role="none">
                  <button
                    role="menuitem"
                    className={`navbar__link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => navigate(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* ENQUIRE BUTTON — Far Right */}
          <a
            className="navbar__enquire"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="Enquire now"
          >
            <span className="navbar__enquire-icon" aria-hidden="true">
              <SearchGlyph />
            </span>
            <span className="navbar__enquire-label">ENQUIRE</span>
          </a>

          {/* MOBILE — Hamburger */}
          <button
            className={`navbar__hamburger ${isOpen ? 'is-open' : ''}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`navbar-drawer ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false)
        }}
      >
        <div className="navbar-drawer__inner">
          <button
            className="navbar-drawer__close"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <a
            href="#home"
            className="navbar-drawer__brand"
            onClick={(e) => { e.preventDefault(); navigate('#home') }}
          >
            GIFTSHORE
          </a>

          <ul className="navbar-drawer__links">
            {navItems.map((item) => {
              const isActive = item.id === activeId
              return (
                <li key={item.id}>
                  <button
                    className={`navbar-drawer__link ${isActive ? 'is-active' : ''}`}
                    onClick={() => navigate(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>

          <a
            className="navbar-drawer__enquire"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <SearchGlyph />
            <span>ENQUIRE</span>
          </a>
        </div>
      </div>
    </>
  )
}

