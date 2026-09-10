import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../config/restaurant';
import { InView } from './InView';

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = (src: string, alt: string) => {
    setLightbox(src);
    setLightboxAlt(alt);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  return (
    <section
      id="gallery"
      className="section-padding bg-surface"
      aria-labelledby="gallery-heading"
    >
      <div className="container-max">
        {/* Header */}
        <InView>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-subtitle">A Visual Feast</p>
            <h2 className="section-title" id="gallery-heading">Our Gallery</h2>
            <div className="gold-line" style={{ margin: '1.25rem auto' }} />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              A glimpse into our world — the dishes, the ambience, and the moments that make The Spice House special.
            </p>
          </div>
        </InView>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <InView key={img.id} delay={i * 60}>
              <button
                className="gallery-item"
                onClick={() => openLightbox(img.src, img.alt)}
                aria-label={`View image: ${img.alt}`}
                style={{ width: '100%', background: 'none', padding: 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-overlay">
                  <ZoomIn size={18} style={{ color: '#fff', marginRight: '0.4rem' }} />
                  <span>{img.alt}</span>
                </div>
              </button>
            </InView>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(0,0,0,0.93)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.25s ease',
          }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${lightboxAlt}`}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close image"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
          <img
            src={lightbox}
            alt={lightboxAlt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 80px rgba(0,0,0,0.8)',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </section>
  );
}
