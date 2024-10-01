import { FC } from 'react';
import './Map.css';

const Map: FC = () => {
  return (
    <div className='map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5238308827866!2d-74.0558753!3d4.6786178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aed01464057%3A0xfbf0d1419ec27560!2sCra.%2019b%20%2392-80%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1727795396300!5m2!1ses-419!2sco'
        width='600'
        height='450'
        style={{ border: '0' }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Map;
