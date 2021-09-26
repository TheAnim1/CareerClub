import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="container text-center text-light bg-success bg-border">
        <div className="jumbotron p-5">
          <h1>Welcome to CareerClub</h1>
          <p>Hire employee for your project</p>
          <p>Minimum Budget: $10000</p>
        </div>
        
        
      </div>
    );
};

export default Banner;