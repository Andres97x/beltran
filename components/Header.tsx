import { FC, useRef, useState } from 'react';
import './Header.css';

const Header: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div ref={headerRef} className='header'>
      <div className='header-text'>Beltran</div>
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
              Services
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
              Projects
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
              Testimonials
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
              Contact
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
