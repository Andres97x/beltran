import { FC, useState, useEffect, useRef } from 'react';

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

const servicesInfo = [
  {
    id: 1,
    image: image1,
    imageLow: image1Low,
    subheading: 'Remodelamos',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit.',
  },
  {
    id: 2,
    image: image2,
    imageLow: image2Low,
    subheading: 'Construimos',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit.',
  },
  {
    id: 3,
    image: image3,
    imageLow: image3Low,
    subheading: 'Pensamos',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga non suscipit! Impedit, aperiam itaque.',
  },
  {
    id: 4,
    image: image4,
    imageLow: image4Low,
    subheading: 'Diseñamos',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel est sed fuga.',
  },
];

const Services: FC = () => {
  const [curSlide, setCurSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sliderRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const transform = `${
        parseInt(getSliderInfo(sliderRef.current).percentage) * -curSlide
      }%`;

      sliderRef.current.setAttribute(
        'style',
        `transform: translateX(${transform})`
      );
    }
  }, [windowWidth, curSlide]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  function getSliderInfo(element: HTMLDivElement) {
    const percentage =
      getComputedStyle(element).getPropertyValue('--slide-percentage');
    const itemsPerScreen =
      getComputedStyle(element).getPropertyValue('--items-per-screen');
    return { percentage, itemsPerScreen };
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (sliderRef.current) {
      const itemsPerScreen = parseInt(
        getSliderInfo(sliderRef.current).itemsPerScreen
      );

      const slidesnum = servicesInfo.length / itemsPerScreen;

      const target = e.target as HTMLElement;
      const button = target.closest('.services-btn');
      if (button?.classList.contains('services-btn__right')) {
        setCurSlide(prevSlide => {
          return curSlide === slidesnum - 1 ? 0 : prevSlide + 1;
        });
      } else {
        setCurSlide(prevSlide => {
          return curSlide <= 0 ? slidesnum - 1 : prevSlide - 1;
        });
      }
    }
  }

  const serviceCardEl = servicesInfo.map(service => {
    return (
      <ServiceCard
        key={service.id}
        image={service.image}
        imageLow={service.imageLow}
        subheading={service.subheading}
        text={service.text}
      />
    );
  });

  return (
    <div className='services'>
      <div ref={sliderRef} className='services-slider'>
        {serviceCardEl}
      </div>
      <div className='services-btns'>
        <button
          className='services-btn services-btn__left'
          onClick={handleClick}
        >
          <div>&lsaquo;</div>
        </button>
        <button
          className='services-btn services-btn__right'
          onClick={handleClick}
        >
          <div>&rsaquo;</div>
        </button>
      </div>
    </div>
  );
};

export default Services;
