import React from "react";
import { Link } from "react-router-dom";
import './styles/item.css'
export default function EducationItem(props){
    const _data = props.data;
      const headingStyle = {
        fontSize: '2em',
        color: '#333',
      };
    
      const paragraphStyle = {
        fontSize: '1em',
        lineHeight: '2',
        color: '#555',
      };
    return (
        <div className="item-container">
            <h1 style={headingStyle}>{_data.institution}</h1>
            <p style={paragraphStyle}>{_data.degree}</p>
            <p style={paragraphStyle}>{_data.date}</p>
            {/* <ol className="item-ul">
                {_data.courses.map((course, index)=>(
                    <li className="item-li"><p style={paragraphStyle}>{course}</p></li>
                ))}
            </ol> */}
            <Link to={_data.thesis.link}>{_data.thesis.text}</Link>
        </div>
    )
}