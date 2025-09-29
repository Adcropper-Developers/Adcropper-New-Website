import React, { useEffect, useRef } from 'react'

function Background() {
  const backgroundRef = useRef();
  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.classList.add('active');
    }
  }, [backgroundRef.current]);
  return (
    <div className='background' ref={backgroundRef}>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column'></div>
    </div>
  )
}

export default Background
