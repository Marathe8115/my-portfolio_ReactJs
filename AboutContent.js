import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import bannerimg from '../assets/bannerimg.jpg';
import computer from '../assets/computer.jpg';

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>Im a Ract Font-end Developer. I create responsive
                secure websites for my clients.
            </p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={bannerimg} className="img" alt="true "/>
                </div>
                <div className="img-stack bottom">
                    <img src={computer} className="img  " alt="true "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
