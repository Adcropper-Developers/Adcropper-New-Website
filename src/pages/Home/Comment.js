import React from 'react'

function Comment({name, title, text, image}) {
  return (
    <div className='comment-card glass-border'>
      <div className='comment-info'>
        <p>{text}</p>
        <h4>{name} <span>\ {title}</span></h4>
      </div>
      <div className='comment-image' style={{backgroundImage: `url(${image})`}}></div>
    </div>
  )
}

export default Comment
