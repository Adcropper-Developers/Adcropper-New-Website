import React, { useEffect, useState } from 'react';
import '../styles/faq.css'
import Background from '../Background';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Faq({ isLoading, setIsLoading, theme, setTheme }) {
  const [faqState, setFaqState] = useState([
    {
      header: 'What is Adcropper Platform?',
      body: <p>Adcropper Platform is a comprehensive management solution that unifies brands’ advertising processes under a single roof. Users can design ads, publish them across multiple channels (social media, search engines, display networks, etc.), manage campaigns in real time, and track performance through detailed analytics reports.</p>
    },
    {
      header: 'What are the Benefits of Adcropper Platform?',
      body: <React.Fragment>
        <p>
          <b>Centralized Client and Billing Management:</b> Agencies can monitor all advertising campaigns for multiple clients from a single dashboard. Integrated billing management feature reduces operational workload significantly and saves valuable time.
        </p>
        <p>
          <b>Audience-Specific Smart Campaigns:</b> Enables automatic ad set creation based on user actions (e.g., New Audiences [first-time viewers], Engagers [clickers], and Converters [buyers]).
        </p>
        <p>
          <b>In-Depth and Actionable Analytics:</b> Campaign performance metrics are available both in aggregate and broken down by ad set, ad size, and more. These insights can be used to shape and optimize campaigns in real time.
        </p>
        <p>
          <b>Multi-Platform Integration:</b> Contents can be uploaded to different ad platforms from a single interface, enabling simultaneous campaign management. This centralized approach saves time and greatly simplifies workflows.
        </p>
        <p>
          <b>AI-Powered Optimization:</b> Ads are automatically optimized based on user interests and behavior, ensuring maximum ROI from ad budgets.
        </p>
        <p>
          <b>Simplified Client Collaboration:</b> Agencies can track all client ad data and performance in one place, with the added benefit of easy invoice creation and management.
        </p>
        <p>
          <b>Proactive Notification System:</b> Smart alerts notify users about campaign status, performance changes, or required actions in real time, ensuring campaigns remain closely monitored and up to date.
        </p>
        <p>
          <b>Flexible Design and Builder Module:</b> Users can create ads quickly and easily without coding, using both professional templates and custom designs.
        </p>
        <p>
          <b>Dynamic Ad Creation:</b> Advanced dynamic ad features allow for automated and personalized ad content generation without complex coding.
        </p>
      </React.Fragment>
    },
    {
      header: 'What are the Features of Adcropper Platform?',
      body: <React.Fragment>
        <p>
          *Figma integration for fast design-to-ad workflows
          <br></br>
          *Feed system for instant dynamic ads
          <br></br>
          *Easy analysis with built-in statistics
          <br></br>
          *Simple versioning and marketplace separation
          <br></br>
          *Widget functionality for highly complex ads
        </p>
      </React.Fragment>
    },
    {
      header: 'What Does Adcropper Platform Enable?',
      body: <React.Fragment>
        <p>
          <b>Total Operational Control:</b> Manage your entire client portfolio, campaigns, and creative processes from one central hub, eliminating chaos and ensuring full visibility and control.
        </p>
        <p>
          <b>Measurable Efficiency:</b> Automate repetitive tasks and centralize cross-channel management to save time and resources, allowing your team to focus less on "process management" and more on strategy and creativity.
        </p>
        <p>
          <b>Data-Driven Strategic Decision-Making:</b> Go beyond surface-level metrics with in-depth, customizable analytics. Make evidence-based, real-time optimizations to maximize ROI.
        </p>
        <p>
          <b>Perfect Client Collaboration and Transparency:</b> Role-based dashboards and shareable reports build client trust, enhance accountability, and lay the foundation for long-term, successful partnerships.
        </p>
        <p>
          <b>Competition Advantage with Smart Optimization:</b> AI-driven optimizations continuously improve ad performance, adapting to audience behavior and keeping you one step ahead of competitors.
        </p>
        <p>
          <b>Brand Consistency and Faster Time-to-Market:</b> Centralized asset libraries and templates ensure brand consistency across channels, while enabling rapid response to market opportunities.
        </p>
      </React.Fragment>
    },
    {
      header: 'How Do I Use Adcropper Platform?',
      body: <React.Fragment>
        <p>You can install our Figma plugin in seconds and start using it immediately. Platform can be accessed directly via a web browser without installing additional applications.</p>
      </React.Fragment>
    },
    {
      header: "What Payment Methods Can Be Used for Adcropper Platform?",
      body: <React.Fragment>
        <p>Payments can only be made via bank transfer for now.</p>
      </React.Fragment>
    },
    {
      header: 'Who Can Benefit from Adcropper Platform?',
      body: <React.Fragment>
        <p>For companies with small/large scale ad operations and the agencies managing their advertising campaigns.</p>
      </React.Fragment>
    },
    {
      header: 'Who Are Our Competitors?',
      body: <React.Fragment>
        <p>
          Bannerflow
          <br></br>
          Creatopy
          <br></br>
          Betegy
          <br></br>
          Smartly
        </p>
      </React.Fragment>
    },
    {
      header: 'Can Brands Use Their Own Designs or Only Adcropper’s?',
      body: <React.Fragment>
        <p>You can both upload your own designs or use our pre-built templates when creating ads.</p>
      </React.Fragment>
    },
    {
      header: "How is Pricing Structured?",
      body: <React.Fragment>
        <p>Pricing is based on ad impressions (CPM) with tiered discounts. Depending on membership levels (Basic, Pro, etc.), maximum ad size varies, which also affects pricing.</p>
        <p>Video ads have separate pricing.</p>
      </React.Fragment>
    },
    {
      header: 'What is the User Limit and Cost of Adding Users?',
      body: <React.Fragment>
        <p>There is no user limit and adding users has no additional cost.</p>
      </React.Fragment>
    },
    {
      header: 'Can I Monitor Live Ad Traffic?',
      body: <React.Fragment>
        <p>Yes, with a slight delay of 6 and 12 minutes.</p>
      </React.Fragment>
    },
    {
      header: 'Do I Have Access to Creative Reporting? How Detailed Are These Reports?',
      body: <React.Fragment>
        <p>Yes, full access to creative performance reporting is available. Adcropper Platform allows you to measure each creative’s performance independently from the campaign.</p>
        <p>Our reporting feature covers a wide range of basic and advanced metrics, including but not limited to:</p>
        <p><b>Core Performance Metrics:</b> Clicks, Impressions, CTR</p>
        <p><b>Video Analysis Metrics:</b> Average view time, mute/unmute ratios</p>
        <p><b>User Behavior Analysis:</b> Exit/return rates, post-view reaction times</p>
        <p><b>Visual Area of Interests (Heatmaps):</b> Visual focus mapps showing which parts of creatives users look at most</p>
        <p><i>These insights help you understand exactly why certain creatives perform better, guiding future creative decisions.</i></p>
      </React.Fragment>
    },
    {
      header: 'What Are the Key Advantages of Adcropper Platform for Users?',
      body: <React.Fragment>
        <h3>1. Saving Time and Increasing Efficiency</h3>
        <p>*Figma Integration: Accelerates the transition from design to advertising. Your design teams can continue working in Figma, while creatives are instantly transferred to the Platform and transformed into ads. This eliminates the hassle of manual uploads and file transfers.</p>
        <p>*Centralized Management: A single entry point for multiple channels (Meta, Google, DSPs, etc.) and dozens of clients. We consolidate your processes to reduce your operational workload.</p>
        <p>*Cloud-Based Access: Adcropper Platform requires no installation. You can instantly access it from anywhere with an internet connection; at the office, at home, or in a client meeting via any device lie pc or tablet.</p>
        <h3>2. Gaining Control and Security</h3>
        <p>*Having Role-Based Access: Build a secure and structured collaboration environment across your team. Client accounts are accessible only to those who need them, and budget changes can only be made by authorized users, eliminating unauthorized actions and minimizing security risks.</p>
        <h3>3. Making Data-Driven Decisions</h3>
        <p>*In-depth Analysis and Reporting: Beyond simple “clicks” and “impressions,” you gain deep insights into your creatives’ real performance with advanced metrics such as video view durations, heatmaps, and user engagement times.</p>
        <p>*Faster Optimizations: By using this rich data, you can make faster, more accurate, and more reliable decisions about which campaign to stop and which creative to allocate budget to, instantly increasing your advertising ROI (Return on Investment).</p>
      </React.Fragment>
    },
    {
      header: "What are the Technical Featuresof Adcropper Platform? Is It Easy to Use?",
      body: <React.Fragment>
        <p>Adcopper Platform is designed to remove technical barriers for both designers and marketing teams, accelerating the creative process. Here’s how it works:</p>
        <h3>1. Fast Transition from Design to Dynamic Ads Without Coding</h3>
        <p>Designers can directly transfer their static designs prepared in Figma to the Platform. Then, without writing even a single line of code, they can use our integrated animation tool to add motion and interaction, turning them into dynamic ads. This greatly accelerates the creative process and removes dependency on technical teams.</p>
        <h3>2. Flexible Widget Structure for Advanced Users</h3>
        <p>Adcropper Platform also provides flexibility for developers or advanced users. Instead of relying on API integration, it offers a widget-based structure. This allows expert users to write their own HTML/CSS/JavaScript code within the platform’s safe and controlled environment, enabling them to build and manage fully custom and complex ad creatives. This offers unlimited customization.</p>
        <h3>3. Intuitive and Simple Reporting</h3>
        <p>Our reporting interface transforms complex data into simple and easy-to-understand visual dashboards. Without requiring technical effort, users can instantly access all key performance metrics (clicks, impressions, video analytics, heatmaps) and make quick decisions.</p>
        <p><i>To sum up, Adcropper Platform combines the ease of <b>no-code</b> with the flexibility of <b>pro-code</b> under one roof. This empowers both designers and developers to work productively on the same realm while focusing on their areas of expertise.</i></p>
      </React.Fragment>
    },
    {
      header: 'How Does It Improve Business Processes? How Can It Be Used to Optimize Workflows?',
      body: <React.Fragment>
        <p>In the first stage, workflows will be redesigned and applied based on feedback from beta users.</p>
        <p>To improve efficiency, we will maintain constant communication with users (via Discord, Skype, Slack).</p>
        <p>User feedback will be logged in a ticketing system, where requests and issues will be analyzed and used to guide the development process.</p>
      </React.Fragment>
    },
    {
      header: 'Is There a Free Trial?',
      body: <React.Fragment>
        <p>Yes. We  provide free trial publishing for brands and agencies.</p>
      </React.Fragment>
    },
    {
      header: 'What Are the Competitive Advantages? What Sets It Apart from Competitors?',
      body: <React.Fragment>
        <p>Easy integration of Figma designs through our plugin</p>
        <p>Quick ad creation with the template system</p>
        <p>AI-powered optimization for dynamic ads</p>
        <p>Ability to generate creative visuals with AI (experimental feature)</p>
      </React.Fragment>
    },
    {
      header: 'Do You Provide Live Customer Support?',
      body: <React.Fragment>
        <p>Yes, we have live support through written channels. Response times vary according to your membership plan.</p>
      </React.Fragment>
    },
    {
      header: 'Can You Provide Direct Support for Customers Instead of Themselves Using the Platform?',
      body: <React.Fragment>
        <p>Yes, we provide direct support depending on your membership plan. Support will be limited by hours and number of staff allocated.</p>
      </React.Fragment>
    },
    {
      header: 'How Many Languages Will Be Supported?',
      body: <React.Fragment>
        <p>We only have support in English for now.</p>
      </React.Fragment>
    },
    {
      header: 'What About the Alternative Payment Systems?',
      body: <React.Fragment>
        <p>We have no integrated payment system as of now. Only bank transfers can bu used for payment purposes.</p>
      </React.Fragment>
    },
    {
      header: 'How Will Invoicing Work?',
      body: <React.Fragment>
        <p>Agencies or companies can generate a single invoice for all campaigns, or separate invoices for sub-clients/markets if preferred.</p>
      </React.Fragment>
    }
  ]);
  document.title = 'Adcropper | Frequently Asked Questions';

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


  const toggleFaq = (e) => {
    e.target.parentElement.classList.toggle('active');
    const questionBody = e.target.nextElementSibling;
    if (questionBody.style.maxHeight) {
      questionBody.style.maxHeight = null;
    } else {
      questionBody.style.maxHeight = questionBody.scrollHeight + "px";
    }
  }

  return (
    <main className='faq-main'>
      <Background />
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <section className='faq-section'>
        <div className="wrapper">
          <h1>Frequently Asked Questions</h1>
          <div className='faq-wrapper glass-border'>
            {faqState.map((item, idx) => {
              return (
                <div className='faq' key={idx}>
                  <div className='faq-header' onClick={toggleFaq}>
                    <h2>
                      {item.header}
                    </h2>
                    <svg className="faq-arrow" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.1065 8.84947C11.2171 8.70333 11.2951 8.57397 11.3978 8.47029C14.0165 5.84767 16.6341 3.22505 19.2587 0.608349C20.1701 -0.301077 21.6375 0.0721727 21.9465 1.29363C22.1006 1.90287 21.9159 2.4272 21.4676 2.87253C20.2264 4.10386 18.9931 5.34309 17.7578 6.57936C15.9558 8.38142 14.1537 10.1845 12.3517 11.9856C11.4778 12.8594 10.6177 12.8624 9.75174 11.9964C6.68675 8.93241 3.62373 5.86643 0.556764 2.8044C0.0462615 2.29488 -0.141351 1.70835 0.11242 1.02406C0.521217 -0.0759424 1.88486 -0.350449 2.74492 0.498744C3.99797 1.736 5.23621 2.98707 6.48037 4.23321C7.9161 5.67092 9.35084 7.10862 10.7866 8.54534C10.8636 8.62236 10.9455 8.69641 11.1065 8.84947Z"></path>
                    </svg>
                  </div>
                  <div className='faq-body'>
                    {item.body}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default Faq
