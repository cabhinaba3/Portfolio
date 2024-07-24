import React, { useState } from 'react';
import './styles/home.css'
import profilePic from './assets/profile-pic.jpeg'
import './styles/item.css'
import ScrollToTop from './scroll-top';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Fade from '@mui/material/Fade';
import Resume from './resume';
import Colaborate from './colaborate';
const useStyles = makeStyles((theme)=>({
  dialogContent:{
    color: "#fff",
    opacity: '0.7',
    height: 'auto',
    overflow: 'auto',
  },
}))
export default function Home(props){

    const projects = [
      {
        name: "formatflick",
        link: "https://github.com/cohitherewer/formatflick-engine",
        description: "A python module to file extensions"
      },
      {
        name: "Search Engine",
        link:"https://github.com/cohitherewer/Search-Engine",
        description:"A implementation of search engine in pylucene"
      }
    ]
    const socials=[{name:"GitHub",link:"https://github.com/cohitherewer"},
    {name:"Facebook",link:"#"},{name:"LinkedIn",link:"https://www.linkedin.com/in/cabhisr4/"}];

    
    const [hoveredButton, setHoveredButton] = useState(null);
    const handleMouseEnter = (index) => {
      setHoveredButton(index);
    };
    const handleMouseLeave = () => {
      setHoveredButton(null);
    };

    // loading button
    const [loading, setLoading] = useState(false);
    const [resumeOpen, setResumeOpen] = useState(false);
    // const navigate = useNavigate();
    const handleDownload = async () => {
      setLoading(true);
      // console.log(props.resumeLink);
      await setTimeout(() =>{
        // navigate(props.resumeLink)
        setResumeOpen(true);
        setLoading(false);
      }, 2000);
    };
    const handleResumeClose = () =>{
      setResumeOpen(false);
    };
    const classes = useStyles();
    return (
      <>
      <ScrollToTop/>
      <div className="container" id='home-container'>
        <div className="profile-pic-container" id='home-container-pic'>
          <img src={profilePic} alt="Profile Pic" className="profile-pic"/>
        </div>
        <div className="container justify-content-center special-container" id='home-container-paragraph'>
          <h1>Hi, I am Abhinaba</h1>
          <p className='home-p' id='home-p'>
            I am a PhD student in the Information Technology Department at <Link to={"https://www.ugent.be/"}>Universiteit Ghent</Link>. My research focues on Cloud and Network Orchestration Techniques.
            In this regard my recent assignment focues on Edge computing, effecient resource allocation in context of vision applications.
            Currently I am studying computer vision, deep learning compilation and different energy efficient architectures.
            I completed my master's degree from <Link className='' to={"https://www.isical.ac.in/"}>ISI, Kolkata</Link> and B.E from <Link className="" to={"http://www.jaduniv.edu.in/"}>Jadavpur University</Link>. <br/>
            Before joining PhD, I was a software engineer at <Link className='' to={"https://predigle.com/"}>Predigle, India</Link>. I was an international scholar at <Link className='' to={"https://www.imec-int.com/en"}>imec, Belgium</Link> (master's thesis) and interned at <Link to={"https://www.airtel.in/"}>Airtel, India</Link>.
            <br/>
            Currently I am affiliated with <Link to={"https://www.ugent.be/ea/idlab/en"}>ID Lab(Ugent)</Link> and imec.
            <hr/>
          </p>
          <div>
            <Colaborate/>
          </div>
          <hr/>
          <div className='container d-flex flex-wrap'>
            <p className='home-p' id='home-p-social'>Find me on:</p>
            <ul className='profile-socials' id='profile-socials'>
              {socials.map((social,index)=>{
                return (
                <li className='profile-socials-item'>
                  <Tooltip title = {social.link}
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 500}}
                    enterDelay={150}
                    leaveDelay={100}
                  >
                    <Button variant={hoveredButton == index ?"contained":"outlined"}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      key={index}
                      href={social.link} className='btn-social'>
                        {social.name}
                    </Button>
                  </Tooltip>
                </li>);
              })
              }
            </ul>
          </div>
          <div className='container d-flex flex-wrap'>
            <p className='home-p'>Want to know more about me?
            <LoadingButton
              variant='string'
              loading={loading}
              onClick={handleDownload}
              className='MuiLoadingButton-containedSizeSmall'
            >
              {loading? 'Checking out...': 'Check out my Resume'}
            </LoadingButton>
            </p>
          </div>
          <Dialog
            fullScreen
            open={resumeOpen}
            onClose={handleResumeClose}
            scroll='body'
            aria-labelledby='scrollable-dialog-titile'
            aria-decsribedby='scrollable-dialog-description'
            // className='d-flex justify-content-center'
            id='resume-dialog'
          >
            <div className='sticky-top d-flex justify-content-around' id='resume-dialog-header'>
              <DialogTitle id='scrollable-dialog-titile'>Resume</DialogTitle>
              <DialogActions>
                <Button onClick={handleResumeClose} color='primary'>Close</Button>
              </DialogActions>
            </div>
            <DialogContent dividers
              className={classes.dialogContent}
              id='resume-dialog-content'
            >
              <Resume />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      </>
    )
}