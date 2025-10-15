import React, { useEffect, useRef, useState } from 'react'
import service from '../../assets/service.png';
import basketballPlayer from '../../assets/basketball-player.png';
import Lottie from 'react-lottie-player';
import desktopJson from '../../assets/1920x1080.json';
import CountUp from 'react-countup';
import { HashLink } from "react-router-hash-link";
function Section1({ theme }) {
  const textShowroom = useRef();
  const lottieRef = useRef();
  const [isThemeUpdated, setIsThemeUpdated] = useState(false);

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
    }, 1250);
  }

  useEffect(() => {
    const applyInvertFilter = () => {
      const svg = document.querySelector('.centered-elements svg');
      if (!svg && !lottieRef.current) return;
      let defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      svg.prepend(defs);
      let invertFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
      invertFilter.setAttribute('id', 'invertFilter');
      invertFilter.innerHTML = `
      <feColorMatrix type="matrix"
        values="-1 0 0 0 1
                 0 -1 0 0 1
                 0 0 -1 0 1
                 0 0 0 1 0" />
    `;
      defs.appendChild(invertFilter);
      // First Scene
      const firstSceneCursor = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-child(1) g:nth-child(53) g g image');
      const firstSceneLogoBottom = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(1) g:nth-of-type(4) g g g path');
      const firstSceneLogoBottomLeft = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(1) g:nth-of-type(4) g g g:nth-child(5) path');
      const firstSceneLogoTop = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(1) g:nth-of-type(4) g g g:nth-child(4) path');
      const firstSceneLogoTopLeft = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(1) g:nth-of-type(4) g g g:nth-child(3) path');
      const firstSceneLogoTopRight = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(1) g:nth-of-type(4) g g g:nth-child(2) path');
      // Second Scene
      const secondSceneCursor = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(2) g:nth-child(53) g g image');
      const secondSceneLogoBottom = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(2) g:nth-of-type(4) g g g path');
      const secondSceneLogoBottomLeft = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(2) g:nth-of-type(4) g g g:nth-child(5) path');
      const secondSceneLogoTop = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(2) g:nth-of-type(4) g g g:nth-child(4) path');
      const secondSceneLogoTopLeft = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(2) g:nth-of-type(4) g g g:nth-child(3) path');
      const secondSceneLogoTopRight = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(2) g:nth-of-type(4) g g g:nth-child(2) path');
      // Third Scene
      const thirdSceneCursor = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-child(3) g:nth-child(53) g g image');
      const thirdSceneLogoBottom = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(4) g g g path');
      const thirdSceneLogoBottomLeft = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(4) g g g:nth-child(5) path');
      const thirdSceneLogoTop = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(4) g g g:nth-child(4) path');
      const thirdSceneLogoTopLeft = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(4) g g g:nth-child(3) path');
      const thirdSceneLogoTopRight = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(4) g g g:nth-child(2) path');
      const enLetterE = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(37) > g:nth-child(3) > g:nth-child(1) g g path');
      const enLetterN = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(37) > g:nth-child(3) > g:nth-child(2) g g path');
      const deLetterD = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(36) > g:nth-child(3) > g:nth-child(1) g g path');
      const deLetterE = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(36) > g:nth-child(3) > g:nth-child(2) g g path');
      const frLetterF = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(35) > g:nth-child(3) > g:nth-child(1) g g path');
      const frLetterR = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(35) > g:nth-child(3) > g:nth-child(2) g g path');
      const seLetterS = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(34) > g:nth-child(3) > g:nth-child(1) g g path');
      const seLetterE = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(34) > g:nth-child(3) > g:nth-child(2) g g path');
      const jpLetterJ = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(33) > g:nth-child(3) > g:nth-child(1) g g path');
      const jpLetterP = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(33) > g:nth-child(3) > g:nth-child(2) g g path');
      const impressionCard = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(40) > g:nth-child(1) image');
      const clickCard = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(39) > g:nth-child(1) image');
      const ctrCard = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(38) > g:nth-child(1) image');
      // Fourth Scene
      const mailing = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(27) > g:nth-child(5) path');
      const mailing2 = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(27) > g:nth-child(6) path');
      const socialMedia = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(27) > g:nth-child(8) path');
      const socialMedia2 = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(27) > g:nth-child(9) path');
      const website = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(27) > g:nth-child(2) path');
      const website2 = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(27) > g:nth-child(3) path');
      const impression = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(41) > g:nth-child(5) g image');
      const impressionCounters = Array.from(svg.parentElement.querySelectorAll('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(41) > g:nth-child(7) g:nth-child(1) g'));
      // Fifth Scene
      const fifthSceneLogoBottom = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(41) g:nth-child(6) g g path');
      const fifthSceneLogoBottomLeft = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(41) g:nth-child(6) g g:nth-child(5) path');
      const fifthSceneLogoTop = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(41) g:nth-child(6) g g:nth-child(4) path');
      const fifthSceneLogoTopLeft = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(41) g:nth-child(6) g g:nth-child(3) path');
      const fifthSceneLogoTopRight = svg.parentElement.querySelector('svg > g:nth-of-type(1) g:nth-of-type(3) g:nth-of-type(41) g:nth-child(6) g g:nth-child(2) path');
      if (theme === 'dark') {
        // First Scene
        firstSceneCursor?.setAttribute('style', 'filter: url(#invertFilter); -webkit-filter: url(#invertFilter);');
        firstSceneLogoBottom?.setAttribute('style', 'fill: #FFF');
        firstSceneLogoBottomLeft?.setAttribute('style', 'fill: #FFF');
        firstSceneLogoTop?.setAttribute('style', 'fill: #FFF');
        firstSceneLogoTopLeft?.setAttribute('style', 'fill: #FFF');
        firstSceneLogoTopRight?.setAttribute('style', 'fill: #FFF');
        // Second Scene
        secondSceneCursor?.setAttribute('style', 'filter: url(#invertFilter); -webkit-filter: url(#invertFilter);');
        secondSceneLogoBottom?.setAttribute('style', 'fill: #FFF');
        secondSceneLogoBottomLeft?.setAttribute('style', 'fill: #FFF');
        secondSceneLogoTop?.setAttribute('style', 'fill: #FFF');
        secondSceneLogoTopLeft?.setAttribute('style', 'fill: #FFF');
        secondSceneLogoTopRight?.setAttribute('style', 'fill: #FFF');
        // Third Scene
        thirdSceneCursor?.setAttribute('style', 'filter: url(#invertFilter); -webkit-filter: url(#invertFilter);');
        thirdSceneLogoBottom?.setAttribute('style', 'fill: #FFF');
        thirdSceneLogoBottomLeft?.setAttribute('style', 'fill: #FFF');
        thirdSceneLogoTop?.setAttribute('style', 'fill: #FFF');
        thirdSceneLogoTopLeft?.setAttribute('style', 'fill: #FFF');
        thirdSceneLogoTopRight?.setAttribute('style', 'fill: #FFF');
        enLetterE?.setAttribute('style', 'fill: #FFF');
        enLetterN?.setAttribute('style', 'fill: #FFF');
        deLetterD?.setAttribute('style', 'fill: #FFF');
        deLetterE?.setAttribute('style', 'fill: #FFF');
        frLetterF?.setAttribute('style', 'fill: #FFF');
        frLetterR?.setAttribute('style', 'fill: #FFF');
        seLetterS?.setAttribute('style', 'fill: #FFF');
        seLetterE?.setAttribute('style', 'fill: #FFF');
        jpLetterJ?.setAttribute('style', 'fill: #FFF');
        jpLetterP?.setAttribute('style', 'fill: #FFF');
        impressionCard?.setAttribute('style', 'filter: contrast(0.3) brightness(1.5) saturate(2);');
        clickCard?.setAttribute('style', 'filter: contrast(0.3) brightness(1.5) saturate(2);');
        ctrCard?.setAttribute('style', 'filter: contrast(0.3) brightness(1.5) saturate(2);');
        // Fourth Scene
        mailing?.setAttribute('style', 'fill: rgb(var(--bg-yellow-rgb)); fill-opacity: 1;');
        mailing2?.setAttribute('style', 'fill: rgb(var(--bg-yellow-rgb)) fill-opacity: 1;');
        socialMedia?.setAttribute('style', 'fill: rgb(var(--bg-pink-rgb)); fill-opacity: 1;');
        socialMedia2?.setAttribute('style', 'fill: rgb(var(--bg-pink-rgb)) fill-opacity: 1;');
        website?.setAttribute('style', 'fill: rgb(var(--bg-green-rgb)); fill-opacity: 1;');
        website2?.setAttribute('style', 'fill: rgb(var(--bg-green-rgb)) fill-opacity: 1;');
        impression?.setAttribute('style', 'filter: url(#invertFilter); -webkit-filter: url(#invertFilter);');
        (impressionCounters || []).forEach(el => {
          const image = el.querySelector('image');
          image?.setAttribute('style', 'filter: url(#invertFilter); -webkit-filter: url(#invertFilter);')
        });
        // Fifth Scene
        fifthSceneLogoBottom?.setAttribute('style', 'fill: #FFF');
        fifthSceneLogoBottomLeft?.setAttribute('style', 'fill: #FFF');
        fifthSceneLogoTop?.setAttribute('style', 'fill: #FFF');
        fifthSceneLogoTopLeft?.setAttribute('style', 'fill: #FFF');
        fifthSceneLogoTopRight?.setAttribute('style', 'fill: #FFF');
      } else if (theme === 'light') {
        // First Scene
        firstSceneCursor?.setAttribute('style', '');
        firstSceneLogoBottom?.setAttribute('style', 'fill: rgb(30,30,30)');
        firstSceneLogoBottomLeft?.setAttribute('style', 'fill: rgb(30,30,30)');
        firstSceneLogoTop?.setAttribute('style', 'fill: rgb(30,30,30)');
        firstSceneLogoTopLeft?.setAttribute('style', 'fill: rgb(30,30,30)');
        firstSceneLogoTopRight?.setAttribute('style', 'fill: rgb(30,30,30)');
        // Second Scene
        secondSceneCursor?.setAttribute('style', '');
        secondSceneLogoBottom?.setAttribute('style', 'fill: rgb(30,30,30)');
        secondSceneLogoBottomLeft?.setAttribute('style', 'fill: rgb(30,30,30)');
        secondSceneLogoTop?.setAttribute('style', 'fill: rgb(30,30,30)');
        secondSceneLogoTopLeft?.setAttribute('style', 'fill: rgb(30,30,30)');
        secondSceneLogoTopRight?.setAttribute('style', 'fill: rgb(30,30,30)');
        // Third Scene
        thirdSceneCursor?.setAttribute('style', '');
        thirdSceneLogoBottom?.setAttribute('style', 'fill: rgb(30,30,30)');
        thirdSceneLogoBottomLeft?.setAttribute('style', 'fill: rgb(30,30,30)');
        thirdSceneLogoTop?.setAttribute('style', 'fill: rgb(30,30,30)');
        thirdSceneLogoTopLeft?.setAttribute('style', 'fill: rgb(30,30,30)');
        thirdSceneLogoTopRight?.setAttribute('style', 'fill: rgb(30,30,30)');
        enLetterE?.setAttribute('style', 'fill: rgb(30,30,30)');
        enLetterN?.setAttribute('style', 'fill: rgb(30,30,30)');
        deLetterD?.setAttribute('style', 'fill: rgb(30,30,30)');
        deLetterE?.setAttribute('style', 'fill: rgb(30,30,30)');
        frLetterF?.setAttribute('style', 'fill: rgb(30,30,30)');
        frLetterR?.setAttribute('style', 'fill: rgb(30,30,30)');
        seLetterS?.setAttribute('style', 'fill: rgb(30,30,30)');
        seLetterE?.setAttribute('style', 'fill: rgb(30,30,30)');
        jpLetterJ?.setAttribute('style', 'fill: rgb(30,30,30)');
        jpLetterP?.setAttribute('style', 'fill: rgb(30,30,30)');
        impressionCard?.setAttribute('style', '');
        clickCard?.setAttribute('style', '');
        ctrCard?.setAttribute('style', '');
        // Fourth Scene
        mailing?.setAttribute('style', '');
        mailing2?.setAttribute('style', '');
        socialMedia?.setAttribute('style', '');
        socialMedia2?.setAttribute('style', '');
        website?.setAttribute('style', '');
        website2?.setAttribute('style', '');
        impression?.setAttribute('style', '');
        (impressionCounters || []).forEach(el => {
          const image = el.querySelector('image');
          image?.setAttribute('style', '');
        });
        // Fifth Scene
        fifthSceneLogoBottom?.setAttribute('style', 'fill: rgb(30,30,30)');
        fifthSceneLogoBottomLeft?.setAttribute('style', 'fill: rgb(30,30,30)');
        fifthSceneLogoTop?.setAttribute('style', 'fill: rgb(30,30,30)');
        fifthSceneLogoTopLeft?.setAttribute('style', 'fill: rgb(30,30,30)');
        fifthSceneLogoTopRight?.setAttribute('style', 'fill: rgb(30,30,30)');
      }
      setIsThemeUpdated(false);
    }
    applyInvertFilter();
  }, [lottieRef.current, theme]);

  useEffect(() => {
    const anim = lottieRef.current?.renderer?.animationItem;
    if (!anim) return;

    const onEnterFrame = (e) => {
      const svg = document.querySelector('.centered-elements svg');
      if (svg && !isThemeUpdated) {
        const enLetterE = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(37) > g:nth-child(3) > g:nth-child(1) g g path');
        const enLetterN = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(37) > g:nth-child(3) > g:nth-child(2) g g path');
        const deLetterD = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(36) > g:nth-child(3) > g:nth-child(1) g g path');
        const deLetterE = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(36) > g:nth-child(3) > g:nth-child(2) g g path');
        const frLetterF = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(35) > g:nth-child(3) > g:nth-child(1) g g path');
        const frLetterR = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(35) > g:nth-child(3) > g:nth-child(2) g g path');
        const seLetterS = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(34) > g:nth-child(3) > g:nth-child(1) g g path');
        const seLetterE = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(34) > g:nth-child(3) > g:nth-child(2) g g path');
        const jpLetterJ = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(33) > g:nth-child(3) > g:nth-child(1) g g path');
        const jpLetterP = svg.parentElement.querySelector('svg > g:nth-of-type(1) > g:nth-child(3) > g:nth-child(33) > g:nth-child(3) > g:nth-child(2) g g path');
        if (enLetterE && enLetterN && deLetterD && deLetterE && frLetterF && frLetterR && seLetterS && seLetterE && jpLetterJ && jpLetterP) {
          setIsThemeUpdated(true);
          if (theme === 'dark') {
            enLetterE?.setAttribute('style', 'fill: #FFF');
            enLetterN?.setAttribute('style', 'fill: #FFF');
            deLetterD?.setAttribute('style', 'fill: #FFF');
            deLetterE?.setAttribute('style', 'fill: #FFF');
            frLetterF?.setAttribute('style', 'fill: #FFF');
            frLetterR?.setAttribute('style', 'fill: #FFF');
            seLetterS?.setAttribute('style', 'fill: #FFF');
            seLetterE?.setAttribute('style', 'fill: #FFF');
            jpLetterJ?.setAttribute('style', 'fill: #FFF');
            jpLetterP?.setAttribute('style', 'fill: #FFF');
          } else {
            enLetterE?.setAttribute('style', 'fill: rgb(30,30,30)');
            enLetterN?.setAttribute('style', 'fill: rgb(30,30,30)');
            deLetterD?.setAttribute('style', 'fill: rgb(30,30,30)');
            deLetterE?.setAttribute('style', 'fill: rgb(30,30,30)');
            frLetterF?.setAttribute('style', 'fill: rgb(30,30,30)');
            frLetterR?.setAttribute('style', 'fill: rgb(30,30,30)');
            seLetterS?.setAttribute('style', 'fill: rgb(30,30,30)');
            seLetterE?.setAttribute('style', 'fill: rgb(30,30,30)');
            jpLetterJ?.setAttribute('style', 'fill: rgb(30,30,30)');
            jpLetterP?.setAttribute('style', 'fill: rgb(30,30,30)');
          }
        }
      }
    };

    anim.addEventListener('enterFrame', onEnterFrame);

    return () => anim.removeEventListener('enterFrame', onEnterFrame);
  }, [lottieRef.current, theme]);
  return (
    <section className='section1'>
      <div className='wrapper'>
        <div className='text-showroom' ref={textShowroom}>
          <h1 className='platform active'>PLATFORM</h1>
          <h1 className='platform'>DESIGN</h1>
          <h1 className='platform'>PRODUCTION</h1>
          <h1 className='platform'>BANNER</h1>
          <h1 className='platform'>ADCROPPER</h1>
          <h2>Orchestrate your
            ad campaigns</h2>
        </div>
        {/* <img className='service' src={service} draggable='false' /> */}

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
              <div className='stat-title'>Impressions</div>
              <div className='stat-body'>
                <CountUp
                  start={0}
                  prefix={''}
                  suffix={''}
                  separator={','}
                  end={1543344}
                  decimals={0}
                  duration={4}
                />
                +
              </div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Banners Produced</div>
              <div className='stat-body'>
                <CountUp
                  start={0}
                  prefix={''}
                  suffix={''}
                  separator={','}
                  end={64543}
                  decimals={0}
                  duration={4}
                />
              </div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Brands</div>
              <div className='stat-body'>
                <CountUp
                  start={0}
                  prefix={''}
                  suffix={''}
                  separator={','}
                  end={248}
                  decimals={0}
                  duration={4}
                />
              </div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Markets</div>
              <div className='stat-body'>
                <CountUp
                  start={0}
                  prefix={''}
                  suffix={''}
                  separator={','}
                  end={70}
                  decimals={0}
                  duration={4}
                />
              </div>
            </div>
          </div>
          <HashLink smooth to='/book-demo' className='button button-block button-green'>
            Book A <br /> Demo
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_21_1140" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                <rect x="0.761719" y="0.69751" width="24" height="24" fill="#1E1E1E" />
              </mask>
              <g mask="url(#mask0_21_1140)">
                <path d="M14.7617 18.6975L13.3617 17.2475L16.9117 13.6975H4.76172V11.6975H16.9117L13.3617 8.14751L14.7617 6.69751L20.7617 12.6975L14.7617 18.6975Z" fill="#1E1E1E" />
              </g>
            </svg>

          </HashLink>
        </div>
      </div>
    </section>
  )
}

export default Section1
