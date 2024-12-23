import { FC } from 'react';
import './Feature.css';

import feature1 from '../src/assets/feature-1.webp';
import feature2 from '../src/assets/feature-2.webp';
import feature3 from '../src/assets/feature-3.webp';
import feature4 from '../src/assets/feature-4.webp';
import feature5 from '../src/assets/feature-5.webp';
import feature6 from '../src/assets/feature-6.webp';
import feature7 from '../src/assets/feature-7.webp';
import feature8 from '../src/assets/feature-8.webp';
import feature9 from '../src/assets/feature-9.webp';
import feature10 from '../src/assets/feature-10.webp';
import feature11 from '../src/assets/feature-11.webp';

const Feature: FC = () => {
  return (
    <div className='feature'>
      <div className='feature-container'>
        <h2 className='feature-title'>Nuestros clientes</h2>
        <div className='feature-logos'>
          <img src={feature1} />
          <img src={feature2} />
          <img src={feature3} />
          <img src={feature4} />
          <img src={feature5} />
          <img src={feature6} />
          <img src={feature7} />
          <img src={feature8} />
          <img src={feature9} />
          <img src={feature10} />
          <img src={feature11} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
