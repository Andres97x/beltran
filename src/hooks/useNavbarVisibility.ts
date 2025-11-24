import { useEffect } from 'react';

export default function useNavbarVisibility() {
  useEffect(() => {
    let lastScrollTop = 0;
    const header: HTMLDivElement | null = document.querySelector('.header');
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        if (header) header.style.top = '-8rem';
      } else {
        if (header) header.style.top = '0';
      }
      lastScrollTop = scrollTop;
      if (window.scrollY > 300) {
        if (header) header.classList.add('header-blurred');
      } else {
        if (header) header.classList.remove('header-blurred');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
