import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './styles/header.css'
export default function Header(props){
    return (
        <div className="d-flex sticky-top justify-content-center mt-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <div>
                <Link className="navbar-brand" to="/Portfolio">{props.title}</Link>
                <p>Designing Dreams, One Pixel at a Time.</p>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                    <Link className="nav-link active" to="/education">Education</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/experience">Experience</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/projects">Projects</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link active dropdown-toggle" to="/bookself" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Bookself
                    </Link>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/books">Books</Link></li>
                    <li><Link className="dropdown-item" to="/papers">Papers</Link></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
    )
}

Header.defaultProps = {
    title: "Portfolio",
}

Header.protoTypes={
    title: PropTypes.String
}