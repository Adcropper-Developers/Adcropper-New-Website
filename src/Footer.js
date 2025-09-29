import React from 'react';
import adcLogo from './assets/logo.svg';

function Footer() {
  return (
    <footer>
      <div className='wrapper'>
        <div className='column'>
          <h5>
            Join our Newsletter
          </h5>
          <p>Your Email</p>
          <div className='newsletter'>
            <input type='email' className='newsletter-email' placeholder='Enter Your Email' />
            <button className='button button-emphasis glass-border'>Submit</button>
          </div>
        </div>
        <div className='column'>
          <h5>Explore</h5>
          <a href='#'>Platform</a>
          <a href='#'>Adtrends</a>
          <a href='#'>Services</a>
          <a href='#'>FAQ</a>
        </div>
        <div className='column'>
          <h5>About</h5>
          <a href='#'>Terms and conditions</a>
          <a href='#'>.</a>
          <a href='#'>.</a>
          <a href='#'>.</a>
        </div>
        <div className='column'>
          <img src={adcLogo} className='footer-logo'/>
          <p>
            Orchestrate your <br />
            ad campaigns
          </p>
          <p>
            Adcropper Website
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
