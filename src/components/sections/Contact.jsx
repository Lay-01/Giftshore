import { useState } from 'react'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { getContent } from '../../data/content.js'

export default function Contact() {
  const { contact, settings } = getContent()
  const fields = [['name', 'Your Name', 'Your name', 'text'], ['phone', 'WhatsApp / Phone', settings.phone, 'tel'], ['looking', 'What are you looking for?', 'Birthday gift, return gift, jewelry, stationery…', 'text']]
  const [form, setForm] = useState({ name: '', phone: '', looking: '', message: '' })
  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submitForm = (event) => {
    event.preventDefault()
    window.open('https://www.thesocialdev.co.in', '_blank')
  }
  return <section id="contact" className="section"><div className="container contact-grid"><div><p className="eyebrow">Contact</p><h2>{contact.heading}</h2><p className="contact-intro">{contact.intro}</p></div><div className="inquiry"><h3>{contact.inquiryHeading}</h3><p>{contact.inquiryText}</p><form onSubmit={submitForm}>{fields.map(([name, label, placeholder, type]) => <label key={name}>{label}<input name={name} type={type} value={form[name]} onChange={updateField} placeholder={placeholder} /></label>)}<label>Message<textarea name="message" value={form.message} onChange={updateField} placeholder="Tell us more about what you need…" rows="4" /></label><Button dark className="form-submit" type="submit"><Icon name="chat" /> Send Inquiry</Button></form></div></div></section>
}
