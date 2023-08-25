import React from 'react'
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/Footer';
import HeroImg2 from '../Componets/HeroImg2';
import AboutContent from '../Componets/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Im a Friendly Front-End Developer.."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;