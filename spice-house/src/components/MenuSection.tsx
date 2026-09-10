import { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, type MenuItem } from '../config/restaurant';
import { InView } from './InView';

function VegIndicator({ isVeg }: { isVeg: boolean }) {
  return (
    <div
      className={isVeg ? 'veg-indicator' : 'nonveg-indicator'}
      aria-label={isVeg ? 'Vegetarian' : 'Non-vegetarian'}
      title={isVeg ? 'Vegetarian' : 'Non-vegetarian'}
    />
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-item-card" aria-label={`${item.name} – ₹${item.price}`}>
      <img
        src={item.image}
        alt={item.name}
        className="menu-item-img"
        loading="lazy"
        decoding="async"
      />
      <div className="menu-item-info">
        <div className="menu-item-top">
          <VegIndicator isVeg={item.isVeg} />
          <span className="menu-item-name">{item.name}</span>
          {item.isBestseller && <span className="tag-bestseller">⭐ Best</span>}
          {item.isNew && <span className="tag-new">New</span>}
        </div>
        <p className="menu-item-desc">{item.description}</p>
        <span className="menu-item-price">₹{item.price}</span>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>(MENU_CATEGORIES[0]);

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="section-padding bg-surface"
      aria-labelledby="menu-heading"
    >
      <div className="container-max">
        {/* Header */}
        <InView>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-subtitle">Explore Our</p>
            <h2 className="section-title" id="menu-heading">Our Menu</h2>
            <div className="gold-line" style={{ margin: '1.25rem auto' }} />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Every dish is crafted fresh-to-order using seasonal produce and time-honoured spice blends.
            </p>
          </div>
        </InView>

        {/* Category Tabs */}
        <InView delay={100}>
          <div
            className="menu-tabs"
            role="tablist"
            aria-label="Menu categories"
          >
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                className={`menu-tab ${activeCategory === cat ? 'active' : ''}`}
                aria-selected={activeCategory === cat}
                aria-controls={`menu-panel-${cat}`}
                id={`menu-tab-${cat}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </InView>

        {/* Menu Items */}
        <div
          id={`menu-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeCategory}`}
        >
          <div className="menu-items-grid">
            {filteredItems.map((item, i) => (
              <InView key={item.id} delay={i * 50}>
                <MenuCard item={item} />
              </InView>
            ))}
          </div>
        </div>

        {/* Note */}
        <InView>
          <p style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
          }}>
            * All prices inclusive of taxes. Menu items subject to seasonal availability. Please inform our staff of any allergies.
          </p>
        </InView>
      </div>
    </section>
  );
}
