import { FC } from 'react';
import './Map.css';

const Map: FC = () => {
  return (
    <div className='map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3943.156837497231!2d-75.858999!3d8.771310999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDYnMTYuNyJOIDc1wrA1MSczMi40Ilc!5e0!3m2!1sen!2sco!4v1700241254836!5m2!1sen!2sco'
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
