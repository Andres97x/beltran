import { FC, useState, useEffect, useRef, useContext } from 'react';
import { SwipeContext } from '../contexts/swipeContext.jsx';
import servicesInfo from '../servicesData.ts';

import ServiceCard from './ServiceCard';
import './Services.css';

interface Props {
  windowWidth: number;
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>;
}

const Services: FC<Props> = ({ windowWidth, setWindowWidth }) => {
  const [curSlide, setCurSlide] = useState(0);
  const sliderRef = useRef<null | HTMLDivElement>(null);
  const swipe: any = useContext(SwipeContext);

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
    if (curSlide !== 0) {
      setCurSlide(0);
    }
    return;
  }, [windowWidth]);

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

  function handleClick(direction: string) {
    if (sliderRef.current) {
      const itemsPerScreen = parseInt(
        getSliderInfo(sliderRef.current).itemsPerScreen
      );

      const slidesnum = servicesInfo.length / itemsPerScreen;
      if (!direction) return;

      if (direction === 'next') {
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
        alt={service.alt}
      />
    );
  });

  return (
    <div
      className='services'
      onTouchStart={swipe.onTouchStart}
      onTouchMove={swipe.onTouchMove}
      onTouchEnd={() => {
        swipe.onTouchEnd(
          () => {
            handleClick('prev');
          },
          () => {
            handleClick('next');
          }
        );
      }}
    >
      <div ref={sliderRef} className='services-slider'>
        <div className='service-card'>{serviceCardEl}</div>
      </div>

      <div className='services-btns'>
        <button
          className='services-btn services-btn__left'
          onClick={() => {
            handleClick('prev');
          }}
        >
          <div>&lsaquo;</div>
        </button>
        <button
          className='services-btn services-btn__right'
          onClick={() => {
            handleClick('next');
          }}
        >
          <div>&rsaquo;</div>
        </button>
      </div>
    </div>
  );
};

export default Services;
