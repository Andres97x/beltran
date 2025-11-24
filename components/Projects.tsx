import { FC } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../projectsData';

import './Projects.css';

const Projects: FC = () => {
  const displayedProjects = projectsData.slice(0, 6);

  const projectsEl = displayedProjects.map(project => (
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
    <>
      <div className='projects'>
        <div className='projects-container'>{projectsEl}</div>
        <Link to='/projects' className='projects-show-more-btn'>
          Mostrar más
        </Link>
      </div>
    </>
  );
};
export default Projects;
