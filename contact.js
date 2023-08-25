import React from 'react'
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/Footer';
import HeroImg2 from '../Componets/HeroImg2';
import Forms from '../Componets/Forms';

const contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Lats Have a Chat"/>
      <Forms/>
      <Footer/>
    </div>
  )
}

export default contact;
