import React from 'react';
import adcLogo from './assets/logo.svg';
import adcLogoWhite from './assets/logo-white.svg';
import { HashLink } from "react-router-hash-link";
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  const handleNavigate = (e, targetId) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <footer>
      <div className='wrapper'>
        {/* <div className='column'>
          <h5>
            Join our Newsletter
          </h5>
          <p>Your Email</p>
          <div className='newsletter'>
            <input type='email' className='newsletter-email' placeholder='Enter Your Email' />
            <button className='button button-emphasis glass-border'>Submit</button>
          </div>
        </div> */}
        <div className='column'>
          <h5>Explore</h5>
          <HashLink smooth to={'/#'} onClick={e => handleNavigate(e, '#')}>Platform</HashLink>
          <HashLink smooth to={'/#ad-trends'} onClick={e => handleNavigate(e, 'ad-trends')}>
            AD Trends
          </HashLink>
          <HashLink smooth to={'/#services'} onClick={e => handleNavigate(e, 'services')}>
            Services
          </HashLink>
          <HashLink to={'/faq'}>
            FAQ
          </HashLink>
        </div>
        <div className='column'>
          <div className='footer-wrapper'>
            <img src={adcLogo} className='footer-logo' />
            <img src={adcLogoWhite} className='footer-logo-white' />
          </div>
          <p style={{ textAlign: 'center' }}>
            Orchestrate your <br />
            ad campaigns
          </p>
        </div>
        <div className='column'>
          <h5>Contact Us</h5>
          <a href='https://www.linkedin.com/company/adcropper' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
            adcropper
          </a>
          <a href='mailto:contact@adcropper.com'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
            </svg>
            contact@adcropper.com
          </a>
          <a href='tel:+902122525274' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
            </svg>
            +90 (212) 252 5274
          </a>
          <a href='https://wa.me/905469610404' target='_blank'>
            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M38.2587 7.03918C34.0494 2.82447 28.4511 0.502195 22.4861 0.5C10.1948 0.5 0.19143 10.5023 0.187127 22.7968C0.18502 26.7271 1.21251 30.5634 3.16377 33.9442L0 45.5L11.821 42.3993C15.0777 44.1764 18.7449 45.1119 22.4765 45.1129H22.4861C34.7753 45.1129 44.7798 35.1097 44.784 22.815C44.7861 16.8565 42.4692 11.255 38.2587 7.04023V7.03918ZM22.4861 41.3473H22.4786C19.1534 41.3463 15.8913 40.4523 13.0452 38.7641L12.3684 38.3622L5.35345 40.2021L7.2256 33.3626L6.78505 32.6612C4.93002 29.7103 3.9496 26.2995 3.95171 22.798C3.95601 12.5797 12.27 4.26564 22.4936 4.26564C27.4439 4.26783 32.0971 6.19776 35.5964 9.70146C39.096 13.2041 41.0215 17.8616 41.0194 22.8129C41.015 33.0322 32.7012 41.3463 22.4861 41.3463V41.3473ZM32.6519 27.4671C32.0948 27.1881 29.3557 25.8408 28.8445 25.6548C28.3335 25.4687 27.9626 25.3758 27.5915 25.9338C27.2205 26.4921 26.1524 27.7472 25.8273 28.1182C25.5022 28.4903 25.1773 28.5363 24.6202 28.2572C24.0632 27.9781 22.268 27.3901 20.1392 25.4922C18.4831 24.0146 17.3646 22.1907 17.0397 21.6325C16.7146 21.0744 17.0055 20.7729 17.2834 20.4959C17.5336 20.2458 17.8405 19.8449 18.1195 19.5198C18.3986 19.1947 18.4906 18.9618 18.6765 18.5907C18.8627 18.2185 18.7696 17.8937 18.6307 17.6145C18.4916 17.3355 17.3775 14.5929 16.9124 13.4778C16.4601 12.3916 16.0005 12.5391 15.6594 12.5209C15.3342 12.5049 14.9633 12.5017 14.5913 12.5017C14.2192 12.5017 13.6161 12.6406 13.105 13.1988C12.594 13.7568 11.1548 15.1051 11.1548 17.8465C11.1548 20.5879 13.1511 23.2385 13.4301 23.6106C13.7091 23.9827 17.3593 29.6097 22.948 32.024C24.277 32.5981 25.3151 32.9413 26.1246 33.1979C27.459 33.6224 28.6735 33.5626 29.6335 33.4192C30.704 33.2589 32.93 32.071 33.394 30.7697C33.8579 29.4685 33.8579 28.3524 33.719 28.1203C33.5801 27.8884 33.208 27.7482 32.6509 27.4692L32.6519 27.4671Z" fill="black"></path>
            </svg>
            +90 (546) 961 0404
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
