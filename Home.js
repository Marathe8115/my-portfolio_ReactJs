import React from 'react'
import Navbar from '../Componets/Navbar';
import Heroimg from '../Componets/Heroimg';
import Footer from '../Componets/Footer';
import Work from '../Componets/work';

const Home = () => {
  return ( 
    <div> 
       <Navbar/>
       <Heroimg/>
       <Work/>
       <Footer/>
    </div>
  );
};

export default Home;
