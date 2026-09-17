import { scrollToSection } from '../../lib/navigation.js'
import Icon from '../ui/Icon.jsx'
import { getContent } from '../../data/content.js'

export default function Story() {
  const { story } = getContent()
  return <section id="story" className="section tinted">
    <div className="container split story-grid">
      <div className="story-image image-frame image-frame--storefront">
        <img src={story.image} alt="Curated boutique collection display" />
        <span className="story-image-tag">{story.tag}</span>
      </div>
      <div className="story-content">
        <p className="eyebrow">{story.eyebrow}</p>
        <h2>{story.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h2>
        <div className="body-copy">
          {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <button className="text-link" onClick={() => scrollToSection('#catalog')}>Discover Our Collection <Icon name="arrow" /></button>
      </div>
    </div>
  </section>
}
