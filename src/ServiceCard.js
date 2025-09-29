import React from 'react'

function ServiceCard({icon, title, body, ctaText, ctaLink}) {
  return (
    <div className='service-card glass-border'>
      <div className='service-card-icon-wrapper'>
        <img src={icon} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <a href={ctaLink}>{ctaText}</a>
    </div>
  )
}

export default ServiceCard
