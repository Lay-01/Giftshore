import { useState } from 'react'
import { getContent } from '../../data/content.js'
import { whatsappLink } from '../../lib/links.js'
import { getImageUrl } from '../../lib/images.js'
import Icon from '../ui/Icon.jsx'

function ProductCard({ product }) {
  return <article className="product-card">
    <div className="product-image">
      <img src={getImageUrl(product.image)} alt={product.name} loading="lazy" />
      <span>{product.label}</span>
      <a href={whatsappLink(product)} target="_blank" rel="noreferrer" className="product-inquire"><Icon name="chat" /> Inquire</a>
    </div>
    <div className="product-details">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <a className="mobile-inquire" href={whatsappLink(product)} target="_blank" rel="noreferrer"><Icon name="chat" /> Inquire Now</a>
    </div>
  </article>
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { products, catalog } = getContent()
  const categories = catalog.categories
  const filteredProducts = activeCategory === 'all' ? products : products.filter((product) => product.category === activeCategory)

  return <section id="catalog" className="section">
    <div className="container">
      <div className="catalog-heading centered">
        <p className="eyebrow">{catalog.eyebrow}</p>
        <h2>{catalog.heading}</h2>
        <p>{catalog.intro}</p>
      </div>
      <div className="category-row">
        {categories.map((category) => <button className={activeCategory === category.id ? 'active' : ''} key={category.id} onClick={() => setActiveCategory(category.id)}>{category.label}</button>)}
      </div>
      <div className="product-grid">{filteredProducts.map((product) => <ProductCard product={product} key={product.id} />)}</div>
    </div>
  </section>
}
