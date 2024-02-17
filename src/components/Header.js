import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './styles/header.css'

export default function Header(props){
    const homePath=props.homePath;
    const navlist=["Experience","Skills","Books","Papers","Resume"]
    const listItems = navlist.map(index => <li className="nav-item"><Link className="nav-link active nav-link-item" to={homePath+"/"+index}><strong>{index}</strong></Link></li>);
    return (
        <div className="container sticky-top mt-3 d-flex justify-content-center align-content-center" id="header-container">
            <div className="container header-container-home">
                <Link className="header-container-home-link" to={homePath}><h1>Home</h1></Link>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="header-navbar-id">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="customNavbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">{listItems}</ul>
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