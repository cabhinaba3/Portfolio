import React from 'react';
import './styles/home.css'
import profilePic from './assets/profile-pic.jpeg'
import './styles/item.css'
import ScrollToTop from './scroll-top';
import { Link } from 'react-router-dom';

export default function Home(props){
    const socials=[{name:"GitHub",link:"https://github.com/cohitherewer"},
    {name:"Facebook",link:"#"},{name:"LinkedIn",link:"https://www.linkedin.com/in/cabhisr4/"}];
    return (
      <>
      <ScrollToTop/>
      <div className="container" id='home-container'>
        <div className="profile-pic-container" id='home-container-pic'>
          <img src={profilePic} alt="Profile Pic" className="profile-pic"/>
        </div>
        <div className="container justify-content-center special-container" id='home-container-paragraph'>
          <h1>Hey, I am Abhinaba</h1>
          <p className='home-p' id='home-p'>
            As an engineer, passionate about Computer Architecture, Advanced Architectures, Advanced Networks. In 2024 I took a chance and left my Job for a Phd at University of Ghent.
            <br/>
            I keep diving into engineering details. To put my details my learnings into practice I keep building things on side. One of them is,
            <ol className='item-ol'>
              <li className=''><strong>formatflick</strong>:- A python module to convert file extensions</li>
            </ol>
            I completed my B.E in Electrical Engineering from <Link className="" to={"http://www.jaduniv.edu.in/"}>Jadavpur University</Link>
            <br/>
            M.Tech CS from <Link className='' to={"https://www.isical.ac.in/"}>Indian Statistical Institute, Kolkata</Link>. 
            <br/>
            I colaborated with <Link className='' to={"#"}>IMEC,Belgium</Link> for my <Link className=''to={'#'}>master's thesis.</Link>
            <hr/>
            <i>Recently I got an offer from <strong>University of Ghent</strong> for a PhD position. I will be joining there soon.</i>
            <hr/>
            You can find me on my socials below,
          </p>
          <ul className='profile-socials' id='profile-socials'>
            {socials.map((social,index)=>{
              return (
              <li className='profile-socials-item'>
                <Link className='btn btn-light btn-outline-dark'to={social.link} type='button' target='_blank'>{social.name}</Link>
              </li>);
            })
            }
          </ul>
          <p className='home-p'>You can find my resume <Link className='' to={props.resumeLink}>here</Link>.</p>
        </div>
      </div>
      </>
    )
}