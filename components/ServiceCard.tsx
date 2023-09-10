import { FC } from 'react';

interface Props {
  subheading: string;
  text: string;
  image: string;
  imageLow: string;
}

const ServiceCard: FC<Props> = ({ subheading, text, image, imageLow }) => {
  return (
    <div className='service'>
      <div className='service-img-container'>
        <img className='lazy-img__blurred' src={imageLow} data-src={image} />
      </div>
      <div className='service-content'>
        <div className='service-subheading'>{subheading}</div>
        <p className='service-text'>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
