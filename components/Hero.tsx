import { useRef, useEffect, FC } from 'react';
import './Hero.css';

import { videosData } from '../videosData';

interface Props {
  windowWidth: number;
}

const Hero: FC<Props> = ({ windowWidth }) => {
  const video = videosData[0].video;
  const heroRef = useRef<HTMLVideoElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);

  let scrollYPos = window.scrollY;
  let heroOpacityRate: number;

  if (windowWidth <= 600) heroOpacityRate = 1;
  else heroOpacityRate = 1.5;

  // lower hero opacity rate means that this element will fade quicker

  console.log(heroOpacityRate);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      scrollYPos = window.scrollY;

      let heroOpacity = heroOpacityRate - scrollYPos / 600;
      if (heroOpacity < 0) heroOpacity = 0;
      if (heroRef.current) heroRef.current.style.opacity = `${heroOpacity}`;

      let heroTextOpacity = 1 - scrollYPos / 400;
      if (heroTextOpacity < 0) heroTextOpacity = 0;
      if (heroTextRef.current) {
        heroTextRef.current.style.opacity = `${heroTextOpacity}`;
      }
    });
  }, []);

  return (
    <div className='hero'>
      <video ref={heroRef} src={video} autoPlay loop muted />
      <div ref={heroTextRef} className='hero-text'>
        <span className='sub-heading__hero'>Project</span>
        <h1 className='h1'>
          High Line - Moynihan Connector Opens in New York City
        </h1>
      </div>
    </div>
  );
};

export default Hero;
