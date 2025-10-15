import React, { useEffect, useRef, useState } from 'react';
import adform from '../../assets/adform.png';
import google from '../../assets/google.png';
import amazon from '../../assets/amazon.png';
import openX from '../../assets/openX.png';
import meta from '../../assets/meta.png';
import tiktok from '../../assets/tiktok.png';
import snapchat from '../../assets/snapchat.png';
import optimove from '../../assets/optimove.png'
import brevo from '../../assets/Brevo-Logo.png'
import original from '../../assets/original.png'
import emarsys from '../../assets/emarsys.png'
import crm from '../../assets/crm.svg';
import sportgames from '../../assets/sportgames.svg';
import bestwin from '../../assets/best_win.svg';
import bestwinLong from '../../assets/best_win_long.svg';
import bestwinCentered from '../../assets/best_win_centered.svg';
import basketball from '../../assets/basketball.png';
import football from '../../assets/football.png';
import playnow from '../../assets/playnow.svg';
import playnow2 from '../../assets/playnow2.svg';
import discountRing from '../../assets/discount_ring.svg';
import discountInner from '../../assets/discount_inner.svg';
import discountInner2 from '../../assets/discount_inner2.svg';

function Section2() {
  const tabs = useRef([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);

  const addToTabs = (el) => {
    if (el && !tabs.current.includes(el)) {
      tabs.current.push(el);
    }
  }

  useEffect(() => {
    if (Array.isArray(tabs.current) && tabs.current.length > 0) {
      calcTabWidth();
      window.addEventListener('resize', calcTabWidth);
      return () => window.removeEventListener('resize', calcTabWidth);
    }
  }, [tabs]);

  function calcTabWidth() {
    tabs.current.forEach(el => {
      el.style.width = el.parentElement.parentElement.offsetWidth + 'px';
      setTabWidth(el.parentElement.parentElement.offsetWidth);
    });
  }
  return (
    <section className='section2' id='ad-trends'>
      <div className='wrapper'>
        <div className='title-wrapper'>
          <h2>Transform ideas into high-performing <br /> campaigns, <br /> including but not limited to:</h2>
          <div className='tab-button-wrapper'>
            <button onClick={() => setSelectedTab(0)} className={'button' + (selectedTab === 0 ? ' button-green' : '')}>
              Display
            </button>
            <button onClick={() => setSelectedTab(1)} className={'button' + (selectedTab === 1 ? ' button-yellow' : '')}>
              Social Media
            </button>
            <br />
            <button onClick={() => setSelectedTab(2)} className={'button' + (selectedTab === 2 ? ' button-pink' : '')}>
              CRM
            </button>
          </div>
        </div>
        <div className='tabs'>
          <div className='tab-wrapper' style={{ transform: `translateX(calc(-${tabWidth * selectedTab}px))` }}>
            <div className='tab display-tab' ref={addToTabs}>
              <div className='banners'>
                <div className='banner1 glass-border'>
                  <img src={sportgames} className='sportgames' />
                  <img src={bestwin} className='bestwin' />
                  <img src={basketball} className='basketball' />
                  <span className='discount'>
                    <img src={discountRing} className='discountRing' />
                    <img src={discountInner} className='discountInner' />
                  </span>
                  <img src={playnow} className='playnow' />
                </div>
                <div className='banner2 glass-border'>
                  <img src={sportgames} className='sportgames' />
                  <img src={bestwin} className='bestwin' />
                  <img src={basketball} className='basketball' />
                  <span className='discount'>
                    <img src={discountRing} className='discountRing' />
                    <img src={discountInner} className='discountInner' />
                  </span>
                  <img src={playnow} className='playnow' />
                </div>
                <div className='banner3 glass-border'>
                  <img src={sportgames} className='sportgames' />
                  <img src={bestwinLong} className='bestwin' />
                  <img src={basketball} className='basketball' />
                  <span className='discount'>
                    <img src={discountRing} className='discountRing' />
                    <img src={discountInner} className='discountInner' />
                  </span>
                  <img src={playnow} className='playnow' />
                </div>
                <div className='banner4 glass-border'>
                  <img src={sportgames} className='sportgames' />
                  <img src={bestwinLong} className='bestwin' />
                  <img src={basketball} className='basketball' />
                  <span className='discount'>
                    <img src={discountRing} className='discountRing' />
                    <img src={discountInner} className='discountInner' />
                  </span>
                  <img src={playnow} className='playnow' />
                </div>
              </div>
              <div className='brands glass-border'>
                <img src={adform} />
                <img src={google} />
                <img src={amazon} />
                <img src={openX} />
              </div>
            </div>
            <div className='tab social-tab' ref={addToTabs}>
              <div className='banners'>
                <div className='banner1 glass-border'>
                  <img src={sportgames} className='sportgames' />
                  <img src={bestwinLong} className='bestwin' />
                  <img src={football} className='basketball' />
                  <span className='discount'>
                    <img src={discountRing} className='discountRing' />
                    <img src={discountInner2} className='discountInner' />
                  </span>
                  <img src={playnow2} className='playnow' />
                </div>
                <div className='banner2 glass-border'>
                  <img src={sportgames} className='sportgames' />
                  <img src={bestwin} className='bestwin' />
                  <img src={football} className='basketball' />
                  <span className='discount'>
                    <img src={discountRing} className='discountRing' />
                    <img src={discountInner2} className='discountInner' />
                  </span>
                  <img src={playnow2} className='playnow' />
                </div>
                <div className='banner3 glass-border'>
                  <img src={sportgames} className='sportgames' />
                  <img src={bestwinCentered} className='bestwin' />
                  <img src={football} className='basketball' />
                  <span className='discount'>
                    <img src={discountRing} className='discountRing' />
                    <img src={discountInner2} className='discountInner' />
                  </span>
                  <img src={playnow2} className='playnow' />
                </div>
                <div className='banner4 glass-border'>
                  <img src={sportgames} className='sportgames' />
                  <img src={bestwinCentered} className='bestwin' />
                  <img src={football} className='basketball' />
                  <span className='discount'>
                    <img src={discountRing} className='discountRing' />
                    <img src={discountInner2} className='discountInner' />
                  </span>
                  <img src={playnow2} className='playnow' />
                </div>
              </div>
              <div className='brands glass-border'>
                <img src={tiktok} className='tiktok' />
                <img src={snapchat} className='snapchat' />
                <img src={meta} className='meta' />
              </div>
            </div>
            <div className={'tab crm-tab' + (selectedTab === 2 ? ' active' : '')} ref={addToTabs}>
              <div className='banners glass-border'>
                <div className='crm-wrapper glass-border'>
                  <div className='banner1'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className='banner2 glass-border'>
                  </div>
                </div>
              </div>
              <div className='brands glass-border'>
                <img src={optimove} className='optimove' />
                <img src={brevo} className='brevo' />
                <img src={original} className='original' />
                <img src={emarsys} className='emarsys' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
