import { FC } from 'react';
import projectsData from '../projectsData';

import './Projects.css';

const Projects: FC = () => {
  const projectsEl = projectsData.map(project => (
    <div key={project.id} className='project'>
      <img
        src={project.src}
        className={project.id === 4 ? 'object-pos-top' : ''}
      />
      <div className='project-content'>
        <p>{project.name}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className='projects'>
        <div className='projects-container'>{projectsEl}</div>
      </div>
    </>
  );
};
export default Projects;
