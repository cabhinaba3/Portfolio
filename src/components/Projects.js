// ProjectList.js

import React from 'react';
import './styles/projects.css'
import './styles/item.css'
import { Link } from 'react-router-dom';
import ScrollToTop from './scroll-top';
const ProjectList = () => {
    const projects = [
        {
            title: 'Directed Tester',
            description: ['Built a directed tester to test the memory hierarchy module of the SST simulator',`Done as a part of my master's thesis`],
            link: '#',
            techStack: ['C++17','SST', 'Python']
        },
        {
            title: 'Levi',
            description: ['Done as a part of my internship at Airtel, India for Ad Specialization Group',`Library for machine learning drift detection`,`Implemented data anylysis models and statistical testing for better performance`],
            link: '#',
            techStack: ['PySpark','Python', 'Bash Scripting']
        },
        {
            title: 'Search Engine',
            description: ['Built a search engine using PyLucene as a part of the course work','Supports indexing and searching'],
            link: 'https://example.com/project1',
            techStack: ["Python ","PyLucene "]

        },
        {
            title: 'Page Rank',
            description: ['Implemented Page Rank ALgorithm in Vanilla PySpark as part of course work','Compared the result with actual implementation inside Spark framework'],
            link: 'https://example.com/project2',
            techStack: ["PySpark","Python"]
        },
        // Add more projects as needed
        ];
    return (
        <>
        <ScrollToTop/>
        <div className="project-list">
        <ul className='d-flex justify-content-center flex-wrap' id="project-ul">
            {projects.map((project, index) => (
            <li key={index} className="project-item m-3">
                <h2 className='project-h2'>{project.title}</h2>
                <ul className='item-ul'>
                    {project.description.map((desp,i)=>(
                        <li className='item-li'>{desp}</li>
                    ))}
                </ul>
                <div className="container d-flex">
                    <h6 className='project-h6'>Tech Stack</h6>
                    <ol>
                        {project.techStack.map((tech,i)=>(
                            <li>{tech}</li>
                        ))}
                    </ol>
                </div>
                <Link to={project.link} target="_blank" rel="noopener noreferrer" className='project-link'>View Project</Link>
            </li>
            ))}
        </ul>
        </div>
        </>
    );
};

export default ProjectList;
