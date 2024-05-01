import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import MainSection from '../components/MainSection';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

function Home1() {
  return (
    <>

        <Navbar2 />
        <MainSection />
        <Cards />
        <Footer/>
     
    </>
  );
}

export default Home1;