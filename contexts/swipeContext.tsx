import { createContext, useState, ReactNode } from 'react';

interface Value {
  onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: (prevSlide: () => void, nextSlide: () => void) => void;
}

interface SwipeContextProviderProps {
  children: ReactNode;
}

const SwipeContext = createContext<null | Value>(null);

const SwipeContextProvider = ({ children }: SwipeContextProviderProps) => {
  const [touchStart, setTouchStart] = useState<null | number>(null);
  const [touchEnd, setTouchEnd] = useState<null | number>(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (prevSlide: () => void, nextSlide: () => void) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe) prevSlide();
    if (isLeftSwipe) nextSlide();
  };

  return (
    <SwipeContext.Provider value={{ onTouchStart, onTouchMove, onTouchEnd }}>
      {children}
    </SwipeContext.Provider>
  );
};

export { SwipeContextProvider, SwipeContext };
