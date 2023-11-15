import { FC, useState, useEffect } from 'react';

import Project from './Project';
import projectsData from '../projectsData';
import './Projects.css';
import ProjectModal from './ProjectModal';

interface DataInterface {
  id: number;
  isSelected: boolean;
  thumbnail: string;
  name: string;
  location: string;
  fastFacts: string[];
  photos: string[][];
  text: string[];
}

const Projects: FC = () => {
  const [projects, setProjects] = useState<DataInterface[]>(projectsData);
  const [modalOpen, setModalOpen] = useState(false);
  const [curProject, setCurProject] = useState<DataInterface[] | []>([]);

  // disable scrolling while project modal is open
  if (modalOpen) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }

  const handleClick = (id: number) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id !== id ? { ...project, isSelected: false } : project
      )
    );

    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id
          ? { ...project, isSelected: !project.isSelected }
          : project
      )
    );
  };

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    const foundProject = projects?.filter(project => project.isSelected);
    setCurProject(foundProject);
  }, [projects]);

  const projectsEl = projects.map(project => (
    <Project
      key={project.id}
      id={project.id}
      thumbnail={project.thumbnail}
      name={project.name}
      location={project.location}
      fastFacts={project.fastFacts}
      photos={project.photos}
      handleClick={handleClick}
      isSelected={project.isSelected}
      text={project.text}
      openModal={openModal}
    />
  ));

  return (
    <>
      <div className='projects'>
        <div className='projects-header'>
          <div>nombre</div>
          <div>ubicació n</div>
          <div>servicios</div>
        </div>
        <div className='projects-container'>{projectsEl}</div>
      </div>
      {modalOpen && (
        <ProjectModal
          closeModal={closeModal}
          modalOpen={modalOpen}
          curProject={curProject}
        />
      )}
    </>
  );
};
export default Projects;
