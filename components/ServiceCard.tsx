import { FC } from 'react';

interface Props {
  subheading: string;
  title: string;
  text: string;
}

const ServiceCard: FC<Props> = ({ subheading, title, text }) => {
  return (
    <div className='service'>
      <div className='service-content'>
        <div className='service-subheading'>{subheading}</div>
        <p className='service-title'>{title}</p>
        <p className='service-text'>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
