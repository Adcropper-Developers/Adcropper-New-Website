import React, { useRef } from 'react'

function ServiceCard({ icon, title, frontText, backText, ctaText, ctaLink }) {
  return (
    <div className='service-card'>
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
