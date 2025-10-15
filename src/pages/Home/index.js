import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import Background from '../../Background';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Loader from '../../Loader';


// import freelanceJson from '../../../assets/images/lotties/freelance.json';


export default function Home({isLoading, setIsLoading, theme, setTheme}) {


  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, []);

  

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      let threshold = 0.4;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.classList.add("active");
            }
          });
        },
        { threshold: threshold }
      );

      observer.observe(section);
    });
  }, []);


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
    <main className={`landing-page`}>
      <Background />
      <Navbar theme={theme} setTheme={setTheme} />
      <Section1 theme={theme}/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </main>
  )
}