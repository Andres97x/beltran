import { FC } from 'react';

interface Props {
  fullDescription: string[];
}

const ServiceCardDescription: FC<Props> = ({ fullDescription }) => {
  const fullDescriptionEl = fullDescription.map((description, i) => (
    <p key={i}>{description}</p>
  ));

  return (
    <div className='service'>
      <div className='service-description'>{fullDescriptionEl}</div>
    </div>
  );
};

export default ServiceCardDescription;
