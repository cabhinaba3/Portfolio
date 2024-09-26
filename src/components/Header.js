import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './styles/header.css'
import Tabs from '@mui/material/Tabs';
import { Button } from "@mui/material";
import { Tab } from "@mui/material";
import Drawer from '@mui/joy/Drawer';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Home from "./Home";
import Experience from "./Experience";
import ProjectList from "./Projects";
import Skills from "./Skills";
import Books from "./Books";
import Papers from "./Papers";
import Resume from "./resume";
import Colaborate from "./colaborate";

export default function Header(props){
    const homePath=props.homePath;
    const options=[
        {name:"Home",link:<Home resumeLink={homePath+"/Resume"}/>},
        {name: "Projects",link:<ProjectList/>},
        // {name: "Collaborate",link:<Colaborate/>}
        {name:"Experience",link:<Experience/>},
        // {name:"Skills",link:<Skills/>},
        // {name:"Books",link:<Books/>},
        // {name:"Papers",link:<Papers/>}
    ];
    for(let i=0;i<options.length;i++){
        console.log(options[i],i);
    }
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    // const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const delay = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
    const handleMenuItemClick = async (event, index) =>{
        if(index === selectedIndex){ return;}
        setSelectedIndex(index);
        setOpen(true);
        await delay(500)
        if(index==0){
            console.log(homePath);
            // navigate(homePath); // navigate to home
        }
        // console.log(optionsselectedIndex);
        setOpen(false);
    }
    return (
        <>
            <div className="sticky-top mt-3 d-flex justify-content-center" id="header-container">
                <Tabs 
                    value={selectedIndex}
                    onChange={handleMenuItemClick}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="primary tabs example"
                >
                    {options.map((option, index) =>(
                        <Tab
                        value={index}
                        label={option.name}
                        >{options}</Tab>
                    ))}
                </Tabs>
            </div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer+1 }}
                open = {open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <>
            {options[selectedIndex].link}
            </>
        </>
    )
};

Header.defaultProps = {
    title: "Portfolio",
}

Header.protoTypes={
    title: PropTypes.String
}