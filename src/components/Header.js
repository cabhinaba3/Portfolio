import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './styles/header.css'
export default function Header(props){
    const homePath=props.homePath;
    return (
        <div className="d-flex sticky-top justify-content-center mt-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <div className="container justify-content-center" id="header-prop-title">
                <Link className="navbar-brand" to="/Portfolio">{props.title}
                    <i class="fa-solid fa-house-user fa-shake fa-2xl" id="header-home"></i>
                </Link>
                <p>Designing Dreams, One Pixel at a Time.</p>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                    <Link className="nav-link active" to={homePath+"/education"}>
                        <strong>Education</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to={homePath+"/experience"}>
                        <strong>Experience</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to={homePath+"/skills"}>
                        <strong>Skills</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to={homePath+"/projects"}>
                        <strong>Projects</strong>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link active dropdown-toggle" to={homePath+"/bookself"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>My Self</strong>
                    </Link>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={homePath+"/books"}><i class="fa-solid fa-book fa-lg"></i> Books</Link></li>
                    <li><Link className="dropdown-item" to={homePath+"/papers"}><i class="fa-brands fa-searchengin fa-lg"></i>Papers</Link></li>
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