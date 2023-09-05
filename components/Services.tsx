import { FC } from 'react';

import image1Low from '../src/assets/services-1-low.jpg';
import image2Low from '../src/assets/services-2-low.jpg';
import image3Low from '../src/assets/services-3-low.jpg';

import image1 from '../src/assets/services-1.jpg';
import image2 from '../src/assets/services-2.jpg';
import image3 from '../src/assets/services-3.jpg';

import ServiceCard from './ServiceCard';
import './Services.css';

const Services: FC = () => {
  return (
    <div className='services'>
      <div className='service-img'>
        <img className='lazy-img__blurred' src={image1Low} data-src={image1} />
      </div>
      <ServiceCard
        subheading='remodelamos'
        title='Le damos una nueva vida a tus espacios'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit, aperiam itaque et iste reiciendis unde neque molestias ab architecto animi modi in saepe?'
      />

      <ServiceCard
        subheading='construimos'
        title='El proceso de construccion de principio a fin'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit, aperiam itaque et iste reiciendis unde neque molestias ab architecto animi modi in saepe?'
      />
      <div className='service-img justify-helper'>
        <img className='lazy-img__blurred' src={image2Low} data-src={image2} />
      </div>

      <div className='service-img'>
        <img className='lazy-img__blurred' src={image3Low} data-src={image3} />
      </div>
      <ServiceCard
        subheading='diseñamos'
        title='Nos encargamos de toda la parte tecnica del proyecto'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit, aperiam itaque et iste reiciendis unde neque molestias ab architecto animi modi in saepe?'
      />
    </div>
  );
};

export default Services;
