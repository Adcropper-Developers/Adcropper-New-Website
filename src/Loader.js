import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie-player';
import loaderJson from './assets/loader.json';
function Loader({ isLoading }) {
  const lottieRef = useRef();
  const [isLottieLoaded, setLottieIsLoaded] = useState(false);

  return (
    <div className={'loader-wrapper' + (isLoading ? ' ' : 'hide') + (isLottieLoaded ? ' lottie-loaded' : '')}>
      {isLoading ?
        <Lottie
          play={isLoading ? true : false}
          loop={isLoading ? true : false}
          ref={lottieRef}
          onLoad={() => setLottieIsLoaded(true)}
          animationData={loaderJson}
        />
        : null}
    </div>
  )
}

export default Loader
