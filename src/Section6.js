import React, { useCallback, useEffect, useRef, useState } from 'react';
import placeholder from './assets/placeholder.png';

function Section6() {
  const [selectedTab, setSelectedTab] = useState('banners');
  const [childrenTab, setChildrenTab] = useState(0);
  const [content, setContent] = useState({
    'banners': {
      children: [
        {
          name: 'Dynamic Banners',
          body: `Dynamic banner systems are incredibly useful in display, social media, and CRM ads because they allow for personalized and real-time content updates, customized for the individual user’s behavior and preferences. This personalization increases engagement and conversion rates by delivering relevant messages to the right audience at the right time. Moreover, dynamic banner streamline the ad creation process by automating content updates, reducing manual effort, and ensuring consistency across multiple platforms. This adaptability not only enhances user experience but also maximizes the efficiency and effectiveness of advertising campaigns.`,
          activeClass: 'button-green'
        },
        {
          name: 'Social Media',
          body: `
            Adcropper specializes in creating eye-catching social media banners that capture
            attention and boost engagement. Our designs are tailored to fit each platform's unique
            requirements, ensuring optimal display and impact across Facebook, Instagram, X, and
            more. With a keen understanding of branding, we produces visually striking banners that
            communicate your message clearly and professionally. Whether you're launching a new
            product, promoting an event, or enhancing your brand presence, Adcropper’s banner
            designs are crafted to leave a lasting impression.
          `,
          activeClass: 'button-green'
        }
      ],
    },
    'branding': {
      children: [
        {
          name: 'Branding',
          body: `Adcropper excels in creating compelling branding and 3D characters, leveraging a combination of creative expertize and advanced technology. Our team specialises in crafting unique brand identities that capture the essence of your business, ensuring that your brand stands out in a competitive market.`,
          activeClass: 'button-yellow'
        },
        {
          name: 'Website',
          body: `
            lorem ipsum dolor sit amet
          `,
          activeClass: 'button-yellow'
        },
        {
          name: 'Characters',
          body: `
            lorem ipsum dolor sit amet
          `,
          activeClass: 'button-yellow'
        },
      ],
    },
    'landing-page': {
      children: [
        {
          name: 'Landing Page',
          body: `Adcropper excels in creating compelling branding and 3D characters, leveraging a combination of creative expertize and advanced technology. Our team specialises in crafting unique brand identities that capture the essence of your business, ensuring that your brand stands out in a competitive market.`,
          activeClass: 'button-pink'
        },
      ],
    },
    'video': {
      children: [
        {
          name: 'Video Production',
          body: `Adcropper excels in creating compelling branding and 3D characters, leveraging a combination of creative expertize and advanced technology. Our team specialises in crafting unique brand identities that capture the essence of your business, ensuring that your brand stands out in a competitive market.`,
          activeClass: 'button-blue'
        },
      ],
    }
  });
  const tabWrapperRef = useRef();

  const changeTab = useCallback((tab) => {
    setSelectedTab(tab);
    setChildrenTab(0);
    tabWrapperRef.current.classList.remove('active');
    setTimeout(() => {
      tabWrapperRef.current.classList.add('active');
    }, 200);
  })
  return (
    <section className='section6'>
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
              <div className='testimonial-wrapper'>
                <img src={placeholder} draggable='false' />
                <span>Betsson</span>
              </div>
              <div className='testimonial-info'>
                <div className='testimonial-tab'>
                  <h3>{content[selectedTab].children[childrenTab].name}</h3>
                  <p>
                    {content[selectedTab].children[childrenTab].body}
                  </p>
                </div>
                <div className='testimonial-buttons'>
                  {content[selectedTab].children.length > 1 && content[selectedTab].children.map((child, idx) => {
                    return (
                      <button onClick={() => setChildrenTab(idx)} className={'button ' + (childrenTab === idx ? ` ${child.activeClass}` : '')}>
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
