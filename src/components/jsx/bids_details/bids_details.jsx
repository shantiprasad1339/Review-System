import React, { useEffect, useState, useCallback } from "react";
import bid_3 from "../../images/bid/bid_3.jpg";
import profile from "../../images/profile.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Footer } from "../footer/footer";
import Navbar from "../navbar/Navbar.jsx";

function Bids_details() {
  const inputRef = React.useRef(null);
  const inputcommentRef = React.useRef(null);
  const [reviewedUser, setReviewedUser] = useState([]);
  const [fileName, setFileName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const[reviewInput,setReviewInput] = useState()
  const [location, setLocation] = useState("");
  const [clientDetails, setClientDetails] = useState({});
  const [reviewDetails, setReviewDetails] = useState();
  const [refToken, setRefToken] = useState();
  const [inputType, setInputType] = useState("");
  const [selectedFileName, setSelectedFileName] = useState(""); // Track selected file name

;

  const handleInputTypeChange = useCallback((event) => {
    setInputType(event.target.value); // Update selected input type
  }, []);

  const handleCopy = () => {
    if (inputcommentRef.current) {
      inputcommentRef.current.select();
      document.execCommand("copy");
      alert("Copied this Rewiew");
    }
  };

  

 
  const { id } = useParams();
  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    window.scrollTo(0, 0);
    if(!refreshToken){
      alert("Please Login First!")
      navigate("/login");
    }
    axios
      .post("http://64.227.167.55:8080/A2G/token/refresh/", {
        refresh: refreshToken,
      })
      .then((response) => {
        // console.log(response.data);

        setRefToken(response.data.access);
        fecthclientdetails(response.data.access);
      })
      .catch((error) => console.error(error));
  }, []);
  function fecthclientdetails(refreshToken) {
    const config = {
      method: "get",
      url: `http://64.227.167.55:8080/A2G/get_deep_history/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + refreshToken,
      },
      data: {},
    };

    axios(config)
      .then((response) => {
        // console.log(response.data.data);
        setReviewedUser(response.data.data.Reviewed_User);
        setClientDetails(response.data.data.Client_Details);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const date = new Date(clientDetails.updated_at);

  const currentTime = new Date();
  const hoursAgo = Math.floor((currentTime - date) / (1000 * 60 * 60));
  useEffect(() => {
    
    const fetchIpAndLocation = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        const response2 = await axios.get("https://ipapi.co/json/");

        setIpAddress(response.data.ip);
        // console.log(response2);

        setLocation(response2.data.city);
      } catch (error) {
        console.error("Error fetching IP address and location:", error);
      }
    };

    fetchIpAndLocation();
  }, []);
  function generateComment() {
    const myHeaders = {
      Authorization: "Bearer" + " " + refToken,
    };

    const data = {
      id: id,
      ip_address: ipAddress,
      curr_location: location,
    };
    // console.log(data);
    // console.log("Bearer" + " " + refToken);

    axios
      .post("http://64.227.167.55:8080/A2G/get_comments/", data, {
        headers: myHeaders,
      })
      .then((response) => {
        console.log(response.data);
         setReviewDetails(response.data.answer);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.msg + "\nYour Review is: " + error.response.data.review);
      });
  }
  function submitReview(){
    console.log(inputType,fileName,reviewInput);
    
    const myHeaders = {
      Authorization: "Bearer" + " " + refToken,
    };
    const formData = new FormData();
formData.append("id", id);
formData.append("Verify_type", inputType);
formData.append(inputType, reviewInput);

axios
  .post("http://64.227.167.55:8080/A2G/save-history-link/", formData, {
    headers: myHeaders
  })
  .then((response) => {
    alert(response.data.msg);
    
    window.location.reload()
    
  })
  .catch((error) => alert(error.response.data.msg));
  }
  return (
    <>
     <Navbar />
      <section className="bids-details_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className="headding-detail_1">{clientDetails.client_name}</h3>
            </div>
            <div className="col-xl-9">
              <div className="details_bids_1">
                <div className="box_1">
                  <div className="image">
                    <img
                      src={"https://" + clientDetails.image_path}
                      alt=""
                      className="wi"
                    />
                  </div>
                  <div className="content">
                    <span class="price">Budget {clientDetails.cost} INR</span>
                    <p>{clientDetails.description}</p>
                    <span class="location">
                      <i class="fa-solid fa-location-dot"></i>{" "}
                      {clientDetails.location}
                    </span>
                    <span class="task">
                      Total Review Task {clientDetails.total_reviews}
                    </span>
                    <div class="details_bide">
                      <span>{hoursAgo} Hours Ago</span>
                      <i class="fa-solid fa-bookmark"></i>
                    </div>
                  </div>
                </div>

                <div className="box_2">
                  <div className="d-flex gap-2 mb-2">
                    <h5>Review Content</h5>
                    <button
                      type="button"
                      class="btn btn-success w-25"
                      onClick={generateComment}
                    >
                      Generate review
                    </button>
                  </div>

                  <div className="reviw_link">
                    <input
                      type="text"
                      ref={inputcommentRef}
                      value={reviewDetails}
                      readOnly
                    />
                    <button onClick={handleCopy}>
                      <i className="fa-solid fa-copy"></i>
                    </button>
                  </div>
                  <h5 className="mt-4">Review Link</h5>
                  <div className="reviw_link">
                    <input
                      type="text"
                      ref={inputRef}
                      value={clientDetails.review_link}
                      readOnly
                    />

                    <a
                      href={clientDetails.review_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>

                  <p>
                    I'm looking for an expert who can set up an RTMP server
                    using the pyrtmp library from PyPI. This server will receive
                    video frames on an on_video_message event (which I believe
                    is an h.264 formatted packet) and send them to me for
                    modification using OpenCV, i will handle the opencv.
                  </p>
                </div>

                <div className="box_3">
                  <div className="d-flex gap-3 mb-2 justify-content-between">
                    <h3>Submit Review Details</h3>
                    <select
                      name="Select"
                      id=""
                      className="review_selectBox"
                      onChange={handleInputTypeChange}
                    >
                      <option value="">-- Select Type --</option>
                      <option value="image">Image</option>
                      <option value="link">URL</option>
                    </select>
                  </div>

                  <div className="form_box">
                    {/* Conditionally render the upload image section */}
                    {inputType === "image" && (
                      <div className="upload_img">
                        <input type="file" onChange={(event)=>{setReviewInput( event.target.files[0])

setSelectedFileName(event.target.files[0].name)
                        }} />
                        <div className="upload_content">
                          <i className="fa-solid fa-cloud-arrow-up"></i>
                          <h5>{selectedFileName || "Upload image"}</h5>
                        </div>
                      </div>
                    )}

                    {/* Conditionally render the URL input section */}
                    {inputType === "link" && (
                      <div className="review_sub_link">
                        <input
                          type="text"
                          placeholder="Fill Your Submit Review Link"
                          onChange={(e)=>setReviewInput(e.target.value)}
                        />
                      </div>
                    )}

                    <div className="submit_button">
                      <button onClick={submitReview}>Submit</button>
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
                    {reviewedUser &&
                      reviewedUser.map((done_rev_li_1, v1) => {
                        const date = new Date(done_rev_li_1.updated_at);
                        
                        const currentTime = new Date();
                        const hoursAgo = Math.floor((currentTime - date) / (1000 * 60 * 60));
                        console.log(hoursAgo);
                        return (
                          <>
                           <li>
                            <img src={profile} alt="" />
                            <div className="content">
                              <h5>{done_rev_li_1.name}</h5>
                              
                              <span>{hoursAgo} Hours Ago</span>
                            </div>
                          </li>
                          
                          
                          
                          </>
                         

                        );
                      })}
                  </ul>
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

export default Bids_details;
