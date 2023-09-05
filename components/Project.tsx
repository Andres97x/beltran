import { FC } from 'react';

interface Props {
  id: number;
  thumbnail: string;
  name: string;
  country: string;
  price: string;
  rooms: string;
  location: string;
  photos: string[][];
  handleClick(id: number): void;
  isSelected: boolean;
  text: { description: string };
  openModal(): void;
}

const Project: FC<Props> = ({
  id,
  thumbnail,
  name,
  country,
  price,
  rooms,
  location,
  photos,
  handleClick,
  isSelected,
  text,
  openModal,
}) => {
  const photosEl = photos.map((photo, i) => {
    if (i <= 3) {
      return <img key={i} className='project-more__img' src={photo[0]} />;
    }
  });

  return (
    <>
      <div
        onClick={e => {
          const target = e.target as Element;
          if (target.classList.contains('project-more__btn')) return;
          handleClick(id);
        }}
        className={`project ${isSelected ? 'project-active' : ''}`}
      >
        <div className='project-name-image'>
          <div className='project-thumbnail'>
            <img src={thumbnail} />
          </div>
          <div className='project-name'>{name}</div>
        </div>
        <div className='project-country'>{country}</div>
        <div className='project-facts'>
          <span>{price}</span>
          <span>{rooms}</span>
          <span>{location}</span>
        </div>

        <div className={`more-container ${isSelected ? 'open-more' : ''}`}>
          <div className={`project-more`}>
            <div className='project-more__text'>{text.description}</div>
            <div className='project-more__images'>{photosEl}</div>
            <div className='project-more__btn-container'>
              <button onClick={openModal} className='project-more__btn'>
                See images
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// so far

export default Project;
