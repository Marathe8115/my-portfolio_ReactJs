import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./workCardData";

import React from 'react'
//import Pro1 from '../assets/bg5.jpg';
// import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Project</h1>
        <div className="project-container">
            {WorkCardData.map ((val, ind)=>{
              return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.titale}
                text={val.text}
                view={val.view}
                />
              )
            })}
        </div>
      
    </div>
  )
}

export default Work; 