import { FC, useEffect, useRef, useContext } from 'react';
import { SwipeContext } from '../contexts/swipeContext.jsx';

interface Props {
  style: {};
  image: string;
  prevSlide(): void;
  nextSlide(): void;
}

const Carousel: FC<Props> = ({ style, image, prevSlide, nextSlide }) => {
  const ref = useRef<HTMLDivElement>(null);
  const swipe: any = useContext(SwipeContext);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) ref.current?.classList.remove('fade-hero-gallery');
    }, 1500);
  }, []);

  return (
    <>
      <div
        onTouchStart={swipe.onTouchStart}
        onTouchMove={swipe.onTouchMove}
        onTouchEnd={() => {
          swipe.onTouchEnd(prevSlide, nextSlide);
        }}
        ref={ref}
        className='hero-img__container fade-hero-gallery'
        style={style}
      >
        <img className='hero-img' src={image} />
      </div>
    </>
  );
};

export default Carousel;
