import React, { useState, useEffect } from 'react';
import TypingEffect from 'react-typing-effect';
import './styles/home.css'
import profilePic from './assets/profile-pic.jpeg'

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
      <div className="justify-content-center">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile Pic" className="profile-pic"/>
        </div>
        <div className={`profile-paragraph ${showAnimation ? 'show' : ''}`}>
          <TypingEffect
            speed={25}
            text={[
              "Proficient in Data Structures and Algorithms",
              "strong inclination towards Software Development",
              "interest in Formal Verification and Distributed Systems.",
              "Curious about theoretical aspects of computer science."
            ]}
          />
        </div>
      </div>
    )
}