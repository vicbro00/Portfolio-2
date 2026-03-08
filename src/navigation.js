import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">PORTFOLIO</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            
            {/* Project Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/project/css-frameworks">Social App (CSS)</Link></li>
                <li><Link className="dropdown-item" to="/project/js-frameworks">E-com Store (JS)</Link></li>
                <li><Link className="dropdown-item" to="/project/semester-project-2">Auction Hub (SP2)</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}