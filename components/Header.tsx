import { FC, useRef, useState } from 'react';
import './Header.css';
import beltranGroupLogo from '../src/assets/beltran-group.png';

const Header: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(false);

  // disable scrolling while mobile nav is open
  if (navOpen) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }

  return (
    <div ref={headerRef} className='header'>
      <img
        src={beltranGroupLogo}
        className='header-logo'
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }}
      />
      <nav className={`header-nav ${navOpen ? 'header-open' : ''}`}>
        <ul className='header-nav__items'>
          <li className='header-nav__item'>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              className='nav-link'
              href='section-1'
            >
              Servicios
            </a>
          </li>
          <li className='header-nav__item'>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              className='nav-link'
              href='section-2'
            >
              Proyectos
            </a>
          </li>
          <li className='header-nav__item'>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              className='nav-link'
              href='section-3'
            >
              Marcas
            </a>
          </li>
          <li className='header-nav__item'>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              className='nav-link'
              href='section-4'
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div
        onClick={() => {
          setNavOpen(prev => !prev);
        }}
        className={`header-icon ${navOpen ? 'header-open' : ''}`}
      >
        <div className='header-icon__line'></div>
        <div className='header-icon__line'></div>
      </div>
    </div>
  );
};

export default Header;
