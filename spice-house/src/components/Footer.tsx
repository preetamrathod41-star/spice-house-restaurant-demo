import { UtensilsCrossed, MapPin, Phone, Mail } from 'lucide-react';

// Inline SVG social icons (lucide-react doesn't include brand icons)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);
import { RESTAURANT_CONFIG } from '../config/restaurant';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const MENU_LINKS = [
  'Starters',
  'Main Course',
  'Biryani',
  'Breads',
  'Desserts',
  'Beverages',
];

export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${RESTAURANT_CONFIG.whatsapp}?text=${encodeURIComponent(RESTAURANT_CONFIG.whatsappMessage)}`;

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-grid">
        {/* Brand column */}
        <div className="footer-brand">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            aria-label="The Spice House"
          >
            <UtensilsCrossed size={20} style={{ color: 'var(--color-primary)' }} />
            <span>The <span>Spice</span> House</span>
          </a>
          <p>
            Authentic Indian cuisine crafted with the finest ingredients and generations-old recipes. 
            Dine with us and experience flavours that tell a story.
          </p>
          <div className="footer-socials">
            <a
              href={RESTAURANT_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={RESTAURANT_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Follow us on Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href={RESTAURANT_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Follow us on X (Twitter)"
            >
              <TwitterIcon />
            </a>
            <a
              href={RESTAURANT_CONFIG.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Subscribe on YouTube"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Links */}
        <div>
          <h4>Our Menu</h4>
          <ul className="footer-links">
            {MENU_LINKS.map((item) => (
              <li key={item}>
                <a
                  href="#menu"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <MapPin size={15} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
            <span>{RESTAURANT_CONFIG.address.full}</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <a href={`tel:${RESTAURANT_CONFIG.phone}`} aria-label="Call us">
              {RESTAURANT_CONFIG.phone}
            </a>
          </div>
          <div className="footer-contact-item">
            <Mail size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <a href={`mailto:${RESTAURANT_CONFIG.email}`} aria-label="Email us">
              {RESTAURANT_CONFIG.email}
            </a>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              id="footer-whatsapp-btn"
              style={{ fontSize: '0.8125rem', padding: '0.6rem 1.1rem' }}
              aria-label="Chat on WhatsApp"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} {RESTAURANT_CONFIG.name}. All rights reserved.</p>
        <p className="footer-demo">
          Demo website created for presentation purposes.
        </p>
      </div>
    </footer>
  );
}
