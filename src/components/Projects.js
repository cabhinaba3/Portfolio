// ProjectList.js
import './styles/projects.css'
import React from 'react';
import { InputLabel, Select, } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


import BasicCard from './Card';
// GLOBAL VARIABLES
const imec = "IMEC, Belgium"
const isi = "ISI, Kolkata"
const airtel = "Airtel, India"
const personal_project = "Personal Project"
const all = "All"
const npu = "Neural Processing Unit (NPU)"
const gpu = "Graphical Processing Unit (GPU)"
const snn = "Spiking Neural Network Chips"
const python = "Python3.x"
const cpp = "C++17"
const sst = "Structural Simulation Toolkit (SST)"
const bash = "Bash Scripting"
const pyspark = "PySpark"
const pylucene = "PyLucene"

const projects = [
{
    id:7,
    title: 'BenchMarks',
    description: 'Early PhD work. Benchmarking different AI processor for vision workloads',
    picLink: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Generic_block_diagram_of_a_GPU.svg",
    link: "#",
    techStack: [npu,python, gpu, snn],
    year: 2024,
    affiliations: imec,
    website: "#",
},
{
    id: 6,
    title: 'Formatflick',
    description: 'PyPI package which lets you convert to different file formats easily',
    picLink: "https://upload.wikimedia.org/wikipedia/commons/6/64/PyPI_logo.svg",
    link: "#",
    techStack: [python, 'PYPI'],
    year: 2024,
    affiliations: personal_project,
    website: "#"
},
{
    id: 1,
    picLink: "https://upload.wikimedia.org/wikipedia/commons/3/38/Randu.png",
    title: 'Directed Tester',
    description: "Testing any memory hierarchy presents significant challenges. Traditionally, a random tester is employed to verify the data integrity of a proposed memory hierarchy. These random testers generate arbitrary read/write signals and subsequently validate their correctness. Conversely, a directed tester makes informed decisions based on the current memory state of the caches, generating read/write signals accordingly.",
    link: '#',
    techStack: [cpp,sst, python, bash],
    year: 2023,
    affiliations: imec,
    webiste: "#"
},
{
id: 2,
title: `Master's Thesis`,
picLink: "https://upload.wikimedia.org/wikipedia/commons/8/82/1721_PhD_Ceremony_at_Leiden_University.jpg",
description: "Topic for my master's thesis was A framework for verification of cache coherence protocol implementations. My masters thesis was with the colaboration with imec, belgium",
link: '#',
techStack: [cpp,sst, python],
year: 2023,
affiliations: isi,
wubsite: "#",
},
{
    id: 3,
    picLink: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png",
    title: 'Levi',
    description: `Done as a part of my internship at Airtel, India for Ad Specialization Group,Library for machine learning drift detection,Implemented data anylysis models and statistical testing for better performance`,
    link: '#',
    techStack: [pyspark,python, bash],
    year: 2022,
    affiliations: airtel,
    website: "#",
},
{
    id:4,
    picLink: "https://upload.wikimedia.org/wikipedia/commons/c/cc/A_screenshot_of_suggestions_by_Google_Search_when_%22wikip%22_is_typed_%28new%29.png",
    title: 'Search Engine',
    description: `Built a search engine using PyLucene as a part of the course work,Supports indexing and searching`,
    link: 'https://example.com/project1',
    techStack: [python,pylucene],
    year: 2022,
    affiliations: personal_project,
    website: "#"
    
},
{
    id:5,
    picLink: "https://upload.wikimedia.org/wikipedia/commons/f/fb/PageRanks-Example.svg",
    title: 'Page Rank',
    description: `Implemented Page Rank ALgorithm in Vanilla PySpark as part of course work,Compared the result with actual implementation inside Spark framework`,
    link: 'https://example.com/project2',
    techStack: [pyspark,python],
    year: 2022,
    affiliations: personal_project,
    website: "#"
},
// Add more projects as needed
];
const columns = [
// {field: 'id', headerName: "ID", width: 90},
{field: 'title', headerName: 'Title', width: 90 },
{ field: 'description', headerName: 'Description', width: 150, sortable: true },
{ field: 'link', headerName: 'Link', width: 110, sortable: true },
];
const ProjectList = () => {
    const affiliations = [all,imec, isi, airtel, personal_project];
    const years = [all,2024,2023, 2022]
    const techStack = [all, npu, python, gpu, cpp, sst, pylucene ,bash,]
    const [currentfilteredRows, setCurrentFilteredRows] = React.useState(projects);
    
    const [currentYear, setCurrentYear] = React.useState(all);
    
    const handleYearChange = (event) => {
        setCurrentYear(event.target.value);
        filter(event.target.value, currentAffiliation, currentTech);
        // setFilterText(value);
        
    };
    const [currentAffiliation, setCurrentAffiliation] = React.useState(all);
    const handleAffiliationChange = (event)=>{
        setCurrentAffiliation(event.target.value);
        filter(currentYear, event.target.value, currentTech);
    };

    const [currentTech, setCurrentTech] = React.useState(all);
    const handleTechChange = (event) =>{
        setCurrentTech(event.target.value);
        filter(currentYear, currentAffiliation,event.target.value);
    };

    const filter = (year, affiliation, tech) => {
        let filteredRows = [];
        const _ = require("lodash");
        for(let i=0;i<projects.length;i++){
            if((year == all || projects[i].year === year) && 
            (affiliation == all || projects[i].affiliations == affiliation) &&
            (tech == all || _.includes(projects[i].techStack, tech))){
                filteredRows.push(projects[i]);
            }
        }
        setCurrentFilteredRows(filteredRows);
    };
    return (
        <div className="project-list justify-content-center">
            <div className='container d-flex justify-content-center' id='filer-project-container-id'>
                <FormControl sx={{m:3, minWidth: 120}} size="small">
                    <InputLabel id="year-form">Year</InputLabel>
                    <Select
                        value={currentYear}
                        onChange={handleYearChange}
                    >
                        {years.map((year, index)=>(
                            <MenuItem value={year}>{year}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{m:3, width: 250}} size="small">
                    <InputLabel id="affiliation-form">Affiliation</InputLabel>
                    <Select
                        value={currentAffiliation}
                        onChange={handleAffiliationChange}
                    >
                        {affiliations.map((aff, index)=>(
                            <MenuItem value={aff} key={aff}>
                                {aff}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{m:3, width: 250}} size="small">
                    <InputLabel id="affiliation-form">Tech Stack</InputLabel>
                    <Select
                        value={currentTech}
                        onChange={handleTechChange}
                    >
                        {techStack.map((aff, index)=>(
                            <MenuItem value={aff} key={aff}>
                                {aff}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className='container d-flex flex-wrap justify-content-around'>
                {currentfilteredRows.map((project, index)=>(
                    <BasicCard details={project}/>
                ))}
                {currentfilteredRows.length == 0?
                    (<div className='container justify-content-center'>
                        I am afraid there is no project with the current filters. Try someother filter, maybe the recent ones are interesting.
                        {/* Give user the hint what filters should they choose with respect to the current filter */}
                        <br/>
                        The current chosen filters are {currentAffiliation} and {currentYear}
                        <p className=''>
                            with {currentYear} the possible affiliations are: <>{projects.length !==0 ?(projects.affiliations.join(", ")):<></>}</>
                            {/* {projects.map((project, index)=>(
                                <>{project.year === currentYear ? <>{project.affiliations}</>:``}</>
                            ))} */}
                        </p>
                        <div className=''>
                            with {currentAffiliation} the possible filters are:
                            {projects.map((project, index)=>(
                                <>{project.affiliations == currentAffiliation?<>{project.year}</>:``}</>
                            ))}
                        </div>
                    </div>)
                    :(<></>)
                }
            </div>
        </div>
    );
};

export default ProjectList;
