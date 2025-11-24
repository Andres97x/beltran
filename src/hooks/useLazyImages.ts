import { useEffect } from 'react';

export default function useLazyImages() {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    const options = {
      root: null,
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLImageElement;
        if (!entry.isIntersecting) return;
        if (target.dataset.src) target.src = target.dataset.src;
        target.addEventListener('load', () => {
          target.classList.remove('lazy-img__blurred');
        });
        observer.unobserve(target);
      });
    }, options);
    images.forEach(img => {
      observer.observe(img);
    });
    return () => observer.disconnect();
  }, []);
}
