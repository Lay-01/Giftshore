import { getContent } from '../../data/content.js'

export default function Intro() {
  const { home } = getContent()
  return <section className="intro section">
    <div className="narrow centered reveal">
      <p className="eyebrow">{home.introEyebrow}</p>
      <h2>{home.introTitle}</h2>
      <p>{home.introText}</p>
    </div>
  </section>
}
