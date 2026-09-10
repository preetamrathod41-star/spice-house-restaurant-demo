import { MessageCircle, Phone, Navigation } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

/**
 * Floating WhatsApp button (desktop + mobile)
 * Mobile bottom action bar with Call / WhatsApp / Directions
 */
export function FloatingActions() {
  const whatsappUrl = `https://wa.me/${RESTAURANT_CONFIG.whatsapp}?text=${encodeURIComponent(RESTAURANT_CONFIG.whatsappMessage)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          id="floating-whatsapp-btn"
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={26} fill="white" stroke="none" />
        </a>
      </div>

      {/* Mobile Bottom CTA Bar */}
      <div
        className="mobile-bottom-bar"
        role="navigation"
        aria-label="Quick action bar"
      >
        <a
          href={`tel:${RESTAURANT_CONFIG.phone}`}
          className="bottom-bar-btn call"
          id="mobile-bottom-call-btn"
          aria-label={`Call us at ${RESTAURANT_CONFIG.phone}`}
        >
          <Phone size={20} />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-bar-btn whatsapp"
          id="mobile-bottom-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>

        <a
          href={RESTAURANT_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-bar-btn directions"
          id="mobile-bottom-directions-btn"
          aria-label="Get directions on Google Maps"
        >
          <Navigation size={20} />
          <span>Directions</span>
        </a>
      </div>
    </>
  );
}
