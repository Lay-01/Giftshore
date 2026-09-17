import { navLinks, STORE_ADDRESS, STORE_HOURS, STORE_PHONE } from '../../data/site.js'
import { mapsLink, whatsappLink } from '../../lib/links.js'
import { scrollToSection } from '../../lib/navigation.js'
import Icon from '../ui/Icon.jsx'

export default function Footer() {
  return <footer>
    <div className="container footer-grid">
      <div>
        <button className="wordmark" onClick={() => scrollToSection('#home')}>GIFTSHORE</button>
        <p>Gifts, little treasures & everyday finds.</p>
        <div className="socials">
          <a href={whatsappLink()} target="_blank" rel="noreferrer"><Icon name="chat" /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><Icon name="instagram" /></a>
          <a href={mapsLink} target="_blank" rel="noreferrer"><Icon name="navigation" /></a>
        </div>
      </div>
      <div>
        <h4>Navigation</h4>
        {navLinks.map(([label, id]) => <button className="footer-link" key={id} onClick={() => scrollToSection(id)}>{label}</button>)}
      </div>
      <div>
        <h4>Visit Us</h4>
        <div className="footer-info">
          <p><Icon name="pin" /><span>{STORE_ADDRESS}</span></p>
          <p><Icon name="clock" /><span>{STORE_HOURS}</span></p>
          <p><Icon name="phone" /><a href="https://www.thesocialdev.co.in" target="_blank" rel="noreferrer">{STORE_PHONE}</a></p>
        </div>
      </div>
    </div>
    <div className="container copyright">
      <span>© {new Date().getFullYear()} Giftshore. All rights reserved.</span>
      <span>Boutique District · City</span>
    </div>
  </footer>
}
