import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Projects from '../components/Projects';
import ProjectsPage from '../components/ProjectsPage';
import SectionInfo from '../components/SectionInfo';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Map from '../components/Map';
import Layout from '../components/Layout';

import useWindowWidth from './hooks/useWindowWidth';
import useSmoothScroll from './hooks/useSmoothScroll';
import useNavbarVisibility from './hooks/useNavbarVisibility';
import useSectionReveal from './hooks/useSectionReveal';
import useLazyImages from './hooks/useLazyImages';
import useNumericInputValidation from './hooks/useNumericInputValidation';
import useScrollToTop from './hooks/useScrollToTop';

const App: FC = () => {
  const [windowWidth, setWindowWidth] = useWindowWidth();
  useSmoothScroll();
  useNavbarVisibility();
  useSectionReveal();
  useLazyImages();
  useNumericInputValidation();
  useScrollToTop();

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <div className='app-container'>
              <div className='header-hero'>
                <div className='hero-wrapper'>
                  <Hero windowWidth={windowWidth} />
                </div>
              </div>

              <div className='section'>
                <SectionInfo
                  subheading='servicios'
                  h2='Descubre nuestra experiencia'
                  number='1'
                />
                <Services windowWidth={windowWidth} setWindowWidth={setWindowWidth} />
              </div>

              <div className='section'>
                <SectionInfo
                  classes={{ wide: 'section-projects', center: 'center' }}
                  subheading='proyectos'
                  h2='Explora nuestros logros'
                  number='2'
                />
                <Projects />
              </div>

              <div className='section'>
                <div className='testimonials-container'>
                  <SectionInfo
                    subheading='Nuestras marcas'
                    h2='Explora nuevas fronteras'
                    number='3'
                    classes={{ color: 'dark', center: 'center' }}
                  />
                  <Testimonials />
                </div>
              </div>

              <div className='section'>
                <Contact />
              </div>

              <Feature />
              <Map />
            </div>
          }
        />
        <Route path='projects' element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
