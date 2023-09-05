import { FC, useState, useEffect, useContext } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { SwipeContext } from '../contexts/swipeContext.jsx';

interface DataInterface {
  id: number;
  isSelected: boolean;
  thumbnail: string;
  name: string;
  country: string;
  price: string;
  rooms: string;
  location: string;
  photos: string[][];
  text: {
    description: string;
  };
}

interface Props {
  closeModal(): void;
  modalOpen: boolean;
  curProject: [] | DataInterface[];
}

const ProjectModal: FC<Props> = ({ closeModal, modalOpen, curProject }) => {
  const [projectObj] = curProject;
  const images = projectObj.photos.map(photo => photo[1]);
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = images.length - 1;
  const swipe: any = useContext(SwipeContext);

  function prevSlide() {
    setCurSlide(prevCurSlide => {
      if (curSlide <= 0) return maxSlide;
      return prevCurSlide - 1;
    });
  }

  function nextSlide() {
    setCurSlide(prevCurSlide => {
      if (curSlide === maxSlide) return 0;
      return prevCurSlide + 1;
    });
  }

  useEffect(() => {
    const fnCloseListener = function (e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', fnCloseListener);

    return () => {
      document.removeEventListener('keydown', fnCloseListener);
    };
  }, [modalOpen]);

  useEffect(() => {
    const fnKeyListener = function (e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    document.addEventListener('keydown', fnKeyListener);

    return () => {
      document.removeEventListener('keydown', fnKeyListener);
    };
  }, [curSlide]);

  const imagesEl = images.map((img, i) => {
    const style = {
      transform: `translateX(${100 * (i - curSlide)}%)`,
    };

    return (
      <img
        onTouchStart={swipe.onTouchStart}
        onTouchMove={swipe.onTouchMove}
        onTouchEnd={() => {
          swipe.onTouchEnd(prevSlide, nextSlide);
        }}
        key={i}
        src={img}
        style={style}
      />
    );
  });

  const dots = images.map((_, i) => (
    <button
      key={i}
      onClick={() => {
        setCurSlide(i);
      }}
      className={`dots__dot ${curSlide === i ? 'dots__dot--active' : ''}`}
      data-slide={i}
    ></button>
  ));

  return (
    <>
      <div className='modal'>
        <button onClick={() => closeModal()} className='modal-close__btn'>
          &times;
        </button>
        <h1 className='modal-title'>{projectObj.name}</h1>
        <div className='modal-images__container'>
          {imagesEl}
          <div className='dots'>{dots}</div>
        </div>
      </div>
      <AiOutlineLeft
        onClick={prevSlide}
        className='modal-arrow modal-arrow__left'
      />
      <AiOutlineRight
        onClick={nextSlide}
        className='modal-arrow modal-arrow__right'
      />

      <div onClick={() => closeModal()} className='overlay'></div>
    </>
  );
};

export default ProjectModal;
