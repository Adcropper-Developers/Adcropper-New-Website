import React from 'react'
import chevronLeft from '../assets/chevron_left.svg';
import kambi from '../assets/kambi.png';
import sbTech from '../assets/sb_tech.png';
import footballApi from '../assets/football_api.png';
import arland from '../assets/arland.png';
import adform from '../assets/adform.png';
import altenar from '../assets/altenar.png';
import adRecord from '../assets/adrecord.png';

function Section4() {
  return (
    <section className='section4'>
      <div className='wrapper'>
        <h2>Clients</h2>
        <div className='buttons'>
          <button className='prev glass-border'>
            <img src={chevronLeft} />
          </button>
          <button className='next glass-border'>
            <img src={chevronLeft} />
          </button>
        </div>
        <div className='clients'> 
          <img src={kambi} />
          <img src={sbTech} />
          <img src={footballApi} />
          <img src={arland} />
          <img src={adform} />
          <img src={altenar} />
          <img src={adRecord} />
        </div>
      </div>
    </section>
  )
}

export default Section4
