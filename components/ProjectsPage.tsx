import { FC } from 'react';
import projectsData from '../projectsData';

import './Projects.css';

const ProjectsPage: FC = () => {
  const projectsEl = projectsData.map(project => (
    <div key={project.id} className='project'>
      <img
        src={project.imageSrc}
        className={project.id === 4 ? 'object-pos-top' : ''}
      />
      <div className='project-content'>
        <p>{project.name}</p>
      </div>
    </div>
  ));

  return (
    <div className='projects-page'>
      <div className='projects-page-header'>
        <h1>Nuestros Proyectos</h1>
      </div>
      <div className='projects'>
        <div className='projects-container'>{projectsEl}</div>
      </div>
    </div>
  );
};

export default ProjectsPage;
