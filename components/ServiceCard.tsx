import { FC } from 'react';

interface Props {
  subheading: string;
  text: string;
  image: string;
  imageLow: string;
  alt: string;
}

const ServiceCard: FC<Props> = ({ subheading, text, image, imageLow, alt }) => {
  return (
    <div className='service'>
      <div className='service-img-container'>
        <img
          className='lazy-img__blurred'
          src={imageLow}
          data-src={image}
          alt={alt}
        />
      </div>
      <div className='service-content'>
        <div className='service-subheading'>{subheading}</div>
        <p className='service-text'>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
