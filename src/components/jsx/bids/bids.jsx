
import React, { useLayoutEffect, useRef } from 'react'; 
import { Pagination, Navigation } from 'swiper/modules';
import bid_1 from '../../images/bid/bid_1.jpg'
import bid_2 from '../../images/bid/bid_2.jpg'
import bid_3 from '../../images/bid/bid_3.jpg'
import { Footer } from '../footer/footer';
import { Link } from 'react-router-dom';

function Bids() {
  const filters_data = [
    {
  img:bid_1,
  headding:"Shri Shyam Cafe & Family Restaurant",
  pr_1:"15",
  pr_2:"17",
 
     time:"13 Hours"
    },
    {
      img:bid_2,
      headding:"Super OYO Flagship Hotel Z",
      pr_1:"15",
      pr_2:"17",
     
         time:"13 Hours"
        },
        {
          img:bid_3,
          headding:"Hotel Jaipur Heritage",
          pr_1:"15",
          pr_2:"17",
         
             time:"13 Hours"
            },
            {
              img:bid_1,
              headding:"Shri Shyam Cafe & Family Restaurant",
              pr_1:"15",
              pr_2:"17",
             
                 time:"13 Hours"
                },
                {
                  img:bid_2,
                  headding:"Super OYO Flagship Hotel Z",
                  pr_1:"15",
                  pr_2:"17",
               
                     time:"13 Hours"
                    },
                    {
                      img:bid_3,
                      headding:"Hotel Jaipur Heritage",
                      pr_1:"15",
                      pr_2:"17",
                   
                         time:"13 Hours"
                        },
                        {
                          img:bid_1,
                          headding:"Shri Shyam Cafe & Family Restaurant",
                          pr_1:"15",
                          pr_2:"17",
                         
                             time:"13 Hours"
                            },
                            {
                              img:bid_2,
                              headding:"Super OYO Flagship Hotel Z",
                              pr_1:"15",
                              pr_2:"17",
                           
                                 time:"13 Hours"
                                },
                                {
                                  img:bid_3,
                                  headding:"Hotel Jaipur Heritage",
                                  pr_1:"15",
                                  pr_2:"17",
                              
                                     time:"13 Hours"
                                    },
                                    {
                                      img:bid_1,
                                      headding:"Shri Shyam Cafe & Family Restaurant",
                                      pr_1:"15",
                                      pr_2:"17",
                                     
                                         time:"13 Hours"
                                        },
 
  ]
  return (
    <>
      <section className="bids_area">
        <div className="container">
          <div className="row z-11">
            <div className="col-xl-7 m-auto">
              <div className="find_bids_box">
                <h3>Find Review Catogry</h3>
                <div className="form_box">
                  <input type="text" />
                  <button className='btn'>Find</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bid_main_area">
        <div className="container">
          <div className="row">
      
              {
                filters_data.map((filterdata ,f1) =>(
                  <div className="col-xxl-6">
                    <Link to="/bids-details">
                  <div className="filter_box">
                  <div className="image">
                    <img src={filterdata.img} alt="" />
                  </div>
                  <div className="content">
                    <div className="box_1">
                    <h4>{filterdata.headding}
                    </h4>
                    <span className='price'>Budget  {filterdata.pr_1} INR – {filterdata.pr_2} INR</span>
                    <span className='location'><i class="fa-solid fa-location-dot"></i> Jaipur</span>
                    <span className='task'>Total Review Task 20/100</span>
                  {/* <p>{filterdata.disc}</p> */}
                  <div className="stars_box">
                       <span>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <span>0.0</span>
                       </span>
                       <div className="details_bide">
                           <span>{filterdata.time} Ago</span>
                           <i class="fa-solid fa-bookmark"></i>
                       </div>
                  </div>
                  <button className='btn_review_sub'>
                   Review Now
                  </button>
                    </div>
                    <div class="progress blue">
                 <span class="progress-left">
                                   <span class="progress-bar"></span>
                 </span>
                 <span class="progress-right">
                                   <span class="progress-bar"></span>
                 </span>
                 <div class="progress-value">90%</div>
               </div>
                  </div>
                
  
                </div>
                </Link>
                </div>
                ))
              }
         
         
            <div className="col-xl-12">
              <div className="bid_pangets">
                <p>Total Show Reviews : 40</p>
                <ul>
                  <li className='prev disabled'>
                    prev
                  </li>
                  <li>
                    1
                  </li>
                  <li className='active'>
                    2
                  </li>
                  <li>
                    3
                  </li>
                  <li>
                    4
                  </li>
                  <li className='nex'>
                    nex
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Bids
