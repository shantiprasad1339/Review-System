import React, { useState } from 'react';
import Navbar from "../navbar/Navbar.jsx";
import axios from "axios";
import { Footer } from '../footer/footer';

function Contact_us() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendFeedback = (e) => {
    e.preventDefault(); 
    const headers = {
      "Content-Type": "application/json",
     };

    axios
      .post("http://64.227.167.55:8080/A2G/feedback/", formData, { headers })
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg)
        if(response.data.msg == "Feedback submitted successfully."){
          window.location.reload()
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
console.log(formData);

  return (
    <>
      <Navbar />
      <section className="contact_sec section-bg">
        <div className="overlay pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="contact-info">
                  <h2 className="contact-title">Have Any Questions?</h2>
                  <p>Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example...</p>
                  <ul className="contact-info">
                    <li>
                      <div className="info-left"><i className="fas fa-mobile-alt"></i></div>
                      <div className="info-right"><h4>+11223344550</h4></div>
                    </li>
                    <li>
                      <div className="info-left"><i className="fas fa-at"></i></div>
                      <div className="info-right"><h4>info@example.com</h4></div>
                    </li>
                    <li>
                      <div className="info-left"><i className="fas fa-map-marker-alt"></i></div>
                      <div className="info-right"><h4>1243 Stree New Chandigarh, INDIA</h4></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="contact-form">
                  <form onSubmit={sendFeedback}>
                    <input type="hidden" name="form-name" value="contactForm" />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="first_name"
                            className="form-control"
                            placeholder="Enter Your First Name *"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="last_name"
                            className="form-control"
                            placeholder="Enter Your Last Name *"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Your Email *"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="number"
                            name="number"
                            className="form-control"
                            placeholder="Enter Your Mobile Number *"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            rows="4"
                            name="details"
                            className="form-control"
                            placeholder="Enter Your Message *"
                            required
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn-big btn btn-bg">
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
  );
}

export default Contact_us;
