import { scrollToSection } from '../../lib/navigation.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { getContent } from '../../data/content.js'

export default function Hero() {
  const { home } = getContent()
  return (
    <section id="home" className="hero">
      {/* Background Decorative Gold Ribbon, Heart & Leaves */}
      <div className="hero-decorations" aria-hidden="true">
        <div className="hero-blob hero-blob--right" />
        <div className="hero-blob hero-blob--left" />

        <svg className="hero-decor-svg" viewBox="0 0 1440 220" preserveAspectRatio="none" fill="none">
          {/* Top-left botanical branch */}
          <g stroke="#CDB696" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
            <path d="M 0 90 Q 50 65 110 45 Q 80 35 50 40" />
            <path d="M 40 60 C 30 42 15 37 5 32 M 40 60 C 45 40 55 27 68 20" />
            <path d="M 75 50 C 70 30 65 17 55 7 M 75 50 C 88 34 98 24 112 17" />
            <path d="M 100 44 C 105 27 115 14 130 7" />
          </g>

          {/* Top-right botanical branch */}
          <g stroke="#CDB696" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
            <path d="M 1440 90 Q 1390 65 1330 45 Q 1360 35 1390 40" />
            <path d="M 1400 60 C 1410 42 1425 37 1435 32 M 1400 60 C 1395 40 1385 27 1372 20" />
            <path d="M 1365 50 C 1370 30 1375 17 1385 7 M 1365 50 C 1352 34 1342 24 1328 17" />
            <path d="M 1340 44 C 1335 27 1325 14 1310 7" />
          </g>

          {/* Golden Ribbon Wave */}
          <path d="M 0 50 C 180 110 360 10 540 70 C 640 100 680 80 705 55 Q 720 30 735 55 C 760 80 800 100 900 70 C 1080 10 1260 110 1440 50" stroke="#D3BD9C" strokeWidth="1.3" opacity="0.75" />

          {/* Central Heart Loop */}
          <path d="M 720 52 C 706 34 686 46 702 66 L 720 84 L 738 66 C 754 46 734 34 720 52 Z" stroke="#D3BD9C" strokeWidth="1.3" fill="none" opacity="0.85" />

          {/* Sparkles & Dots */}
          <circle cx="168" cy="38" r="2" fill="#D3BD9C" opacity="0.6" />
          <circle cx="250" cy="108" r="1.5" fill="#D3BD9C" opacity="0.5" />
          <circle cx="280" cy="78" r="2.5" fill="#D3BD9C" opacity="0.7" />
          <circle cx="960" cy="108" r="1.5" fill="#D3BD9C" opacity="0.5" />
          <circle cx="990" cy="78" r="2.5" fill="#D3BD9C" opacity="0.7" />
          <circle cx="1250" cy="62" r="2" fill="#D3BD9C" opacity="0.6" />
        </svg>
      </div>

      <div className="container hero-grid">
        <div className="hero-text reveal">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" /> {home.eyebrow}
          </p>
          <h1 className="hero-title">
            {home.titleLine1}
            <br className="desktop-br" />
            {home.titleLine2}
            <br className="desktop-br" />
            {home.titleLine3}
          </h1>
          <p className="hero-copy">{home.description}</p>
          <div className="button-row">
            <Button dark onClick={() => scrollToSection('#catalog')}>
              Explore Collection <b><Icon name="arrow" /></b>
            </Button>
            <Button onClick={() => scrollToSection('#visit')}>
              Visit Giftshore
            </Button>
          </div>
          <p className="location">
            <Icon name="pin" /> <span>{home.location}</span>
          </p>
        </div>

        <div className="hero-collage reveal">
          <div className="hero-collage__col">
            <figure className="hero-card hero-card--top">
              <img src={home.heroImages[0]} alt="Dainty necklaces display" loading="lazy" />
            </figure>
            <figure className="hero-card hero-card--bottom">
              <img src={home.heroImages[1]} alt="Jewelry display tray" loading="lazy" />
            </figure>
          </div>
          <div className="hero-collage__col hero-collage__col--tall">
            <figure className="hero-card hero-card--tall">
              <img src={home.heroImages[2]} alt="Cute strawberry keychain and pen" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
