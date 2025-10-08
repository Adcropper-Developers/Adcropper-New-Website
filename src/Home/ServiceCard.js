import React, { useRef } from 'react'

function ServiceCard({ icon, title, frontText, backText, ctaText, ctaLink }) {
  const cardRef = useRef();
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (cardRef.current.classList.contains('active')) {
      cardRef.current.classList.remove('active');
    } else {
      const servicesCards = Array.from(document.querySelectorAll('.service-card'));
      servicesCards.forEach(el => {
        el.classList.remove('active');
      })
      cardRef.current.classList.add('active');
    }
  }
  return (
    <div className='service-card' onClick={handleClick} ref={cardRef}>
      <div className='service-card-wrapper'>
        <div className='service-card-front glass-border'>
          <div className='service-card-icon-wrapper'>
            <img src={icon} />
          </div>
          <h3>{title}</h3>
          <p>{frontText}</p>
        </div>
        <div className='service-card-back glass-border'>
          {backText}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
