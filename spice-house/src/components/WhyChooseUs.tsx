import { Leaf, ChefHat, Users, Shield, Zap, Award } from 'lucide-react';
import { WHY_CHOOSE_US } from '../config/restaurant';
import { InView } from './InView';

const ICON_MAP: Record<string, React.ReactNode> = {
  Leaf: <Leaf size={22} />,
  ChefHat: <ChefHat size={22} />,
  Users: <Users size={22} />,
  Shield: <Shield size={22} />,
  Zap: <Zap size={22} />,
  Award: <Award size={22} />,
};

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="section-padding"
      style={{ background: 'var(--color-bg)' }}
      aria-labelledby="why-heading"
    >
      <div className="container-max">
        {/* Header */}
        <InView>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-subtitle">The Spice House Difference</p>
            <h2 className="section-title" id="why-heading">
              Why Guests Choose Us
            </h2>
            <div className="gold-line" style={{ margin: '1.25rem auto' }} />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              More than a meal — we create experiences rooted in tradition, quality, and genuine hospitality.
            </p>
          </div>
        </InView>

        {/* Features Grid */}
        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, i) => (
            <InView key={item.id} delay={i * 80}>
              <div className="why-card">
                <div className="why-icon" aria-hidden="true">
                  {ICON_MAP[item.icon]}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
