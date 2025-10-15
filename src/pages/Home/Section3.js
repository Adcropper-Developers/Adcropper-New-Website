import React from 'react'
import ServiceCard from './ServiceCard';
import analytics from '../../assets/analytics.svg';
import publishing from '../../assets/publishing.svg';
import automation from '../../assets/automation.svg';
import animation from '../../assets/animation.svg';
import template from '../../assets/template.svg';
function Section3() {
  return (
    <section className='section3'>
      <div className='wrapper'>
        <h2>What is included?</h2>
        <div className='cards'>
          <ServiceCard
            icon={analytics}
            title={'Analytics'}
            frontText={'Enjoy built-in analytics that help you refine and optimize ad campaigns, achieving faster decisions and better results.'}
            backText={
              <React.Fragment>
                <h4>Performance Tracking</h4>
                <p>
                  Monitor key performance metrics such as impressions, clicks, device and heatmap. No need to jump between different analytics tools.
                </p>
                <h4>Data Driven Optimization</h4>
                <p>
                  Have access to precise data on campaign performance, you can identify what's working and what's not to maximize effectiveness.
                </p>
                <h4>Real-Time Feedback</h4>
                <p>
                  With real-time performance data and effortless monitoring, you can make immediate adjustments to live campaigns to quickly improve results without having to wait for traditional reporting delays.
                </p>
              </React.Fragment>
            }
          />
          <ServiceCard
            icon={publishing}
            title={'Publishing'}
            frontText={'Make use of integrations with major ad servers and programmatic platforms to publish ads quickly and easily.'}
            backText={
              <React.Fragment>
                <h4>Easy Delivery</h4>
                <p>
                  Publish ads to your preferred ad server or platform with only one click.
                </p>
                <h4>Full Integration</h4>
                <p>
                  No need to export files and switch between multiple systems.
                </p>
                <h4>Auto-adjustment</h4>
                <p>
                  Automatically format your ads for the specific requirements of each platform.
                </p>
                <h4>Synchronization</h4>
                <p>
                  Update the live ad without the need for re- uploading, ensuring that the latest version is always in use.
                </p>
              </React.Fragment>
            }
          />
          <ServiceCard
            icon={automation}
            title={'Automation'}
            frontText={'Automate repetitive tasks such as keyword selection, audience targeting, and bid optimization to ensure that the campaigns are configured with best practices in mind.'}
            backText={
              <React.Fragment>
                <h4>Automation Tools</h4>
                <p>
                  Streamline your workflow with automation feeds—simplifying processes and delivering faster, better results.
                </p>
                <h4>Instant Publishing</h4>
                <p>
                  Publish ads directly from the dashboard.(Google Ads, Meta Ads, etc.)
                </p>
              </React.Fragment>}
          />
          <ServiceCard
            icon={animation}
            title={'Animation'}
            frontText={'Turn static banners easily into engaging and high-performing animated creatives without any motion expertise.'}
            backText={
              <React.Fragment>
                <h4>Figma Plugin</h4>
                <p>
                  This seamless integration eliminates the need for external animation software and streamlines the workflow.
                </p>
                <h4>Predefined Animations</h4>
                <p>
                  Wide range of stylish options designed to capture attention and make ads more engaging.
                </p>
                <h4>Batch Editing</h4>
                <p>
                  Don’t animate each banner—just select the preferred animation and apply it across all necessary formats instantly.
                </p>
                <h4>Duplication and Scalability</h4>
                <p>
                  Maintain a consistent look and feel across different campaigns.
                </p>
              </React.Fragment>
            }
          />
          <ServiceCard
            icon={template}
            title={'Template Library'}
            frontText={'Simplify the design process by offering a vast library of ready-to-use templates customized for various ad formats and remove much of the hassle from ad creation to focus on strategy.'}
            backText={
              <React.Fragment>
                <h4>Time-Saving Templates</h4>
                <p>
                  Choose from a wide selection of professionally crafted templates.
                </p>
                <h4>Intuitive Editing Tools</h4>
                <p>
                  No need to have any advanced design skills.
                </p>
                <h4>Platform-Ready Designs</h4>
                <p>
                  Ensuring your ads look great on any channel such as Google Display, Meta, or CRM.
                </p>
                <h4>Creative Inspiration</h4>
                <p>
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
