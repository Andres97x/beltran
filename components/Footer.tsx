import { FC } from 'react';
import './Footer.css';
import '../src/queries.css';
import beltranAltLogo from '../src/assets/BeltranAlt.png';
import {
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Footer: FC = () => {
  return (
    <div className='footer' id='section-4'>
      <div className='footer-container'>
        <div className='socials-col'>
          <img
            className='footer-logo'
            src={beltranAltLogo}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
          />
          <div className='social-icons'>
            <a href='http://wa.me/+573138061540' target='blank'>
              <AiOutlineWhatsApp className='social-icon' />
            </a>
            <a
              href='https://www.linkedin.com/company/beltran-engineering-group/about/?viewAsMember=true'
              target='blank'
            >
              <AiOutlineLinkedin className='social-icon' />
            </a>
            <a
              href='https://www.instagram.com/beltrangroup/profilecard/?igsh=MXd0Ym05MGttdzM0eQ%3D%3D'
              target='blank'
            >
              <AiOutlineInstagram className='social-icon' />
            </a>
          </div>

          <div className='copy'>
            website designed by{' '}
            <a href='https://www.instagram.com/andresguerra.97/' target='blank'>
              Andrés Guerra
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
