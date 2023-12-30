import React, {useState} from "react";
import './styles/skills.css'
import SideNav from "./Sidenav";
import ScrollToTop from "./scroll-top";
export default function Skills(){
  const [index, setCurrentEducation] = useState(0);
  const skilltype = [
    {institution:"Programming Language"},
    {institution: "Tech"}
  ]
  const skills = [
    {
      text: "C",
      desp: "First Programming Language",
      institution: "Programming Language"
    },
    {
      text: "C++",
      desp: "Yeah I love this one",
      institution: "Programming Language"
    },
    {
      text: "Python",
      desp: "Cant help it. Have to lean it",
      institution: "Programming Language"
    },
    {
      text: "Javascript",
      desp: "Google and good to go",
      institution: "Programming Language"
    },
    {
      text: "HTML",
      desp: "Dont know what to say",
      institution: "Programming Language"
    },
    {
      text: "CSS",
      desp: ":< Dont know what to say",
      institution: "Programming Language"
    },
    {
      text: "ReactJS",
      desp: "Its easier",
      institution: "Tech"
    },
    {
      text: "Django Rest",
      desp: "Backend Stuffs too :(",
      institution: "Tech"
    },
    {
      text: "MongoDB",
      desp: "Database xD",
      institution: "Tech"
    },
    {
      text: "MySQL",
      desp: "Duh Obviously",
      institution: "Tech"
    },
    {
      text: "SQLite",
      desp: "Python, you know :)",
      institution: "Tech"
    },
    {
      text: "VS Code",
      desp: "Everyone knows",
      institution: "Tech"
    },
    {
      text: "PyCharm",
      desp: "Django Stuffs xD",
      institution: "Tech"
    },
  ]
    return (
      <>
        <ScrollToTop/>
        <div className="container m-1 d-flex">
          <SideNav data={skilltype} _setCurrentEducation={setCurrentEducation}/>
          <div className="custom-dev">
            <div className="container">
              <h3>{skilltype[index].institution}</h3>
            </div>
            <div className="container d-flex">
              <div className="container d-flex flex-wrap justify-content-left">
                {skills.map((skill, _i)=>(
                  <div>
                    {skill.institution === skilltype[index].institution?(
                    <div class="card m-1">
                      <div class="card-inner">
                        <div class="card-front text-center">
                          <h3>{skill.text}</h3>
                        </div>
                        <div class="card-back text-center">
                          <p>{skill.desp}</p>
                        </div>
                      </div>
                  </div>):<></>}
              </div>))}
            </div>
          </div>
        </div>
        </div>

        {/* Another section
        <div className="container">
          <div>
            <h3>Imporant Resources</h3>
          </div>
        </div> */}
    </>
    )
};