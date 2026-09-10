import { useEffect, useRef, type ReactNode } from 'react';

interface InViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps children in a div that animates in when scrolled into view.
 * Uses IntersectionObserver for performance.
 */
export function InView({ children, className = '', delay = 0 }: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`in-view ${className}`}>
      {children}
    </div>
  );
}
