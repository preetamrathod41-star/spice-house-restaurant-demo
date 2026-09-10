import { Phone, ChevronDown, Star, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background */}
      <div className="hero-bg" role="img" aria-label="Elegant restaurant interior with warm lighting" />
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <UtensilsCrossed size={13} />
          <span>Award-Winning Indian Cuisine · Est. 2008</span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          The <span className="highlight">Spice</span><br />House
        </h1>

        {/* Tagline */}
        <p className="hero-tagline animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          "{RESTAURANT_CONFIG.tagline}"
        </p>

        {/* Description */}
        <p className="hero-desc animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {RESTAURANT_CONFIG.description}
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            className="btn-primary"
            onClick={scrollToMenu}
            id="hero-view-menu-btn"
            aria-label="View our menu"
          >
            <UtensilsCrossed size={17} />
            View Menu
          </button>
          <a
            href={`tel:${RESTAURANT_CONFIG.phone}`}
            className="btn-outline"
            id="hero-call-btn"
            aria-label={`Call us at ${RESTAURANT_CONFIG.phone}`}
          >
            <Phone size={17} />
            Call Now
          </a>
        </div>

        {/* Rating */}
        <div className="hero-rating animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="stars" aria-label={`Rated ${RESTAURANT_CONFIG.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" style={{ display: 'inline' }} />
            ))}
          </div>
          <div className="text">
            <strong>{RESTAURANT_CONFIG.rating}</strong> · Loved by <strong>{RESTAURANT_CONFIG.reviewCount}</strong> Guests
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="scroll-indicator"
        onClick={scrollDown}
        aria-label="Scroll down to learn more"
      >
        <span>Scroll</span>
        <ChevronDown size={18} style={{ color: 'var(--color-text-muted)' }} />
      </button>
    </section>
  );
}
