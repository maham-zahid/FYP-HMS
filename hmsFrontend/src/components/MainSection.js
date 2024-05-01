import React from 'react';
import '../App.css';
import { Button } from '../components/Button.js';
//import '../components/Button.css';
import './MainSection.css';

function MainSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/hv2.mp4' autoPlay loop muted />
      <h2>Revolutionizing Hostel Operations with Tech</h2>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

      </div>
    </div>
  );
}

export default MainSection;