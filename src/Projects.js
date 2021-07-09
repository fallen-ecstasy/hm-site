/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles/Projects.css';
import project1 from './media/project1.jpeg';
import project2 from './media/project2.jpg';
import project3 from './media/project3.png';
import project4 from './media/project4.jpg';
import project5 from './media/project5.png';
import project6 from './media/project6.jpg';

import ProjectTile from './Comps/projectCard';


function Projects(prop) {
    if(prop.view==="Mobile"){
        return (
            <div className="Projects-m">
                <div className="Heading-mobile"><h1>03.</h1><h2>Projects</h2><hr /></div>
                <div className="project-grid-m">
                    <ProjectTile view="Mobile" pic={project5} title="Project 1" />
                    <ProjectTile view="Mobile" pic={project2} title="Project 2" />
                    <ProjectTile view="Mobile" pic={project3} title="Project 3" />
                </div>
            </div>
        )
    }else{
    return (
        <div className="Projects">
            <div className="Heading"><h1>03.</h1><h2>Projects</h2><hr /></div>
            <div className="project-grid">
                <ProjectTile pic={project1} title="Project 1" />
                <ProjectTile pic={project2} title="Project 2" />
                <ProjectTile pic={project3} title="Project 3" />
                <ProjectTile pic={project4} title="Project 4" />
                <ProjectTile pic={project5} title="Project 5" />
                <ProjectTile pic={project6} title="Project 6" />
            </div>
        </div>
    )
    }
}

export default Projects
