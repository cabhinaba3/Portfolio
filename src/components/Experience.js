import React from 'react';
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import SideNav from './Sidenav';
// import ExperienceItem from './Experience-item';
// import ScrollToTop from './scroll-top';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import './styles/home.css'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
const Experience = () => {
    const [index, setCurrentEducation] = useState(0);

    const educationData = [
        {
            avatar: "PI",
            institution: "Predigle India",
            designation: "Software Engineer-L3",
            description: ["developed a testing framework specifically designed for conducting tests on Django Rest APIs.",
                "Created Django APIs facilitating the execution and termination of background processes as needed.",
                "Conceived and implemented a B2B plugin for Atlassian JIRA, specifically tailored to streamline the project's process intake step."
            ],
            date: "Aug, 2023 - Dec, 2023"
        },
        {
            avatar: "IM",
            institution: "IMEC, Belgium",
            designation: "International Scholar",
            description: ["Master's thesis, worked with CSA group of IMEC",
                "Verification of cache coherence protocol implementations",
                "Implemeneted strategy that reduced nearly 50% validation effort"
            ],
            date: "March, 2023 - July, 2023"
        },
        {
            avatar: "AI",
            institution: 'Airtel India',
            designation: 'Engineering Intern',
            description: ['Worked at Ad Specialization Group',
                'Responsible for designing and implementing a data drift library in the data pipeline of India scale.'],
            date: "June, 2022 - Sept, 2022"
        },
        {
            avatar: "II",
            institution: 'IIT Kgp',
            designation: 'Research Intern',
            description: ['Worked on Satellite Image landscape Classification problem using QGIS.'],
            date: "June, 2019 - Aug, 2019"
        }
    ];
  return (
    <>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        {educationData.map((item, index)=>(
            <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
              <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
                <Avatar>{item.avatar}</Avatar>
                <Typography noWrap>{item.institution}</Typography>
              </Stack>
            </Item>
        ))}
        </Box>
    </>
  );
};

export default Experience;
