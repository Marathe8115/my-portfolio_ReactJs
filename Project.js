import React from 'react'
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/Footer';
import HeroImg2 from '../Componets/HeroImg2';
import PriceingCard from '../Componets/PriceingCard';
import Work from '../Componets/work';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECT." text="Some of the My Most Recent Works"/>
      <Work/>
      <PriceingCard/>
      <Footer/>
    </div>
  )
}

export default Project
