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
const projects = [
{
    id:7,
    title: 'BenchMarks',
    description: 'Early PhD work',
    picLink: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Generic_block_diagram_of_a_GPU.svg",
    link: "#",
    techStack: ['NPU','Python3.x'],
    year: 2024,
    affiliations: imec
},
{
    id: 6,
    title: 'Formatflick',
    description: 'PyPI package which lets you convert to different file formats easily',
    picLink: "https://upload.wikimedia.org/wikipedia/commons/6/64/PyPI_logo.svg",
    link: "#",
    techStack: ['Python3.x'],
    year: 2024,
    affiliations: personal_project
},
{
    id: 1,
    picLink: "https://upload.wikimedia.org/wikipedia/commons/3/38/Randu.png",
    title: 'Directed Tester',
    description: "Testing any memory hierarchy presents significant challenges. Traditionally, a random tester is employed to verify the data integrity of a proposed memory hierarchy. These random testers generate arbitrary read/write signals and subsequently validate their correctness. Conversely, a directed tester makes informed decisions based on the current memory state of the caches, generating read/write signals accordingly.",
    link: '#',
    techStack: ['C++17','SST', 'Python3.x'],
    year: 2023,
    affiliations: imec
},
{
id: 2,
title: `Master's Thesis`,
picLink: "https://upload.wikimedia.org/wikipedia/commons/8/82/1721_PhD_Ceremony_at_Leiden_University.jpg",
description: "Topic for my master's thesis was A framework for verification of cache coherence protocol implementations. My masters thesis was with the colaboration with imec, belgium",
link: '#',
techStack: ['C++17','SST', 'Python3.x'],
year: 2023,
affiliations: isi
},
{
    id: 3,
    picLink: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png",
    title: 'Levi',
    description: `Done as a part of my internship at Airtel, India for Ad Specialization Group,Library for machine learning drift detection,Implemented data anylysis models and statistical testing for better performance`,
    link: '#',
    techStack: ['PySpark','Python3.x', 'Bash Scripting'],
    year: 2022,
    affiliations: airtel,
},
{
    id:4,
    picLink: "https://upload.wikimedia.org/wikipedia/commons/c/cc/A_screenshot_of_suggestions_by_Google_Search_when_%22wikip%22_is_typed_%28new%29.png",
    title: 'Search Engine',
    description: `Built a search engine using PyLucene as a part of the course work,Supports indexing and searching`,
    link: 'https://example.com/project1',
    techStack: ["Python3.x","PyLucene "],
    year: 2022,
    affiliations: personal_project
    
},
{
    id:5,
    picLink: "https://upload.wikimedia.org/wikipedia/commons/f/fb/PageRanks-Example.svg",
    title: 'Page Rank',
    description: `Implemented Page Rank ALgorithm in Vanilla PySpark as part of course work,Compared the result with actual implementation inside Spark framework`,
    link: 'https://example.com/project2',
    techStack: ["PySpark","Python3.x"],
    year: 2022,
    affiliations: personal_project
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
    const [currentfilteredRows, setCurrentFilteredRows] = React.useState(projects);
    
    const [currentYear, setCurrentYear] = React.useState(all);
    
    const handleYearChange = (event) => {
        setCurrentYear(event.target.value);
        filter(event.target.value, currentAffiliation);
        // setFilterText(value);
        
    };
    const [currentAffiliation, setCurrentAffiliation] = React.useState(all);
    const handleAffiliationChange = (event)=>{
        setCurrentAffiliation(event.target.value);
        filter(currentYear, event.target.value);
    };

    const filter = (year, affiliation) => {
        let filteredRows = [];

        for(let i=0;i<projects.length;i++){
            if((year == all || projects[i].year === year) && (affiliation== all || projects[i].affiliations == affiliation)){
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
            </div>
            <div className='container d-flex flex-wrap justify-content-around'>
                {currentfilteredRows.map((project, index)=>(
                    <BasicCard details={project}/>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
