import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Catch up on the latest articles in our blog. Read about exclusive fitness tips, workouts, recipes, and much more!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Location</h2>
            <p>1234 W. 6th Street</p>
            <p>Orlando, FL, 90020</p>
            <p>123-123-1234</p>
          </div>
          <div className='footer-link-items'>
            <h2>Hours</h2>
            <p>Open GYM: Mon-</p>
            <p>Thurs 8am-7pm, Fri</p>
            <p>8am-6pm</p> 
            <br></br> 
            <p>PT: By appointment</p>     
            <p>only</p> 
            <h2>Contact</h2>
            <a href="tel:1231231234">Call us at 123-123-1234</a>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/'>Instagram</a>
            <a href='https://www.facebook.com/'>Facebook</a>
            <a href='https://www.youtube.com/'>Youtube</a>
            <a href='https://twitter.com/?lang=en'>Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
