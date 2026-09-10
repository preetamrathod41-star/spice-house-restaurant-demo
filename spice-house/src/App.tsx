import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PopularDishes } from './components/PopularDishes';
import { MenuSection } from './components/MenuSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function App() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-100%',
          left: '1rem',
          zIndex: 9999,
          background: 'var(--color-primary)',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0 0 0.5rem 0.5rem',
          fontWeight: 600,
          transition: 'top 0.2s',
        }}
        onFocus={(e) => { (e.target as HTMLElement).style.top = '0'; }}
        onBlur={(e) => { (e.target as HTMLElement).style.top = '-100%'; }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <PopularDishes />
        <MenuSection />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;
