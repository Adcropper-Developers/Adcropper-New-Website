import React, { useEffect, useRef } from 'react'
import service from './assets/service.png';
import basketballPlayer from './assets/basketball-player.png';
import Lottie from 'react-lottie-player';
import desktopJson from './assets/1920x1080.json';
function Section1() {
  const textShowroom = useRef();
  const lottieRef = useRef();

  useEffect(() => {
    if (textShowroom.current) {
      calcFontSize();
      window.addEventListener('resize', calcFontSize);
      return () => window.removeEventListener('resize', calcFontSize)
    }
  }, [textShowroom.current])

  useEffect(() => {
    showroomInterval();
  }, []);

  function calcFontSize() {
    const containerWidth = textShowroom.current.offsetWidth;
    const maxWidth = containerWidth - 10;
    let targetElement;
    let longestWord = '';

    var div = textShowroom.current.querySelectorAll("h1");
    div.forEach(h1 => {
      const words = h1.textContent.trim().split(/\s+/);
      words.forEach(word => {
        if (word.length > longestWord.length) {
          longestWord = word;
          targetElement = h1;
        }
      });
    });
    let getFontSize = Number(window.getComputedStyle(targetElement, null).getPropertyValue('font-size').replace("px", ""))
    var fontSize = getFontSize;
    if ((targetElement.offsetWidth + 100) > maxWidth) {
      while (targetElement.offsetWidth > maxWidth) {
        fontSize -= 1;
        targetElement.style.fontSize = fontSize + 'px';
      }
    } else {
      while (targetElement.offsetWidth < maxWidth) {
        fontSize += 1;
        targetElement.style.fontSize = fontSize + 'px';
      }
    }
    let i = 0;
    do {
      div[i].style.fontSize = fontSize + 'px';
      i++;
    } while (i < div.length);
  }

  let interval;
  function showroomInterval() {
    clearInterval(interval);
    const h1Elements = document.querySelectorAll('.section1 h1');
    let i = 1;
    interval = setInterval(() => {
      h1Elements.forEach(item => {
        item.classList.remove('active');
      });
      if (h1Elements[i]) {
        h1Elements[i].classList.add('active');
        i++;
      } else {
        h1Elements[0].classList.add('active');
        i = 1;
      }
    }, 2500);
  }
  return (
    <section className='section1'>
      <div className='wrapper'>
        <div className='text-showroom' ref={textShowroom}>
          <h1 className='platform active'>PLATFORM</h1>
          <h1 className='platform'>DESIGN</h1>
          <h1 className='platform'>PRODUCTION</h1>
          <h1 className='platform'>BANNER</h1>
          <h1 className='platform'>ADCROPPER</h1>
        </div>
        {/* <img className='service' src={service} draggable='false' /> */}
        <h2>Orchestrate your <br />
          ad campaigns</h2>
        <div className='centered-elements'>
          <Lottie
            ref={lottieRef}
            play
            loop={true}
            animationData={desktopJson}
          />
          {/* <h3>LOREM <br /> IPSUM</h3>
          <a className='button button-green glassy-border' href='/'>
            Get Started
          </a>
          <img className='basketball-player' src={basketballPlayer} draggable='false' /> */}

        </div>
        <div className='bottom-part'>
          <div className='stat-wrapper'>
            <div className='stat'>
              <div className='stat-title'>Banner Gösterim Sayısı</div>
              <div className='stat-body'>
                1.543.344+
              </div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Yapılan Banner Sayısı</div>
              <div className='stat-body'>
                64543
              </div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Marka</div>
              <div className='stat-body'>
                248
              </div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Market Sayısı</div>
              <div className='stat-body'>
                70
              </div>
            </div>
          </div>
          <a href='/' className='button button-block button-yellow'>
            Book A <br /> Demo
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_21_1140" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                <rect x="0.761719" y="0.69751" width="24" height="24" fill="#1E1E1E" />
              </mask>
              <g mask="url(#mask0_21_1140)">
                <path d="M14.7617 18.6975L13.3617 17.2475L16.9117 13.6975H4.76172V11.6975H16.9117L13.3617 8.14751L14.7617 6.69751L20.7617 12.6975L14.7617 18.6975Z" fill="#1E1E1E" />
              </g>
            </svg>

          </a>
        </div>
      </div>
    </section>
  )
}

export default Section1
