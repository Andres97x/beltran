import { FC, useState, useEffect } from 'react';
import './App.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Projects from '../components/Projects';
import SectionInfo from '../components/SectionInfo';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Map from '../components/Map';
import Footer from '../components/Footer';

const App: FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // resize event
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    // Links smooth scrolling
    const navLinksContainer = document.querySelector('.header-nav__items');

    navLinksContainer?.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target as Element;
      if (!target.classList.contains('nav-link')) return;
      const id = target.getAttribute('href');
      console.log(id);

      if (id)
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // show/hide navbar
    let lastScrollTop = 0;
    const header: HTMLDivElement | null = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        if (header) header.style.top = '-8rem';
      } else {
        if (header) header.style.top = '0';
      }
      lastScrollTop = scrollTop;

      // navbar transparency
      if (window.scrollY > 300) {
        if (header) header.style.backgroundColor = 'rgba(51, 51, 51)';
      } else {
        if (header) header.style.backgroundColor = 'rgba(51, 51, 51, 0.75)';
      }
    });

    // revealing sections
    const sections = document.querySelectorAll('.section');

    const reveal = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section-hidden');

      observer.unobserve(entry.target);
    };

    const revealObserver = new IntersectionObserver(reveal, {
      root: null,
      threshold: 0.05,
    });

    sections.forEach(sec => {
      sec.classList.add('section-hidden');
      revealObserver.observe(sec);
    });

    // lazy-loading images
    const images = document.querySelectorAll('img[data-src]');

    const options = {
      root: null,
      threshold: 0,
      // rootMargin: '-200px',
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLImageElement;

        if (!entry.isIntersecting) return;
        // replace src with data-src
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
  }, []);

  return (
    <div className='app-container'>
      <div className='header-hero'>
        <Header />
        <div className='hero-wrapper'>
          <Hero windowWidth={windowWidth} />
        </div>
      </div>

      <div className='section'>
        <SectionInfo
          subheading='servicios'
          h2='Descubre nuestra experiencia'
          number='1'
        />
        <Services windowWidth={windowWidth} setWindowWidth={setWindowWidth} />
      </div>

      <div className='section'>
        <SectionInfo
          classes={{ wide: 'section-projects' }}
          subheading='proyectos'
          h2='Explora nuestros logros'
          number='2'
        />
        <Projects />
      </div>

      <div className='section'>
        <div className='testimonials-container'>
          <SectionInfo
            subheading='Nuestras marcas'
            h2='Explora nuevas fronteras'
            number='3'
            classes={{ color: 'dark', center: 'center' }}
          />
          <Testimonials />
        </div>
      </div>
      <Feature />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
