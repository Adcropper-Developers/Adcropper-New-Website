import React from 'react'
import Comment from './Comment';
import charlotte from '../assets/charlotte_veyron.png';
import goran from '../assets/goran_lakic.png';

function Section5() {
  return (
    <section className='section5'>
      <div className='wrapper'>
        <div className='left-part'>
          <div className='left-part-header'>
            <h2>
              Trusted by Innovators. <br />
              Proven by Results.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque tincidunt ante accumsan fringilla. Cras egestas non purus eget iaculis. Cras a laoreet sapien. Nullam placerat enim at dolor eleifend, et lacinia purus interdum.
            </p>
            <a href='#' className='button button-emphasis'>
              Contact Us
            </a>
          </div>
          <Comment
            image={goran}
            name={'Goran L.'}
            title={'ComeON'}
            text={"Adcropper's Platform gave us the clarity we needed. With smarter segmentation, we started connecting with our audience on a deeper level—and seeing higher retention felt incredibly rewarding."}
          />
        </div>
        <div className='right-part'>
          <Comment
            image={charlotte}
            name={'Charlotte V.'}
            title={'Founder of Betsson FR'}
            text={'What I value most is how multifaceted Adcropper is—combining creativity, design, and technology seamlessly. They make complex advertising challenges feel simple, and the collaboration has been nothing short of inspiring.'}
          />
          <Comment
            name={'Diana S.'}
            title={'Medier'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque tincidunt'}
          />
          <Comment
            name={'Mariana M.'}
            title={'Betsson Group'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque tincidunt'}
          />
        </div>
      </div>
    </section>
  )
}

export default Section5
