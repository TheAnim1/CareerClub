import React from 'react';
import "./Header.css";

const Header = () => {
    return (
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="/careerclub">CareerClub</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact US</a>
              </li>
              
            </ul>
            <form className="d-flex flex-fill">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>
        
    );
};

export default Header;