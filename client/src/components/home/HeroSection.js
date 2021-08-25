import React from 'react';
// import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import image6 from '../assets/img-10.jpg'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={ image6 } autoPlay loop muted />
      <h1>The Future of Fitness</h1>
      <p>Get Fit, Strong & Motivated</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          FIND A COURSE 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
