import React, { useState } from 'react';
import bid_3 from '../../images/bid/bid_3.jpg'
import profile from '../../images/profile.jpg'
import { Link } from 'react-router-dom';
import { Footer } from '../footer/footer';


function Bids_details() {
  const inputRef = React.useRef(null);
  const [fileName, setFileName] = useState('');
  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      alert('Copied this Rewiew');
    }
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Set the file name in the state
    } else {
      setFileName(''); // Reset if no file is selected
    }
  };

  const done_rev_li = [
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
    {
      img: profile,
      headding: "Vijay Singh Shekhawat",
      time: "13 Hours"
    },
  ]

  return (
    <>
      <section className="bids-details_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className='headding-detail_1'>Hotel Jaipur Heritage</h3>
            </div>
            <div className="col-xl-9">
              <div className="details_bids_1">
                <div className="box_1">
                  <div className="image">
                    <img src={bid_3} alt="" className='wi' />
                  </div>
                  <div className="content">
                    <span class="price">Budget  15 INR – 17 INR</span>
                    <p>I'm looking for an expert who can set up an RTMP server using the pyrtmp library from PyPI. This server will receive video frames on an on_video_message event (which I believe is an h.264 formatted packet) and send them to me for modification using OpenCV, i will handle the opencv.
                    </p>
                    <span class="location"><i class="fa-solid fa-location-dot"></i> Jaipur</span>
                    <span class="task">Total Review Task 20/100</span>
                    <div class="details_bide"><span>13 Hours Ago</span><i class="fa-solid fa-bookmark"></i></div>
                  </div>
                </div>


                <div className="box_2">
                  <h5 >Review Content</h5>
                  <div className="reviw_link">
                    <input
                      type="text"
                      ref={inputRef}
                      value="I'm looking for an expert who can set up an RTMP server using the pyrtmp library from PyPI. This server will receive video frames on an on_video_message"
                      readOnly
                    />
                    <button onClick={handleCopy}>
                      <i className="fa-solid fa-copy"></i>
                    </button>
                  </div>
                  <h5 className='mt-4'>Review Link</h5>
                  <div className="reviw_link">
                    <input
                      type="text"
                      ref={inputRef}
                      value="https://maps.app.goo.gl/1FBNWSPnJzGCrxwE7"
                      readOnly
                    />


                    <Link> <i class="fa-solid fa-arrow-right"></i></Link>

                  </div>

                  <p>I'm looking for an expert who can set up an RTMP server using the pyrtmp library from PyPI. This server will receive video frames on an on_video_message event (which I believe is an h.264 formatted packet) and send them to me for modification using OpenCV, i will handle the opencv.</p>
                </div>

                <div className="box_3">
                  <h3>Submit Review Details</h3>

                  <div className="form_box">
                    <div className="upload_img">
                      <input type="file" onChange={handleFileChange} />
                      <div className="upload_content">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                        <h5>{fileName || 'Upload image'}</h5>
                      </div>

                    </div>
                    <div className="review_sub_link">
                      <input type="text" placeholder='Fill Your Submit Rewiew Link' />
                    </div>
                    <div className="submit_button">
                      <button>
                        Submit
                      </button>
                    </div>

                  </div>

                </div>



              </div>
            </div>

            <div className="col-xl-3 mt-xl-0 mt-3">
              <div className="submit_review">
              <h6>Submited Reviews</h6>
                <div className="submit_review_inner">
            
                  <ul>
                    {done_rev_li.map((done_rev_li_1, v1) => (
                      <li>
                        <img src={done_rev_li_1.img} alt="" />
                        <div className="content">
                          <h5>{done_rev_li_1.headding}</h5>
                          <span>{done_rev_li_1.time}</span>
                        </div>
                      </li>
                    ))}

                  </ul>
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

export default Bids_details
