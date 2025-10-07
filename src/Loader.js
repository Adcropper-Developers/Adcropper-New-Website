import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie-player';
import loaderJson from './assets/loader.json';
function Loader({ isLoading }) {
  const lottieRef = useRef();

  return (
    <div className={'loader-wrapper' + (isLoading ? ' ' : 'hide')}>
      {isLoading ?
        <Lottie
          play={isLoading ? true : false}
          loop={isLoading ? true : false}
          ref={lottieRef}
          animationData={loaderJson}
        />
        : null}

    </div>
  )
}

export default Loader
