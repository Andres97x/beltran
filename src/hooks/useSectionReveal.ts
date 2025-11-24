import { useEffect } from 'react';

export default function useSectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const reveal = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section-hidden');
        observer.unobserve(entry.target);
      });
    };
    const revealObserver = new IntersectionObserver(reveal, {
      root: null,
      rootMargin: '50px',
    });
    sections.forEach(sec => {
      sec.classList.add('section-hidden');
      revealObserver.observe(sec);
    });
    return () => revealObserver.disconnect();
  }, []);
}
