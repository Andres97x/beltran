import { FC, useRef, useEffect } from 'react';

import './Testimonials.css';

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
      <div className='testimonial-text'>
        <p>
          <span>‟</span> Desde el año 2019, Beltrán Construction ha gestionado y
          desarrollados proyectos de construcción en el sector público y
          privado, desde proyectos residenciales, estaciones de bomberos,
          parques, vías y canales. Adicionalmente hemos desarrollado
          renovaciones y mantenimientos localizados.”
        </p>
        <p>
          <span>‟</span> Somos una compañía de suministro, fabricación e
          instalación de estructuras metálicas, nuestros proyectos son variados
          en envergadura, trabajamos desde barandas, pérgolas hasta cubiertas y
          edificios.”
        </p>
        <p>
          <span>‟</span> Nos dedicamos principalmente al suministro e
          instalación de puertas y ventanas en aluminio y PVC, contamos con un
          equipo altamente calificado.”
        </p>
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
