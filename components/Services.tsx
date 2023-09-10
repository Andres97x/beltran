import { FC } from 'react';

import image1Low from '../src/assets/services-1-low.jpg';
import image2Low from '../src/assets/services-2-low.jpg';
import image3Low from '../src/assets/services-3-low.jpg';
import image4Low from '../src/assets/services-4-low.jpg';

import image1 from '../src/assets/services-1.jpg';
import image2 from '../src/assets/services-2.jpg';
import image3 from '../src/assets/services-3.jpg';
import image4 from '../src/assets/services-4.jpg';

import ServiceCard from './ServiceCard';
import './Services.css';

const Services: FC = () => {
  return (
    <div className='services'>
      <ServiceCard
        image={image1}
        imageLow={image1Low}
        subheading='Remodelamos'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit.'
      />

      <ServiceCard
        image={image2}
        imageLow={image2Low}
        subheading='Construimos'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit.'
      />

      <ServiceCard
        image={image3}
        imageLow={image3Low}
        subheading='Pensamos'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit, aperiam itaque.'
      />

      <ServiceCard
        image={image4}
        imageLow={image4Low}
        subheading='Diseñamos'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga.'
      />
    </div>
  );
};

export default Services;
