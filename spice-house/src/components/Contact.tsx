import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { InView } from './InView';

export function Contact() {
  const whatsappUrl = `https://wa.me/${RESTAURANT_CONFIG.whatsapp}?text=${encodeURIComponent(RESTAURANT_CONFIG.whatsappMessage)}`;

  return (
    <section
      id="contact"
      className="section-padding bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        {/* Header */}
        <InView>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-subtitle">Find Us</p>
            <h2 className="section-title" id="contact-heading">
              Contact & Location
            </h2>
            <div className="gold-line" style={{ margin: '1.25rem auto' }} />
          </div>
        </InView>

        <div className="contact-grid">
          {/* Left column: Contact info + Hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Contact Card */}
            <InView delay={100}>
              <div className="contact-card">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                  Get in Touch
                </h3>

                <div className="contact-info-item">
                  <div className="contact-icon" aria-hidden="true">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>{RESTAURANT_CONFIG.address.line1},</p>
                    <p>{RESTAURANT_CONFIG.address.line2},</p>
                    <p>{RESTAURANT_CONFIG.address.city} – {RESTAURANT_CONFIG.address.pin}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon" aria-hidden="true">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href={`tel:${RESTAURANT_CONFIG.phone}`} aria-label={`Call ${RESTAURANT_CONFIG.phone}`}>
                      {RESTAURANT_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon" aria-hidden="true">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp"
                      style={{ color: '#4ade80' }}
                    >
                      +{RESTAURANT_CONFIG.whatsapp.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3')}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon" aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${RESTAURANT_CONFIG.email}`} aria-label={`Email us at ${RESTAURANT_CONFIG.email}`}>
                      {RESTAURANT_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <a
                    href={`tel:${RESTAURANT_CONFIG.phone}`}
                    className="btn-primary"
                    id="contact-call-btn"
                    style={{ flex: 1, justifyContent: 'center', minWidth: '120px' }}
                    aria-label="Call the restaurant"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a
                    href={RESTAURANT_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    id="get-directions-btn"
                    style={{ flex: 1, justifyContent: 'center', minWidth: '120px' }}
                    aria-label="Get directions on Google Maps"
                  >
                    <Navigation size={16} />
                    Directions
                  </a>
                </div>
              </div>
            </InView>

            {/* Opening Hours */}
            <InView delay={200}>
              <div className="contact-card">
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  marginBottom: '0.75rem',
                  color: 'var(--color-text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <Clock size={18} style={{ color: 'var(--color-primary)' }} />
                  Opening Hours
                </h3>

                {RESTAURANT_CONFIG.hours.map((h) => (
                  <div key={h.day} className="hours-row">
                    <span className="hours-day">{h.day}</span>
                    <span className="hours-time">{h.open} – {h.close}</span>
                  </div>
                ))}

                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(200, 134, 10, 0.08)',
                  border: '1px solid rgba(200, 134, 10, 0.2)',
                  borderRadius: '0.5rem',
                  fontSize: '0.8125rem',
                  color: 'var(--color-primary-light)',
                  textAlign: 'center',
                }}>
                  🍽️ Last orders 30 minutes before closing
                </div>
              </div>
            </InView>
          </div>

          {/* Right column: Map */}
          <InView delay={150}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="map-embed">
                <iframe
                  src={RESTAURANT_CONFIG.googleMapsEmbedUrl}
                  title={`Map location of ${RESTAURANT_CONFIG.name}`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Book via WhatsApp */}
              <div className="contact-card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                  Book a Table via WhatsApp
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Reserve your table in seconds — just send us a WhatsApp message and we'll confirm your booking right away.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  id="contact-whatsapp-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                  aria-label="Book a table via WhatsApp"
                >
                  <MessageCircle size={18} />
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
