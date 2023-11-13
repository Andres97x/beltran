import { FC } from 'react';
import './Map.css';

const Map: FC = () => {
  return (
    <div className='map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.2437491925543!2d-75.87599812431026!3d8.76312249309281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2fc1047e5f0f%3A0xe404a386eeb3c1d!2sAlamedas%20Centro%20Comercial!5e0!3m2!1sen!2sco!4v1699884978479!5m2!1sen!2sco'
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
