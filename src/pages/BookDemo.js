import React, { useEffect, useState } from 'react'
import '../styles/book-demo.css'
import Background from '../Background'
import Navbar from '../Navbar'
import Footer from '../Footer'

function BookDemo({ isLoading, setIsLoading, theme, setTheme }) {
  document.title = 'Adcropper | Book Demo';
  const [showContactSelect, setShowContactSelect] = useState(false);
  const [selectedCompanyType, setSelectedCompanyType] = useState('6');


  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, []);

  function showSelectedCompanyType() {
    if (selectedCompanyType === '6') {
      return 'Agency'
    } else if (selectedCompanyType === '7') {
      return 'Brand'
    } else if (selectedCompanyType === '8') {
      return 'Consultancy'
    } else if (selectedCompanyType === '9') {
      return 'Educational'
    } else if (selectedCompanyType === '10') {
      return 'Freelancer';
    } else {
      return (
        <p style={{ color: '#c0ccda', margin: '0', userSelect: 'none' }}>Select Company Type</p>
      )
    }
  }

  function changeCompanyType(val) {
    setSelectedCompanyType(val);
    setShowContactSelect(false);
  }
  return (
    <main className='book-demo'>
      <Background />
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <section className='book-demo-section' id='book-demo'>
        <div className='wrapper'>
          <div class="bookDemoForm">
            <div class="sib-form" style={{ textAlign: 'center' }}>
              <div id="sib-form-container" class="sib-form-container">
                <div id="sib-container" class="sib-container--large glass-border sib-container--vertical">
                  <h2>Book a Demo</h2>
                  <form id="sib-form" method="POST"
                    data-type="subscription"
                    action="https://ddcc9bef.sibforms.com/serve/MUIFAI-LAtXKNTvWCQzWQlMYGMBX0zwdBkxlLUL-duSqoyvfocAfn0ArheZUPQFby8SzZXZGuF1m3Td531Rmruq7NtB76bn7tJLDCsPTIUthGn_xnGByTBAwOvaLbdjU8C3u9MGFHASLvWXxlkN704YP0WYJ9aQz_uYXNaDh8Tg5wMC2dndrFzUX6rrXu3gQNBGScxPfv59RmkS3">
                    <div class="formRow" style={{ padding: "8px 0;" }}>
                      <div class="sib-input sib-form-block">
                        <div class="form__entry entry_block">
                          <div class="form__label-row ">
                            <label class="entry__label"

                              for="FIRSTNAME" data-required="*">First Name</label>

                            <div class="entry__field">
                              <input class="input " maxlength="200" type="text" id="FIRSTNAME" name="FIRSTNAME"
                                autocomplete="off" placeholder="First Name" data-required="true" required />
                            </div>
                          </div>

                          <label class="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                          </label>
                        </div>
                      </div>
                      <div class="sib-input sib-form-block">
                        <div class="form__entry entry_block">
                          <div class="form__label-row ">
                            <label class="entry__label"
                              for="LASTNAME" data-required="*">Last Name</label>
                            <div class="entry__field">
                              <input class="input " maxlength="200" type="text" id="LASTNAME" name="LASTNAME"
                                autocomplete="off" placeholder="Last Name" data-required="true" required />
                            </div>
                          </div>

                          <label class="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="formRow" style={{ padding: '8px 0' }}>
                      <div class="sib-input sib-form-block">
                        <div class="form__entry entry_block">
                          <div class="form__label-row ">
                            <label class="entry__label"
                              for="EMAIL" data-required="*">Company Email</label>

                            <div class="entry__field">
                              <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off"
                                placeholder="example@yourcompany.com" data-required="true" required />
                            </div>
                          </div>

                          <label class="entry__error entry__error--primary"
                            style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                          </label>
                        </div>

                      </div>
                      <div class="sib-input sib-form-block">
                        <div class="form__entry entry_block">
                          <div class="form__label-row ">
                            <label class="entry__label"

                              for="WEBSITE">Company Website</label>

                            <div class="entry__field">
                              <input class="input " maxlength="200" type="text" id="WEBSITE" name="WEBSITE"
                                autocomplete="off" placeholder="https://" />
                            </div>
                          </div>

                          <label class="entry__error entry__error--primary"
                            style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '8px 0' }}>
                      <div class="sib-multiselect sib-form--blockPosition sib-form-block " data-required="true">
                        <div class="form__entry">
                          <div class="form__label-row ">
                            <label class="entry__label"
                              for="lists" data-required="*">Company Type</label>

                            <div class="entry__field">
                              <div class="input input_display input--multiselect input--centerText" style={{ paddingRight: '0px' }}
                                onClick={() => setShowContactSelect(!showContactSelect)}>
                                {selectedCompanyType ? showSelectedCompanyType() : showSelectedCompanyType()}
                              </div>
                              <input id="lists" class="input" name="lists_39[]" type="hidden" value={selectedCompanyType} />
                            </div>
                          </div>
                          <label class="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                          </label>
                        </div>
                        <div class="sib-menu"
                          style={{ textAlign: 'left', top: '72.4792px', width: '414.051px', left: '16px', display: (showContactSelect ? 'block' : 'none') }}>
                          {/* <div class="sib-menu__select sib-menu__selectTextAlign">
                            <button type="button" class="clickable_link sib-menu__select-all-button">Select all</button>
                            <span class="sib-menu__separator">/</span>
                            <button type="button" class="clickable_link sib-menu__clear-button">Clear</button>
                          </div> */}
                          <ul class="sib-menu__item-list">
                            <li class="sib-menu__item" onClick={() => changeCompanyType('6')}>
                              <div class="entry__choice" style={{ textIndent: '' }}><label class="sib-multiselect__label">
                                <input type="checkbox" class="input_replaced" data-value="6" />
                                <span class="checkbox checkbox_tick_positive"></span>
                                <span class="sib-multiselect__label-text">Agency</span>
                              </label></div>
                            </li>
                            <li class="sib-menu__item" onClick={() => changeCompanyType('7')}>
                              <div class="entry__choice" style={{ textIndent: '' }}><label class="sib-multiselect__label">
                                <input type="checkbox" class="input_replaced" data-value="7" />
                                <span class="checkbox checkbox_tick_positive"></span>
                                <span class="sib-multiselect__label-text">Brand</span>
                              </label></div>
                            </li>
                            <li class="sib-menu__item" onClick={() => changeCompanyType('8')}>
                              <div class="entry__choice" style={{ textIndent: '' }}><label class="sib-multiselect__label">
                                <input type="checkbox" class="input_replaced" data-value="8" />
                                <span class="checkbox checkbox_tick_positive"></span>
                                <span class="sib-multiselect__label-text">Consultancy</span>
                              </label></div>
                            </li>
                            <li class="sib-menu__item" onClick={() => changeCompanyType('9')}>
                              <div class="entry__choice" style={{ textIndent: '' }}><label class="sib-multiselect__label">
                                <input type="checkbox" class="input_replaced" data-value="9" />
                                <span class="checkbox checkbox_tick_positive"></span>
                                <span class="sib-multiselect__label-text">Educational</span>
                              </label></div>
                            </li>
                            <li class="sib-menu__item" onClick={() => changeCompanyType('10')}>
                              <div class="entry__choice" style={{ textIndent: '' }}><label class="sib-multiselect__label">
                                <input type="checkbox" class="input_replaced" data-value="10" />
                                <span class="checkbox checkbox_tick_positive"></span>
                                <span class="sib-multiselect__label-text">Freelancer</span>
                              </label></div>
                            </li>
                          </ul>
                          {/* <div class="sib-menu__apply">
                            <button type="button" class="sib-menu__cancel-button clickable_link">Cancel</button>
                            <button type="button" class="sib-menu__apply-button clickable_button">Apply</button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div class="formRow" style={{ padding: '8px 0' }}>
                      <div class="sib-input sib-form-block">
                        <div class="form__entry entry_block">
                          <div class="form__label-row ">
                            <label class="entry__label"
                              for="EXT_ID">Share any additional details to help us prepare for the call</label>

                            <div class="entry__field">
                              <textarea rows="2" class="input " maxlength="500" id="EXT_ID" name="EXT_ID"
                                autocomplete="off"></textarea>
                            </div>
                          </div>

                          <label class="entry__error entry__error--primary"
                            style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="formRow" style={{ padding: "8px 0;" }}>
                      <div class="sib-optin sib-form-block" data-required="true">
                        <div class="form__entry entry_mcq">
                          <div class="form__label-row ">
                            <div class="entry__choice">
                              <label>
                                <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN"
                                  required />
                                <span class="checkbox checkbox_tick_positive"></span><span
                                  style={{ textAlign: 'left', fontFamily: 'Helvetica sans-serif', color: '#3C4858', backgroundColor: 'transparent', marginLeft: '3px', marginTop: '-3px' }}
                                >
                                  <p>By submitting this form you agree to receive content, events, and marketing emails
                                    from Adcropper. To learn more about how Adcropper uses your informations, check our <a href='https://platform.adcropper.com/terms' target='_blank'>terms</a> and <a href='https://platform.adcropper.com/privacy' target='_blank'>privacy policy</a>
                                  </p><span data-required="*" style={{ display: 'inline' }}
                                    class="entry__label entry__label_optin"></span>
                                </span> </label>
                            </div>
                          </div>
                          <label class="entry__error entry__error--primary"
                            style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica sans-serif', color: "#661d1d", backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949;' }}
                          >
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="formRow" style={{ padding: "8px 0;" }}>
                      <div class="sib-form-block" style={{ textAlign: "left" }}>
                        <button class="sib-form-block__button button button-green glass-border"
                          form="sib-form" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                    <input type="text" name="email_address_check" value="" class="input--hidden" />
                    <input type="hidden" name="locale" value="en" />
                    <input type="hidden" name="html_type" value="simple" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default BookDemo
