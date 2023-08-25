import "./WorkCardStyles.css";

import React from 'react';
//import pro1 from '../assets/bg5.jpg';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-titale">{props.titles}</h2>
                <div className="pro-ditails">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                      <NavLink to="url.com" className="btn">{props.view} view</NavLink>
                    </div>  
                    <div className="pro-btns">
                      <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard;