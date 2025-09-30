import React, { useState } from 'react';
import adform from './assets/adform.png';
import google from './assets/google.png';
import amazon from './assets/amazon.png';
import openX from './assets/openX.png';

function Section2() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className='section2'>
      <div className='wrapper'>
        <div className='title-wrapper'>
          <h2>What you can</h2>
          <div className='tab-button-wrapper'>
            <button onClick={() => setSelectedTab(0)} className={'button'+(selectedTab === 0 ? ' button-green' : '')}>
              Display
            </button>
            <button onClick={() => setSelectedTab(1)} className={'button'+(selectedTab === 1 ? ' button-yellow' : '')}>
              Social Media
            </button>
            <br />
            <button onClick={() => setSelectedTab(2)} className={'button'+(selectedTab === 2 ? ' button-pink' : '')}>
              CRM
            </button>
            <button onClick={() => setSelectedTab(3)} className={'button'+(selectedTab === 3 ? ' button-blue' : '')}>
              PPC
            </button>
          </div>
        </div>
        <div className='tabs'>
          <div className='display-tab'>
            <div className='banners'>
              <div className='left glass-border'>
               
              </div>
              <div className='top-bot-wrapper'>
                <div className='top'>
                  <div className='banner300x250 glass-border'></div>
                  <div className='banner728x90 glass-border'></div>
                </div>
                <div className='bot glass-border'></div>
              </div>
            </div>
            <div className='brands glass-border'>
              <img src={adform} />
              <img src={google} />
              <img src={amazon} />
              <img src={openX} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
