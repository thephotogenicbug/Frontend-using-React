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
                    <Link to='/' className="nav-link" >Api One</Link>
                </li>
                <li className="nav-item">
                    <Link to='/service' className="nav-link" >Api Two</Link>
                </li>
                <li className="nav-item">
                    <Link to='/dashboard' className="nav-link" >My Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to='/apifour' className="nav-link" >Api Four express body-parser</Link>
                </li>
                <li className="nav-item">
                    <Link to='/apifive' className="nav-link" >Api Five express body-parser</Link>
                </li>
                <li className="nav-item">
                    <Link to='/apisix' className="nav-link" >Api Six express body-parser</Link>
                </li>
                </ul>
            </div>
            </nav>

    )
}
export default Header;