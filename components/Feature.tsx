import { FC } from 'react';
import './Feature.css';

import logoBusiness from '../src/assets/business-insider.png';
import logoForbes from '../src/assets/forbes.png';
import logoTech from '../src/assets/techcrunch.png';
import logoTimes from '../src/assets/the-new-york-times.png';
import logoToday from '../src/assets/usa-today.png';

const Feature: FC = () => {
  return (
    <div className='feature'>
      <div className='feature-container'>
        <h2 className='feature-title'>As featured in</h2>
        <div className='feature-logos'>
          <img className='hola' src={logoTech} />
          <img src={logoBusiness} />
          <img src={logoTimes} />
          <img src={logoForbes} />
          <img src={logoToday} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
