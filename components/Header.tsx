import { FC, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import beltranGroupLogo from '../src/assets/beltran-group.png';

const Header: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // disable scrolling while mobile nav is open
  if (navOpen) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }

  return (
    <div ref={headerRef} className='header'>
      <Link to='/' className='header-logo-link'>
        <img
          src={beltranGroupLogo}
          className='header-logo'
        />
      </Link>
      <nav className={`header-nav ${navOpen ? 'header-open' : ''}`}>
        <ul className='header-nav__items'>
          <li className='header-nav__item'>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              className={`nav-link ${!isHome ? 'nav-link-disabled' : ''}`}
              href='section-1'
              style={{ pointerEvents: !isHome ? 'none' : 'auto', opacity: !isHome ? 0.5 : 1 }}
            >
              Servicios
            </a>
          </li>
          <li className='header-nav__item'>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              className={`nav-link ${!isHome ? 'nav-link-disabled' : ''}`}
              href='section-2'
              style={{ pointerEvents: !isHome ? 'none' : 'auto', opacity: !isHome ? 0.5 : 1 }}
            >
              Proyectos
            </a>
          </li>
          <li className='header-nav__item'>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              className={`nav-link ${!isHome ? 'nav-link-disabled' : ''}`}
              href='section-3'
              style={{ pointerEvents: !isHome ? 'none' : 'auto', opacity: !isHome ? 0.5 : 1 }}
            >
              Marcas
            </a>
          </li>
          <li className='header-nav__item'>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              className={`nav-link ${!isHome ? 'nav-link-disabled' : ''}`}
              href='section-4'
              style={{ pointerEvents: !isHome ? 'none' : 'auto', opacity: !isHome ? 0.5 : 1 }}
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
