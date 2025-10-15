import React, { useCallback, useRef } from 'react';
import './styles/utils.css';
import './styles/common.css';
import './styles/navigation-bar.css';
import adcLogo from './assets/logo.svg';
import adcLogoWhite from './assets/logo-white.svg';
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import Background from './Background';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar({ theme, setTheme }) {
  const navigationBar = useRef();
  const location = useLocation();

  const toggleNav = useCallback((e) => {
    if (e.target.classList.contains('close')) {
      e.target.classList.remove('close');
      navigationBar.current.classList.remove('active');
    } else {
      e.target.classList.add('close');
      navigationBar.current.classList.add('active');
    }
  });

  const handleNavigate = (e, targetId) => {
    // Aynı sayfadaysa scroll yap
    if (location.pathname === "/") {
      e.preventDefault(); // Linkin default yönlendirmesini iptal et
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Eğer başka sayfadaysa, HashLink yönlendirmeyi yapsın
  };


  return (
    <nav className='navigation-bar' ref={navigationBar}>
      <Background />
      <div className='wrapper'>
        <div className='navigation-nav-wrapper'>
          <div className='navigation-nav'>
            <HashLink smooth to={'/#'} onClick={e => handleNavigate(e, '#')}>
              Platform
            </HashLink>
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
          <div className='navigation-nav'>
            <button className='navigation-theme' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ?
                <img src={sun} />
                : <img src={moon} />}
            </button>
            <HashLink smooth className='button button-tertiary' to='/book-demo'>
              Book A Demo
            </HashLink>
            <Link to='https://platform.adcropper.com/login' target='_blank' className='button button-green'>
              Sign In
            </Link>
          </div>
        </div>
        <div className='navigation-center'>
          <button className='navigation-mobile' onClick={toggleNav}>
            <div></div>
            <div></div>
            <div></div>
          </button>
          <HashLink smooth to='/'>
            <div className='logo-wrapper'>
              <img src={adcLogo} className='navigation-bar-logo' alt='Adcropper Logo' draggable='false' />
              <img src={adcLogoWhite} className='navigation-bar-logo-light' alt='Adcropper Logo' draggable='false' />
            </div>
          </HashLink>
          <button className='navigation-theme' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
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
