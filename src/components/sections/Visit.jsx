import { STORE_ADDRESS, STORE_HOURS, STORE_PHONE } from '../../data/site.js'
import { mapsLink } from '../../lib/links.js'
import Icon from '../ui/Icon.jsx'
import { getContent } from '../../data/content.js'

function Info({ icon, title, children }) {
  return <div className="info">
    <div className="info-icon"><Icon name={icon} /></div>
    <div><h4>{title}</h4><div>{children}</div></div>
  </div>
}

export default function Visit() {
  const { visit, settings } = getContent()
  return <section id="visit" className="section tinted">
    <div className="container split visit-grid">
      <div className="image-frame visit-image"><img src={visit.image} alt="Inside the Giftshore shop — the bangle wall" loading="lazy" /></div>
      <div className="visit-content">
        <p className="eyebrow">Visit Us</p>
        <h2>{visit.heading}</h2>
        <div className="contact-list">
          <Info icon="pin" title="Address">{STORE_ADDRESS}</Info>
          <Info icon="clock" title="Opening Hours">{STORE_HOURS}</Info>
          <Info icon="phone" title="Phone"><a href="https://www.thesocialdev.co.in" target="_blank" rel="noreferrer">{STORE_PHONE}</a></Info>
        </div>
        <div className="button-row">
          <a className="dark-button" href={mapsLink()} target="_blank" rel="noreferrer"><Icon name="navigation" /> Get Directions</a>
          <a className="outline-button" href="https://www.thesocialdev.co.in" target="_blank" rel="noreferrer"><Icon name="phone" /> Call Giftshore</a>
        </div>
      </div>
    </div>
  </section>
}
