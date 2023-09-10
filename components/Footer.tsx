import { FC } from 'react';
import './Footer.css';
import '../src/queries.css';
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Footer: FC = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='socials-col'>
          <div className='header-text'>BELTRAN</div>
          <div className='social-icons'>
            <AiOutlineWhatsApp className='social-icon' />
            <AiOutlineFacebook className='social-icon' />
            <AiOutlineInstagram className='social-icon' />
          </div>

          <div className='copy'>
            Copyright © 2023 by Andres Guerra, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
