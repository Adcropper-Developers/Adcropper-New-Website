import React from 'react'
import Comment from './Comment'

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
            name={'Goran L.'}
            title={'ComeON'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque tincidunt'}
          />
        </div>
        <div className='right-part'>
          <Comment
            name={'Charlotte V.'}
            title={'Founder of Betsson FR'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque tincidunt'}
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
