import { Leaf, Flame } from 'lucide-react';
import { InView } from './InView';

export function About() {
  const stats = [
    { value: '15+', label: 'Years of\nExcellence' },
    { value: '500+', label: 'Happy\nGuests Monthly' },
    { value: '80+', label: 'Dishes on\nthe Menu' },
  ];

  return (
    <section id="about" className="section-padding bg-surface" aria-labelledby="about-heading">
      <div className="container-max">
        <div className="about-grid">
          {/* Images column */}
          <InView>
            <div className="about-images">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="The elegant interior of The Spice House restaurant"
                className="about-img-main"
                loading="lazy"
              />
              {/* Floating badge */}
              <div className="about-img-badge">
                <div className="number">15+</div>
                <div className="label">Years of<br />Culinary Excellence</div>
              </div>
            </div>
          </InView>

          {/* Text column */}
          <div>
            <InView delay={100}>
              <p className="section-subtitle">Our Story</p>
              <h2 className="section-title" id="about-heading">
                Crafted with Passion,<br />Served with Love
              </h2>
              <div className="gold-line" />
            </InView>

            <InView delay={200}>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                Founded in 2008 by the Kapoor family, <strong style={{ color: 'var(--color-text)' }}>The Spice House</strong> began as a humble kitchen with a simple dream — to share the bold, complex flavours of authentic Indian cuisine with every guest who walked through our doors.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                Today, our award-winning restaurant is helmed by Executive Chef Arjun Kapoor, whose passion for heritage recipes and premium local sourcing continues to set us apart. Every dish is a testament to our belief that <em style={{ color: 'var(--color-primary-light)' }}>great food begins with great ingredients</em>.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                From our FSSAI-certified kitchen to your table, we maintain the highest standards of hygiene, quality, and hospitality — because you deserve nothing less.
              </p>
            </InView>

            {/* Features */}
            <InView delay={300}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
                {[
                  { icon: <Leaf size={16} />, label: 'Farm-to-table fresh ingredients, sourced daily' },
                  { icon: <Flame size={16} />, label: 'Heritage recipes perfected over generations' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: '0.5rem',
                      background: 'rgba(200,134,10,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </InView>

            {/* Stats */}
            <InView delay={400}>
              <div className="about-stats">
                {stats.map((s) => (
                  <div key={s.value} className="about-stat">
                    <div className="value">{s.value}</div>
                    <div className="label" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
}
