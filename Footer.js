import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color :"#fff", marginRight: "2rem"}}/>
                <div>
                    <p>123 Husing Society.</p>
                    <p>India...</p>
                </div>
            </div>
            <div className="phone">
           <h4><FaPhone size={20} style={{color :"#fff", marginRight: "2rem"}}/>
            +91 9834-8800-60</h4> 
            </div>
            <div className="email">
           <h4><FaMailBulk size={20} style={{color :"#fff", marginRight: "2rem"}}/>
            marathelalit8115@gmail.com</h4> 
            </div>
        </div>

        <div className="right"> 
        <h4>About Me</h4>
        <p>I have Completed BSc(Computer Sceince) In 2021 With 82.80%
            and I have Completed in 8 month's in Java Full Skack Developer In 
            Unique System Skill's In Pune.. </p>
            <div className="social">
            <FaFacebook size={30} style={{color :"#fff", marginRight: "1rem"}}/>
            <FaTwitter size={30} style={{color :"#fff", marginRight: "1rem"}}/>
            <FaLinkedin size={30} style={{color :"#fff", marginRight: "1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
