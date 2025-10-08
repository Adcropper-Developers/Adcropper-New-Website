import React from 'react'
import ServiceCard from './ServiceCard';
import analytics from '../assets/analytics.svg';
import publishing from '../assets/publishing.svg';
import automation from '../assets/automation.svg';
import animation from '../assets/animation.svg';
import template from '../assets/template.svg';
function Section3() {
  return (
    <section className='section3'>
      <div className='wrapper'>
        <h2>What is included</h2>
        <div className='cards'>
          <ServiceCard
            icon={analytics}
            title={'Analytics'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet rutrum purus. Curabitur scelerisque arcu finibus'}
            ctaText={'Learn More'}
            ctaLink={'#'}
          />
          <ServiceCard
            icon={publishing}
            title={'Publishing'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet rutrum purus. Curabitur scelerisque arcu finibus'}
            ctaText={'Learn More'}
            ctaLink={'#'}
          />
          <ServiceCard
            icon={automation}
            title={'Automation'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet rutrum purus. Curabitur scelerisque arcu finibus'}
            ctaText={'Learn More'}
            ctaLink={'#'}
          />
          <ServiceCard
            icon={animation}
            title={'Animation'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet rutrum purus. Curabitur scelerisque arcu finibus'}
            ctaText={'Learn More'}
            ctaLink={'#'}
          />
          <ServiceCard
            icon={template}
            title={'Template'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet rutrum purus. Curabitur scelerisque arcu finibus'}
            ctaText={'Learn More'}
            ctaLink={'#'}
          />
        </div>
      </div>
    </section>
  )
}

export default Section3
