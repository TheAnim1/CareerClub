import { faDollarSign, faLocationArrow, faPhone, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./User.css";
const User = (props) => {
    const {country, img, job, name, phone,salary}= props.user
    return (
        
        <div className="col">
          <div className="card w-100">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body bg-success">
              <h5 className="card-title text-light">{name}</h5>
              <p className="card-text text-light">{job}</p>
              <p className="card-text text-light"> <FontAwesomeIcon icon={faLocationArrow}/>  {country}</p>
              <p className="card-text text-light "><FontAwesomeIcon icon={faPhone}/> {phone}</p>
              <p className="card-text text-light fs-3"> <FontAwesomeIcon icon={faDollarSign}/> {salary}</p>
              <button onClick={()=>props.handleAddedUser(props.user)} className="btn btn-danger btn-lg "> <FontAwesomeIcon icon={faUserPlus}/> Hire Me</button>
            </div>
          </div>
        </div>
    
    
    
    );
};

export default User;