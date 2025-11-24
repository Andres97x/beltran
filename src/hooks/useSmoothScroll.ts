import { useEffect } from 'react';

export default function useSmoothScroll() {
  useEffect(() => {
    const navLinksContainer = document.querySelector('.header-nav__items');
    if (!navLinksContainer) return;
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.target as Element;
      if (!target.classList.contains('nav-link')) return;
      const id = target.getAttribute('href');
      if (id)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    navLinksContainer.addEventListener('click', handleClick);
    return () => navLinksContainer.removeEventListener('click', handleClick);
  }, []);
}
