import React, { useEffect } from 'react'
import Background from './Background'
import Navbar from './Navbar'
import Footer from './Footer'

function BookDemo({ isLoading, setIsLoading, theme, changeTheme }) {

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      // Sayfa zaten yüklendiyse direkt çalıştır
      handleLoad();
    } else {
      // Henüz yüklenmediyse window.load'u dinle
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <main className='book-demo'>
      <Background />
      <Navbar></Navbar>
      <Footer></Footer>
    </main>
  )
}

export default BookDemo
