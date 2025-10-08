import React, { useCallback, useRef } from 'react';
import './styles/utils.css';
import './styles/common.css';
import './styles/navigation-bar.css';
import adcLogo from './assets/logo.svg';
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import Background from './Background';
import { Link } from 'react-router-dom';


function Navbar({ theme, changeTheme }) {
  const navigationBar = useRef();
  const toggleNav = useCallback((e) => {
    if (e.target.classList.contains('close')) {
      e.target.classList.remove('close');
      navigationBar.current.classList.remove('active');
    } else {
      e.target.classList.add('close');
      navigationBar.current.classList.add('active');
    }
  });

  return (
    <nav className='navigation-bar' ref={navigationBar}>
      <Background />
      <div className='wrapper'>
        <div className='navigation-nav-wrapper'>
          <div className='navigation-nav'>
            <a href='#'>Platform</a>
            <a href='#'>AD Trends</a>
            <a href='#'>Services</a>
            <a href='#'>FAQ</a>
          </div>
          <div className='navigation-nav'>
            <button className='navigation-theme' onClick={changeTheme}>
              {theme === 'light' ?
                <img src={sun} />
                : <img src={moon} />}
            </button>
            <a href='#'>Contact</a>
                   <a className='button button-tertiary' href='#'>
                Book A Demo
            </a>
            {/* <Link className='button button-tertiary' to='/book-demo'>
                Book A Demo
            </Link> */}
            <a href='#' className='button button-yellow'>Sign In</a>
          </div>
        </div>
        <div className='navigation-center'>
          <button className='navigation-mobile' onClick={toggleNav}>
            <div></div>
            <div></div>
            <div></div>
          </button>
          <img src={adcLogo} className='navigation-bar-logo' alt='Adcropper Logo' draggable='false' />
          <button className='navigation-theme' onClick={changeTheme}>
            {theme === 'light' ?
              <img src={sun} />
              : <img src={moon} />}
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
