import { FC } from 'react';

interface Props {
  id: number;
  thumbnail: string;
  name: string;
  location: string;
  fastFacts: string[];
  photos: string[][];
  handleClick(id: number): void;
  isSelected: boolean;
  text: string[];
  openModal(): void;
}

const Project: FC<Props> = ({
  id,
  thumbnail,
  name,
  location,
  fastFacts,
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

  const projectFacts = fastFacts.map((fact, i) => <span key={i}>{fact}</span>);

  const descriptionText = text.map((paragraph, i) => (
    <p key={i}>{paragraph}</p>
  ));

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
        <div className='project-location'>{location}</div>
        <div className='project-facts'>{projectFacts}</div>

        <div className={`more-container ${isSelected ? 'open-more' : ''}`}>
          <div className={`project-more`}>
            <div className='project-more__text'>{descriptionText}</div>
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
