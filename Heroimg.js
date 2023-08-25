import "./HeroimgStyles.css";
import React from 'react'
 import computerImg from "../assets/computer.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={computerImg} alt="computerImg" />
      </div>
      <div className="content">
          <p>Hi, I/M A Softwaer devoloper </p>
          <h1>Reacct Developer</h1>
          <div className="submitBTN">
            <Link to="/project" className="btn">Project</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
      </div>
    </div>
  )
}
export default Heroimg 
