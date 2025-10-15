import React, { useCallback, useEffect, useRef, useState } from 'react';
import placeholder from '../../assets/placeholder.png';
import dynamicBanners from '../../assets/1920x1080.jpg';
import socialMedia from '../../assets/1920x1080_social.jpg';
import LP from '../../assets/LP.jpg';
import branding from '../../assets/branding.jpg';
import video from '../../assets/video.mp4';


const mediaFiles = [placeholder, dynamicBanners, socialMedia, LP, branding, video];

const mediaCache = {};

export async function preloadMedia(mediaImports) {
  const promises = mediaImports.map(src => {
    if (mediaCache[src]) return Promise.resolve();
    return fetch(src)
      .then(res => res.blob())
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        mediaCache[src] = objectURL;
      });
  });
  await Promise.all(promises);
}

export function getCachedMedia(src) {
  return mediaCache[src] || src;
}

function Section6() {
  const [selectedTab, setSelectedTab] = useState('banners');
  const [childrenTab, setChildrenTab] = useState(0);
  const [content, setContent] = useState({
    'banners': {
      children: [
        {
          name: 'Dynamic Banners',
          body: `Dynamic banner systems are incredibly useful in display, social media, and CRM ads because they allow for personalized and real-time content updates, customized for the individual user’s behavior and preferences. This personalization increases engagement and conversion rates by delivering relevant messages to the right audience at the right time. Moreover, dynamic banner streamline the ad creation process by automating content updates, reducing manual effort, and ensuring consistency across multiple platforms. This adaptability not only enhances user experience but also maximizes the efficiency and effectiveness of advertising campaigns.`,
          activeClass: 'button-green',
          placeholder: dynamicBanners,
          placeholderName: 'Swiper',
          placeholderType: 'image',
        },
        {
          name: 'Social Media',
          body: `
           Adcropper specializes in creating eye-catching social media banners that capture attention and boost engagement. Our designs are tailored to fit each platform's unique requirements, ensuring optimal display and impact across Facebook, Instagram, X, and more. With a keen understanding of branding, we produces visually striking banners that communicate your message clearly and professionally. Whether you're launching a new product, promoting an event, or enhancing your brand presence, Adcropper's banner designs are crafted to leave a lasting impression.
          `,
          activeClass: 'button-green',
          placeholder: socialMedia,
          placeholderName: 'Betinia',
          placeholderType: 'image',
        }
      ],
    },
    'branding': {
      children: [
        {
          name: 'Branding',
          body: `
            Adcropper creates compelling branding and 3D character solutions, leveraging a combination of creative expertize and advanced technology. Our team specialises in crafting unique brand identities that capture the essence of your business, ensuring that your brand stands out in a competitive market. We also bring ideas to life with precision and creativity, designing characters that not only resonate with your audience but also add depth and personality to your brand. Whether for marketing campaigns, digital experiences or interactive content, Adcropper’s talents ensure that your brand and characters are both memorable and impactful.
          `,
          activeClass: 'button-yellow',
          placeholder: branding,
          placeholderName: 'Daruma',
          placeholderType: 'image',
        },
      ],
    },
    'landing-page': {
      children: [
        {
          name: 'Landing Page (Design & Coding)',
          body: `
            Creating landing pages together with banners, Adcropper ensures a seamless and cohesive user journey, where the message and design of the ad flow naturally into the landing page. This alignment creates a natural flow, where the design and messaging of the ad are reflected consistently on the landing page. Such consistency reinforces the ad’s call to action and helps maintain user interest. The result is a more intuitive experience that meets user expectations and delivers relevant content. This approach significantly boosts the chances of conversion by providing a unified, engaging experience throughout the entire process.
          `,
          activeClass: 'button-pink',
          placeholder: LP,
          placeholderName: 'Pubs',
          placeholderType: 'image',
        },
      ],
    },
    'video': {
      children: [
        {
          name: 'Video Production',
          body: `
            Video banners incorporate video content into ad units, offering a compelling way to capture audience's attention with motion and storytelling. These banners enhance user engagement by delivering impactful messages in a format that is visually appealing and more likely to resonate with viewers than static ads. Adcropper also creates custom videos designed to drive attention, whether for social media, websites, or digital campaigns, combining creativity with impactful design to boost conversions and brand awareness.
          `,
          activeClass: 'button-blue',
          placeholder: video,
          placeholderName: 'Betsson',
          placeholderType: 'video',
        },
      ],
    }
  });
  const tabWrapperRef = useRef();
  const testimonialTabRef = useRef();
  const testimonialWrapperRef = useRef();
  const changeTab = useCallback((tab) => {
    setSelectedTab(tab);
    setChildrenTab(0);
    tabWrapperRef.current.classList.remove('active');
    testimonialWrapperRef.current.classList.remove('active');
    testimonialTabRef.current.classList.remove('active');
    setTimeout(() => {
      tabWrapperRef.current.classList.add('active');
      testimonialWrapperRef.current.classList.add('active');
      testimonialTabRef.current.classList.add('active');
    }, 200);
  });

  const changeChildrenTab = useCallback((idx) => {
    testimonialTabRef.current.classList.remove('active');
    testimonialWrapperRef.current.classList.remove('active');
    setTimeout(() => {
      setChildrenTab(idx);
      setTimeout(() => {
        testimonialTabRef.current.classList.add('active');
        testimonialWrapperRef.current.classList.add('active');
      }, 100);
    }, 100);
  });

  useEffect(() => {
    preloadMedia(mediaFiles);
  }, []);
  return (
    <section className='section6' id='services'>
      <div className='wrapper'>
        <div className='title-wrapper'>
          <h2>Services</h2>
          <div className='tab-button-wrapper'>
            <button onClick={() => changeTab('banners')} className={'button' + (selectedTab === 'banners' ? ' button-green' : '')}>
              Banners
            </button>
            <button onClick={() => changeTab('branding')} className={'button' + (selectedTab === 'branding' ? ' button-yellow' : '')}>
              Branding
            </button>
            <br />
            <button onClick={() => changeTab('landing-page')} className={'button' + (selectedTab === 'landing-page' ? ' button-pink' : '')}>
              Landing Page
            </button>
            <button onClick={() => changeTab('video')} className={'button' + (selectedTab === 'video' ? ' button-blue' : '')}>
              Video
            </button>
          </div>
        </div>
        <div className='tabs'>
          {content[selectedTab] ?
            <div className={`tab-wrapper active`} ref={tabWrapperRef}>
              <div className='testimonial-wrapper active' ref={testimonialWrapperRef}>
                <div className='mask'>
                  {content[selectedTab].children[childrenTab].placeholderType === 'image' ?
                    <img src={getCachedMedia(content[selectedTab].children[childrenTab].placeholder)} draggable='false' />
                    :
                    <video src={getCachedMedia(content[selectedTab].children[childrenTab].placeholder)} width="100%" autoPlay loop muted playsInline />
                  }
                </div>
                <span>{content[selectedTab].children[childrenTab].placeholderName}</span>
              </div>
              <div className='testimonial-info'>
                <div className='testimonial-tab active' ref={testimonialTabRef}>
                  <h3>{content[selectedTab].children[childrenTab].name}</h3>
                  <p>
                    {content[selectedTab].children[childrenTab].body}
                  </p>
                </div>
                <div className='testimonial-buttons'>
                  {content[selectedTab].children.length > 1 && content[selectedTab].children.map((child, idx) => {
                    return (
                      <button onClick={() => changeChildrenTab(idx)} className={'button ' + (childrenTab === idx ? ` ${child.activeClass}` : '')}>
                        {child.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
            : null}
        </div>
      </div>
    </section>
  )
}

export default Section6
