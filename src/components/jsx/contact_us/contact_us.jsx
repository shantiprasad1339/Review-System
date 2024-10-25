import React from 'react'
 
import { Footer } from '../footer/footer'

function Contact_us() {
  return (
   <>
 
   <section class="conatct_sec section-bg"  >
          <div class="overlay pt-100 pb-100 ">
            <div class="container">
               <div class="row">
                    <div class="col-lg-6 d-flex align-items-center">
                        <div class="contact-info">

                            <h2 class="contact-title">Have Any Questions?</h2>
                            <p>Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. It can be used in publishing and graphic design. The lorem ipsum text is usually a section of a Latin text by Cicero with words altered, added and removed to make it nonsensical.</p>
                            <ul class="contact-info">
                                <li>
                                  <div class="info-left">
                                      <i class="fas fa-mobile-alt"></i>
                                  </div>
                                  <div class="info-right">
                                      <h4>+11223344550</h4>
                                  </div>
                                </li>
                                <li>
                                  <div class="info-left">
                                      <i class="fas fa-at"></i>
                                  </div>
                                  <div class="info-right">
                                      <h4>info@example.com</h4>
                                  </div>
                                </li>
                                <li>
                                  <div class="info-left">
                                      <i class="fas fa-map-marker-alt"></i>
                                  </div>
                                  <div class="info-right">
                                      <h4>1243 Stree New Chandigarh, INDIA</h4>
                                  </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center">
                            <div class="contact-form">
                                      
                                        <form   ><input type='hidden' name='form-name' value='contactForm' />
                                            <div class="row">
                                               <div class="col-md-6">
                                                  <div class="form-group">
                                                     <input type="text" name="name" class="form-control" id="first-name" placeholder="Enter Your First Name *" required="required" />
                                                  </div>
                                               </div>
                                               <div class="col-md-6">
                                                  <div class="form-group">
                                                     <input type="text" name="text" class="form-control"  id="last-name"  placeholder="Enter Your Last Name *" required="required" />
                                                  </div>
                                               </div>
                                               <div class="col-md-6">
                                                  <div class="form-group">
                                                     <input type="email" name="email" class="form-control" id="email" placeholder="Enter Your Email *" required="required" />
                                                  </div>
                                               </div>
                                               <div class="col-md-6">
                                                  <div class="form-group">
                                                     <input type="number" name="number" class="form-control" id="number" placeholder="Enter Your Mobile Number *" required="required" />
                                                  </div>
                                               </div>

                                               <div class="col-md-12">
                                                  <div class="form-group">
                                                       <textarea rows="4" name="message" class="form-control" id="description" placeholder="Enter Your Message *" required="required"></textarea>
                                                  </div>
                                               </div>
                                                <div class="col-md-12">
                                                  
                                                    <button  class="btn-big btn btn-bg">
                                                        Send Now  
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                    </div>
               </div>
           </div>
              </div>
        </section>
        <Footer />
   </>
  )
}

export default Contact_us
