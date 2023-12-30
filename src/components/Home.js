import React, { useState, useEffect } from 'react';
import TypingEffect from 'react-typing-effect';
import './styles/home.css'
import profilePic from './assets/profile-pic.jpeg'
import './styles/item.css'
import ScrollToTop from './scroll-top';

export default function Home(){
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay (e.g., 500ms)
    const animationTimeout = setTimeout(() => {
      setShowAnimation(true);
    }, 1);

    // Clear the timeout to avoid triggering animation on unmount
    return () => clearTimeout(animationTimeout);
  }, []);


    return (
      <>
      <ScrollToTop/>
      <div className="justify-content-center">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile Pic" className="profile-pic"/>
        </div>
        <div className={`profile-paragraph ${showAnimation ? 'show' : ''}`}>
          <TypingEffect
            speed={25}
            text={[
              "Proficient in Data Structures and Algorithms",
              "Strong inclination towards Software Development",
              "Interest in Formal Verification and Distributed Systems.",
              "Curious about theoretical aspects of computer science."
            ]}
          />
        </div>
        <div className="container justify-content-center special-container" id='home-container'>
          <h2>Hey, I am Abhinaba</h2>
          <p className='home-p' id='home-p'>
            I am a dedicated software engineer with a passion for exploring the realms of Distributed Systems, Computer Architecture, Networking, and Algorithms. My professional journey led me to contribute significantly to the innovative products at <b>Predigle, India</b>, where I actively participated in shaping the development of two flagship offerings - <b>Precog</b> and <b>Predigle Quest</b>.
            <br/>
            I invite you to explore my portfolio to gain a deeper understanding of my journey, projects, and the diverse skill set I bring to the table. Let's embark on a digital exploration of my passion for crafting solutions that push the boundaries of what's possible in the world of technology.
            <br/>
            Every week, I try to learn new things and try to put my learnings into practise. I keep building things on the side. Currently I am building a python module.
            <br/>
            Some of my treasured projects that I completed during different phases of my life,
            <ol className='item-ul'>
              <li className='item-li'><strong>Directed Tester:</strong>Improved version of a special Testing framework to test memory hierarchy module, specially a cache coherence protocol.</li>
              <li className='item-li'><strong>levi</strong>: Data Drift Detection library written entirely in PySpark during my internship with Airtel, India</li>
            </ol>
            <hr/>
            <i>Recently I got an offer from <strong>University of Ghent</strong>for a PhD position. I will be joining there soon.</i>
          </p>
        </div>
      </div>
      </>
    )
}