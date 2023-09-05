import { useState, useEffect, FC } from 'react';
import './Hero.css';
import Carousel from './Carousel';
import { heroImagesData } from '../imagesData';

const FACTOR: number = 120;
type ImagesData = { image: string; id: number }[];

const Hero: FC = () => {
  const [images, setImages] = useState<ImagesData>(heroImagesData);
  const [direction, setDirection] = useState('right');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setButtonDisabled(false);
    }, 1500);
  }, []);

  const curSlide = 2;

  function setSlides(direction: string) {
    setImages(prevImages => {
      const poppedElement = prevImages[0];
      const newArray = prevImages.slice(1);
      newArray.push(poppedElement);
      setDirection(direction);
      return newArray;
    });
  }

  function prevSlide() {
    setSlides('left');
  }

  function nextSlide() {
    setSlides('right');
  }

  const galleryEl = images.map((image, i: number) => {
    const condition = () => {
      if (FACTOR * (i - curSlide) === 0) {
        return { scale: 1, index: 100, blur: 0 };
      } else if (FACTOR * (i - curSlide) === FACTOR) {
        return { scale: 0.7, index: 50, blur: 1.5 };
      } else if (FACTOR * (i - curSlide) === -FACTOR) {
        return { scale: 0.7, index: 50, blur: 1.5 };
      } else if (FACTOR * (i - curSlide) === FACTOR * 2) {
        return { scale: 0.5, index: 20, blur: 4 };
      } else if (FACTOR * (i - curSlide) === -FACTOR * 2) {
        return { scale: 0.5, index: 20, blur: 4 };
      }
    };

    const style = {
      transform: `scale(${condition()?.scale}) translateX(${
        direction === 'right'
          ? FACTOR * (i - curSlide)
          : FACTOR * -(i - curSlide)
      }% `,
      zIndex: condition()?.index,
      filter: `blur(${condition()?.blur}px)`,
    };

    return (
      <Carousel
        key={image.id}
        style={style}
        image={image.image}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    );
  });

  return (
    <div className='hero'>
      <div className='hero-text'>
        <div className='hero-paragraph'>
          <div
            className='paragraph-text'
            style={{ '--delay': 0 } as React.CSSProperties}
          >
            <span>— Tu</span> casa
          </div>
        </div>
        <div className='hero-paragraph'>
          <div
            className='paragraph-text'
            style={{ '--delay': 1.1 } as React.CSSProperties}
          >
            como siempre la <span>has</span>
          </div>
        </div>
        <div className='hero-paragraph last-paragraph'>
          <div
            className='paragraph-text last-sentence'
            style={{ '--delay': 2.2 } as React.CSSProperties}
          >
            soñado
            <span> —</span>
          </div>
        </div>
      </div>
      <div className='hero-gallery'>{galleryEl}</div>
      <div className='hero-btn__container'>
        <button
          disabled={buttonDisabled}
          onClick={prevSlide}
          className='hero-btn hero-btn__left'
        >
          ←
        </button>
        <button
          disabled={buttonDisabled}
          onClick={nextSlide}
          className='hero-btn hero-btn__right'
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Hero;
