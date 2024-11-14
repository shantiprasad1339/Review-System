import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Navbar from "../navbar/Navbar.jsx";
import { Footer } from "../footer/footer";

function Bids() {
  const [clients, setClients] = useState([]);
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");
  const [acToken, setAcToken] = useState(null);
  const [pageCount, setPageCount] = useState({ currentPage: 1, allPages: 1 });
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      alert("Please Login First!");
      navigate("/login");
      return;
    }

    // Fetch location data
    axios.get("https://ipapi.co/json/").then((response) => {
      setLocation(response.data.city);
      getRefreshToken(refreshToken);
    });

    function getRefreshToken(refreshToken) {
      axios.post("http://64.227.167.55:8080/A2G/token/refresh/", {
        refresh: refreshToken,
      })
      .then((response) => {
        const accessToken = response.data.access;
        setAcToken(accessToken);
        if (location) {
          getClient(accessToken, pageCount.currentPage);
        }
      })
      .catch((error) => {
        if (error.response?.data?.code === "token_not_valid") {
          alert("Your Token Has Expired! Please Log In Again.");
          localStorage.clear();
          navigate("/login");
        }
      });
    }
  }, [location]);

  function getClient(accessToken, page) {
    axios
      .get(
        `http://64.227.167.55:8080/A2G/get_clients_data/?page=${page}&page_size=10&curr_location=${location}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((response) => {
        setClients(response.data.data);
        setPageCount((prev) => ({
          ...prev,
          allPages: response.data.pages,
        }));
      })
      .catch((error) => console.error(error));
  }

  const handleSearch = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + acToken,
    };

    axios
      .get(`http://64.227.167.55:8080/A2G/client-search/?query=${query}&curr_location=${location}`, { headers })
      .then((response) => {
        setClients(response.data.data);
      })
      .catch((error) => alert(error.response.data.msg));
  };

  const handleNextPage = () => {
    if (pageCount.currentPage < pageCount.allPages) {
      setPageCount((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
      getClient(acToken, pageCount.currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageCount.currentPage > 1) {
      setPageCount((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }));
      getClient(acToken, pageCount.currentPage - 1);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bids_area">
        <div className="container">
          <div className="row z-11">
            <div className="col-xl-7 m-auto">
              <div className="find_bids_box">
                <h3>Find Review Category</h3>
                <div className="form_box">
                  <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter search query" 
                  />
                  <button className="btn" onClick={handleSearch}>Find</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bid_main_area">
        <div className="container">
          <div className="row">
            {clients &&
              clients.map((filterdata, f1) => {
                if (!filterdata.image_path) return null;
                let img = "https://" + filterdata.image_path;
                const date = new Date(filterdata.updated_at);
                const hoursAgo = new Date().getHours() - date.getHours();

                return (
                  <div className="col-xxl-6" key={f1}>
                    <Link to={`/bids-details/${filterdata.id}`}>
                      <div className="filter_box">
                        <div className="image">
                          <img src={img} alt="" />
                        </div>
                        <div className="content">
                          <div className="box_1">
                            <span className="price">Budget {filterdata.cost} INR</span>
                            <span className="location">
                              <i className="fa-solid fa-location-dot"></i> {filterdata.location}
                            </span>
                            <span className="task">Total Review Task {filterdata.total_reviews}</span>
                            <div className="stars_box">
                              <span>
                                <i className="fa-solid fa-star"></i>
                                <span>0.0</span>
                              </span>
                              <div className="details_bide">
                                <span>{hoursAgo} Hours Ago</span>
                                <i className="fa-solid fa-bookmark"></i>
                              </div>
                            </div>
                            <button className="btn_review_sub">Review Now</button>
                          </div>
                          <div style={{ width: 150, height: 150 }} >
                            <CircularProgressbar value={filterdata.percentage} text={`${filterdata.percentage || 0}%`} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}

            <div className="col-xl-12">
              <div className="bid_pangets">
                <p>Total Show Reviews : {clients.length}</p>
                <ul>
                  <li className={`prev ${pageCount.currentPage === 1 ? 'disabled' : ''}`} onClick={handlePrevPage}>Prev</li>
                  <li className="active">{pageCount.currentPage} of {pageCount.allPages}</li>
                  <li className={`next ${pageCount.currentPage === pageCount.allPages ? 'disabled' : ''}`} onClick={handleNextPage}>Next</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Bids;
