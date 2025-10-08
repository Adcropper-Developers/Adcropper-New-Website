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
            frontText={'Built-in analytics that help you refine and optimize and campaigns, achieving faster decisions and better results.'}
            backText={
            <React.Fragment>
              <p>
                <b>-Performance Tracking: </b>
                Monitor key performance metrics such as impressions, clicks, device and heatmap. No need to jump between different analytics tools.  
              </p>
              <p>
                <b>-Data Driven Optimization: </b>
                Have access to precise data on campaign performance, you can identify what's working and what's not to maximize effectiveness.
              </p>
              <p>
                <b>- Real-Time Feedback: </b>
                With real-time performance data and effortless monitoring, you can make immediate adjustments to live campaigns to quickly improve results without having to wait for traditional reporting delays.
              </p>
            </React.Fragment>
            }
          />
          <ServiceCard
            icon={publishing}
            title={'Publishing'}
            frontText={'Integrations with major ad servers and programmatic platforms make publishing ads quick and easy.'}
            backText={
              <React.Fragment>
                <p>
                  <b>- Easy Delivery: </b>
                  Publish ads to your preferred ad server or platform with only one click.  
                </p>
                <p>
                  <b>- Full Integration: </b>
                  No need to export files and switch between multiple systems.
                </p>
                <p>
                  <b>- Auto-adjustment: </b>
                   Automatically formats your ads for the specific requirements of each platform.
                </p>
                <p>
                  <b>- Synchronization: </b>
                  Updates the live ad without the need for re- uploading, ensuring that the latest version is always in use.
                </p>
              </React.Fragment>
            }
          />
          <ServiceCard
            icon={automation}
            title={'Automation'}
            frontText={'Adcropper Platform automates repetitive tasks such as keyword selection, audience targeting, and bid optimization to ensure that the campaigns are configured with best practices in mind.'}
            backText={
            <React.Fragment>
              <p>
                <b>- Automation Tools: </b>
                Streamline your workflow with automation feeds—simplifying processes and delivering faster, better results.
              </p>
              <p>
                <b>- Instant Publishing: </b>
                Publish ads directly from the dashboard.(Google Ads, Meta Ads, etc.)
              </p>
            </React.Fragment>}
          />
          <ServiceCard
            icon={animation}
            title={'Animation'}
            frontText={'Bring your static banners to life:'}
            backText={
              <React.Fragment>
                <p>
                  <b>-Figma Plugin: </b>
                  This seamless integration eliminates the need for external animation software and streamlines the workflow.
                </p>
                <p>
                  <b>-Predefined Animations: </b>
                   Wide range of stylish options designed to capture attention and make ads more engaging.
                </p>
                <p>
                  <b>-Batch Editing: </b>
                  Don’t animate each banner—just select the preferred animation and apply it across all necessary formats instantly.
                </p>
                <p>
                  <b>-Duplication and Scalability: </b>
                  Animated ads maintain a consistent look and feel across different campaigns.
                </p>
              </React.Fragment>
            }
          />
          <ServiceCard
            icon={template}
            title={'Template Library'}
            frontText={'Adcropper Platform simplifies the design process by offering a vast library of ready-to-use templates customized for various ad formats and removes much of the hassle from ad creation, enabling users to focus on strategy and rather technicality.'}
            backText={
              <React.Fragment>
                <p>
                  <b>-Time-Saving Templates: </b>
                  Choose from a wide selection of professionally crafted templates.
                </p>
                <p>
                  <b>-Intuitive Editing Tools: </b>
                  Not requiring any advanced design skills.
                </p>
                <p>
                  <b>-Platform-Ready Designs: </b>
                   Ensuring your ads look great on any channel such as Google Display, Meta, or CRM.
                </p>
                <p>
                  <b>-Creative Inspiration: </b>
                  Ensuring high-quality visuals without the stress of brainstorming from scratch.
                </p>
              </React.Fragment>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default Section3
