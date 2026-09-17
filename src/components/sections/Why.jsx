import { features } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'

export default function Why() {
  return <section className="section why">
    <div className="container">
      <h2 className="centered">Why Giftshore</h2>
      <div className="feature-grid">
        {features.map(([icon, title, description]) => <div className="feature" key={title}>
          <div className="feature-icon"><Icon name={icon} /></div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>)}
      </div>
    </div>
  </section>
}
