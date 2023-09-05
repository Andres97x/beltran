import { FC, useRef, useEffect } from 'react';

import './Testimonials.css';
import testimonial1 from '../src/assets/testimonial-1.jpg';
import testimonial2 from '../src/assets/testimonial-2.jpg';
import testimonial3 from '../src/assets/testimonial-3.jpg';
import TestimonialCard from './TestimonialCard';

import tg1 from '../src/assets/testimonial-g-1.jpg';
import tg2 from '../src/assets/testimonial-g-2.jpg';
import tg3 from '../src/assets/testimonial-g-3.jpg';
import tg4 from '../src/assets/testimonial-g-4.jpg';

import tg1Low from '../src/assets/testimonial-g-1-low.jpg';
import tg2Low from '../src/assets/testimonial-g-2-low.jpg';
import tg3Low from '../src/assets/testimonial-g-3-low.jpg';
import tg4Low from '../src/assets/testimonial-g-4-low.jpg';

const Testimonials: FC = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = document.querySelectorAll('.testimonial-image');

    const obsOptions = {
      root: null,
      threshold: 0.4,
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        images.forEach(img => img.classList.remove('testimonial-hidden'));
        observer.unobserve(entry.target);
      },
      obsOptions
    );
    if (testimonialRef.current) observer.observe(testimonialRef?.current);
  }, []);

  return (
    <div className='testimonials'>
      <div className='testimonial-cards'>
        <TestimonialCard
          src={testimonial1}
          styles={{ bg: 'blue' }}
          author={{
            text: "Thanks guys, keep up the good work! Chammer should be nominated for service of the year, You won't regret it.",
            name: 'Alberto Donko',
            job: 'CEO. squareround',
          }}
        />
        <TestimonialCard
          src={testimonial2}
          styles={{ bg: 'red', reverse: 'reverse' }}
          author={{
            text: 'You made it so simple. My new site is so much faster and easier to work with than my old site',
            name: 'Jennifer Aniston',
            job: 'CEO. marvel studios',
          }}
        />
        <TestimonialCard
          src={testimonial3}
          styles={{ bg: 'yellow' }}
          author={{
            text: 'I just wanted to share a quick note and let you know that you guys do a really good job.',
            name: 'Sandra Bullock',
            job: 'CEO. spaceX',
          }}
        />
      </div>
      <div ref={testimonialRef} className='testimonial-gallery'>
        <img
          src={tg1Low}
          data-src={tg1}
          className='testimonial-image testimonial-image1 testimonial-hidden lazy-img__blurred'
          style={{ '--order': 1 } as React.CSSProperties}
        />
        <img
          src={tg2Low}
          data-src={tg2}
          className='testimonial-image testimonial-image2 testimonial-hidden lazy-img__blurred'
          style={{ '--order': 2 } as React.CSSProperties}
        />
        <img
          src={tg3Low}
          data-src={tg3}
          className='testimonial-image testimonial-image3 testimonial-hidden lazy-img__blurred'
          style={{ '--order': 3 } as React.CSSProperties}
        />
        <img
          src={tg4Low}
          data-src={tg4}
          className='testimonial-image testimonial-image4 testimonial-hidden lazy-img__blurred'
          style={{ '--order': 4 } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default Testimonials;
