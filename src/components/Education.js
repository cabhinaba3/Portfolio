import React from 'react';
import { useState } from 'react';
import SideNav from './Sidenav';
import EducationItem from './Education-item';
import './styles/home.css'
import ScrollToTop from './scroll-top';
const Education = () => {
    const [index, setCurrentEducation] = useState(0);
    const educationData = [
        {
            institution: "Katholieke Universiteit, Leuven",
            degree: "International Scholar",
            courses: ["Master's thesis at IMEC, Belgium"],
            thesis: {
                text: "Master's Thesis",
                link: "#"
            },
            date: "March, 2023 - July, 2023"
        },
        {
            institution: 'Indian Statistical Institute, Kolkata',
            degree: 'M.Tech at Computer Science',
            courses: ['Design Analysis of Algorithms', 'Computer Networks', 'Combinatorial Geometry','Machine Learning','Information Retrieval','Formal Methods'],
            thesis: {
                text: "Master's Thesis",
                link: "#"
            },
            date: "Oct, 2021 - July, 2023"
        },
        {
            institution: 'Jadavpur University, Kolkata',
            degree: 'B.E in Electrical Engineering',
            courses: ['Electronics','Control Systems','Communications','High Voltage Engineering','Signals and Systems'],
            thesis:{
                text: "Bachelor's Thesis",
                link: "#"
            },
            date: "July, 2016 - July, 2020"
        }
    ];
  return (
    <>
        <ScrollToTop/>
        <div className="container justify-content-center special-container">
            <h1>Education</h1>
            <p className="home-p">
                I completed my <strong>B.E in Electrical Engineering</strong>from Jadavpur University and <strong>M.Tech in CS</strong> from Indian Statistical
                Institute, Kolkata. During my master's I went to attended <strong>KU, Leuven</strong> for my thesis. It has been a wonderful experience. 
                My master's thesis was done in colaboration with IMEC and KU, Leuven. 
                <br/>
                Recently I got a PhD offer from Ghent University and will be joining there soon.
            </p>
        </div>
        <div className="container justify-content-center m-3 d-flex">
            <SideNav data={educationData} _setCurrentEducation={setCurrentEducation}/>
            <EducationItem data={educationData[index]} />
        </div>
    </>
  );
};

export default Education;
