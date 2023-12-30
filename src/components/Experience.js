import React from 'react';
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './Sidenav';
import ExperienceItem from './Experience-item';
import ScrollToTop from './scroll-top';

const Experience = () => {
    const [index, setCurrentEducation] = useState(0);

    const educationData = [
        {
            institution: "Predigle India",
            designation: "Software Engineer-L3",
            description: ["developed a testing framework specifically designed for conducting tests on Django Rest APIs.",
                "Created Django APIs facilitating the execution and termination of background processes as needed.",
                "Conceived and implemented a B2B plugin for Atlassian JIRA, specifically tailored to streamline the project's process intake step."
            ],
            date: "Aug, 2023 - Dec, 2023"
        },
        {
            institution: "IMEC, Belgium",
            designation: "International Scholar",
            description: ["Master's thesis, worked with CSA group of IMEC",
                "Verification of cache coherence protocol implementations",
                "Implemeneted strategy that reduced nearly 50% validation effort"
            ],
            date: "March, 2023 - July, 2023"
        },
        {
            institution: 'Airtel India',
            designation: 'Engineering Intern',
            description: ['Worked at Ad Specialization Group',
                'Responsible for designing and implementing a data drift library in the data pipeline of India scale.'],
            date: "June, 2022 - Sept, 2022"
        },
        {
            institution: 'IIT Kgp',
            designation: 'Research Intern',
            description: ['Worked on Satellite Image landscape Classification problem using QGIS.'],
            date: "June, 2019 - Aug, 2019"
        }
    ];
  return (
    <>
        <ScrollToTop/>
        <div className="container mt-2 d-flex">
            <SideNav data={educationData} _setCurrentEducation={setCurrentEducation}/>
            <ExperienceItem data={educationData[index]} />
        </div>
    </>
  );
};

export default Experience;
