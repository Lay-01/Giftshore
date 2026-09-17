import Icon from '../ui/Icon.jsx'
import { getContent } from '../../data/content.js'

export default function Community() {
  const { community } = getContent()
  return <section className="section tinted community">
    <div className="narrow centered">
      <div className="community-icon"><Icon name="chat" /></div>
      <h2>{community.heading}</h2>
      <p>{community.text}</p>
      <a className="text-link" href={community.link} target="_blank" rel="noreferrer"><Icon name="chat" /> Connect With Us <Icon name="arrow" /></a>
    </div>
  </section>
}
