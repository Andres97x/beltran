import { useRef, useEffect, FC } from 'react';
import './Hero.css';

import video from '../src/assets/video1.mp4';

interface Props {
  windowWidth: number;
}

const Hero: FC<Props> = ({ windowWidth }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);

  let scrollYPos = window.scrollY;
  let heroOpacityRate: number;

  if (windowWidth <= 600) heroOpacityRate = 1;
  else heroOpacityRate = 1.4;

  // lower hero opacity rate means that this element will fade quicker
  useEffect(() => {
    document.addEventListener('scroll', () => {
      scrollYPos = window.scrollY;

      let heroOpacity = heroOpacityRate - scrollYPos / 600;
      if (heroOpacity < 0) heroOpacity = 0;
      if (videoRef.current) videoRef.current.style.opacity = `${heroOpacity}`;

      let heroTextOpacity = 1 - scrollYPos / 400;
      if (heroTextOpacity < 0) heroTextOpacity = 0;
      if (heroTextRef.current) {
        heroTextRef.current.style.opacity = `${heroTextOpacity}`;
      }
    });
  }, []);

  useEffect(() => {
    let hasPlayed = false;

    // force the video to auto play on iOS devices
    document.addEventListener('DOMcontentLoaded', () => {
      function playVideo() {
        if (videoRef.current instanceof HTMLVideoElement && !hasPlayed) {
          videoRef.current
            .play()
            .then(() => {
              hasPlayed = true;
            })
            .catch(err => {
              console.error(`Autoplay was prevented, ${err}`);
            });
        }
      }

      // Try to play immediately
      playVideo();

      // If the browser prevents immediate autoplay, play on first user interaction
      document.addEventListener('touchstart', playVideo, { once: true });
    });
  }, []);

  return (
    <div className='hero'>
      <video ref={videoRef} src={video} playsInline autoPlay loop muted />
      <div ref={heroTextRef} className='hero-text'>
        <h1 className='h1'>¡Diseñando un mundo mejor!</h1>
      </div>
    </div>
  );
};

export default Hero;
