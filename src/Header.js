import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
    return(

            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link to='/' className="navbar-brand">ReactJS + NodeJS + MySQL</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to='/' className="nav-link" >ApiOne</Link>
                </li>
                <li className="nav-item">
                    <Link to='/service' className="nav-link" >ApiTwo</Link>
                </li>
                <li className="nav-item">
                    <Link to='/dashboard' className="nav-link" >Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to='/apifour' className="nav-link" >ApiFour </Link>
                </li>
                <li className="nav-item">
                    <Link to='/apifive' className="nav-link" >ApiFive </Link>
                </li>
                <li className="nav-item">
                    <Link to='/apisix' className="nav-link" >ApiSix </Link>
                </li>
                <li className="nav-item">
                    <Link to='/emplist' className="nav-link" >fetch employee class </Link>
                </li>
                <li className="nav-item">
                    <Link to='/newemp' className="nav-link" >post employee class </Link>
                </li>
                </ul>
            </div>
            </nav>

    )
}
export default Header;