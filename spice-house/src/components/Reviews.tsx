import { Star, Quote } from 'lucide-react';
import { REVIEWS, RESTAURANT_CONFIG } from '../config/restaurant';
import { InView } from './InView';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? 'currentColor' : 'none'}
          style={{ display: 'inline', opacity: i < rating ? 1 : 0.3 }}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="section-padding"
      style={{ background: 'var(--color-bg)' }}
      aria-labelledby="reviews-heading"
    >
      <div className="container-max">
        {/* Header */}
        <InView>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-subtitle">What Our Guests Say</p>
            <h2 className="section-title" id="reviews-heading">
              Guest Reviews
            </h2>
            <div className="gold-line" style={{ margin: '1.25rem auto' }} />

            {/* Overall rating */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '3rem',
              padding: '0.625rem 1.5rem',
              marginTop: '0.5rem',
            }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                {RESTAURANT_CONFIG.rating}
              </span>
              <div>
                <StarRating rating={5} />
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>
                  Based on {RESTAURANT_CONFIG.reviewCount} reviews
                </p>
              </div>
            </div>
          </div>
        </InView>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <InView key={review.id} delay={i * 100}>
              <article className="review-card" aria-label={`Review by ${review.name}`}>
                {/* Quote icon */}
                <Quote size={24} style={{ color: 'var(--color-primary)', opacity: 0.4 }} aria-hidden="true" />

                {/* Review text */}
                <p className="review-text">"{review.text}"</p>

                {/* Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div className="review-header">
                    <div className="review-avatar" aria-hidden="true">{review.avatar}</div>
                    <div>
                      <div className="review-name">{review.name}</div>
                      <div className="review-meta">{review.date}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <StarRating rating={review.rating} />
                    <div className="review-source" style={{ marginTop: '0.25rem' }}>
                      via {review.source}
                    </div>
                  </div>
                </div>
              </article>
            </InView>
          ))}
        </div>

        {/* CTA */}
        <InView>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Had a great experience? Share your review!
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              id="write-review-btn"
              aria-label="Write a review on Google"
            >
              Write a Review on Google
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
}
