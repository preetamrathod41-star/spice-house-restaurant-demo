import { ArrowRight } from 'lucide-react';
import { MENU_ITEMS, POPULAR_DISH_IDS } from '../config/restaurant';
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

export function PopularDishes() {
  const dishes = POPULAR_DISH_IDS
    .map((id) => MENU_ITEMS.find((item) => item.id === id))
    .filter(Boolean) as typeof MENU_ITEMS;

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="popular"
      className="section-padding"
      aria-labelledby="popular-heading"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="container-max">
        {/* Header */}
        <InView>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-subtitle">Fan Favourites</p>
            <h2 className="section-title" id="popular-heading">
              Popular Dishes
            </h2>
            <div className="gold-line" style={{ margin: '1.25rem auto' }} />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Handpicked by our guests — the dishes that keep them coming back for more.
            </p>
          </div>
        </InView>

        {/* Dishes Grid */}
        <div className="dishes-grid">
          {dishes.map((dish, i) => (
            <InView key={dish.id} delay={i * 80}>
              <article className="dish-card" aria-label={`${dish.name} – ₹${dish.price}`}>
                {/* Image */}
                <div className="dish-image-wrap">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    decoding="async"
                  />
                  {dish.isBestseller && (
                    <span className="dish-badge bestseller" aria-label="Bestseller">Bestseller</span>
                  )}
                  {dish.isNew && (
                    <span className="dish-badge new" aria-label="New dish">New</span>
                  )}
                </div>

                {/* Body */}
                <div className="dish-body">
                  <div className="dish-header">
                    <h3 className="dish-name">{dish.name}</h3>
                    <VegIndicator isVeg={dish.isVeg} />
                  </div>
                  <p className="dish-desc">{dish.description}</p>
                  <div className="dish-footer">
                    <span className="dish-price">₹{dish.price}</span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}>
                      {dish.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>
                </div>
              </article>
            </InView>
          ))}
        </div>

        {/* CTA */}
        <InView>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              className="btn-primary"
              onClick={scrollToMenu}
              id="popular-view-menu-btn"
              aria-label="View full menu"
            >
              View Full Menu
              <ArrowRight size={17} />
            </button>
          </div>
        </InView>
      </div>
    </section>
  );
}
