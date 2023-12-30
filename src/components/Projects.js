// ProjectList.js

import React from 'react';
import './styles/projects.css'
import './styles/item.css'
import { Link } from 'react-router-dom';
const ProjectList = () => {
    const projects = [
        {
            title: 'Directed Tester',
            description: ['Built a directed tester to test the memory hierarchy module of the SST simulator',`Done as a part of my master's thesis`],
            link: '#',
            techStack: ['C++17','SST', 'Python']
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
        <div className="project-list">
        <ul>
            {projects.map((project, index) => (
            <li key={index} className="project-item">
                <h2>{project.title}</h2>
                <ul className='item-ul'>
                    {project.description.map((desp,i)=>(
                        <li className='item-li'>{desp}</li>
                    ))}
                </ul>
                <div className="container d-flex">
                    <h6>Tech Stack</h6>
                    <ol>
                        {project.techStack.map((tech,i)=>(
                            <li>{tech}</li>
                        ))}
                    </ol>
                </div>
                <Link to={project.link} target="_blank" rel="noopener noreferrer">View Project</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ProjectList;
