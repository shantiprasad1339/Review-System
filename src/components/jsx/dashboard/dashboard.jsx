import React from 'react'

import DataTable from 'react-data-table-component';
import bid_1 from '../../images/bid/bid_1.jpg'
import bid_2 from '../../images/bid/bid_2.jpg'
import bid_3 from '../../images/bid/bid_3.jpg'
import { Footer } from '../footer/footer';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/favicon.png'

 

function Dashboard() {
  
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
  const columns = [
    {
      name: 'Review Id',
      selector: row => row.title,
    },
    {
      name: 'Date',
      selector: row => row.date,
    },
    {
      name: 'Price',
      selector: row => row.price,
    },
    {
      name: 'Withdroal Date',
      selector: row => row.recive_date,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    
  ];
  
  const data = [
      {
      id: 1,
      title: 'Shree Shyam Cafe',
      recive_date: '25-02-2024',
      price: '20 INR',
      date: '16-02-2024',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Shree Shyam Cafe',
      recive_date: '25-02-2024',
      price: '20 INR',
      date: '16-02-2024',
      status: 'Pending',

    },
    {
      id: 3,
      title: 'Shree Shyam Cafe',
      recive_date: '25-02-2024',
      price: '20 INR',
      date: '16-02-2024',
      status: 'Pending',

    },
    {
      id: 4,
      title: 'Shree Shyam Cafe',
      recive_date: '25-02-2024',
      price: '20 INR',
      date: '16-02-2024',
      status: 'Pending',

    },
    {
      id: 5,
      title: 'Shree Shyam Cafe',
      recive_date: '25-02-2024',
      price: '20 INR',
      date: '16-02-2024',
      status: 'Pending',

    },
    {
      id: 6,
      title: 'Shree Shyam Cafe',
      recive_date: '25-02-2024',
      price: '20 INR',
      date: '16-02-2024',
      status: 'Pending',

    },
    {
      id: 7,
      title: 'Shree Shyam Cafe',
      recive_date: '25-02-2024',
      price: '20 INR',
      date: '16-02-2024',
      status: 'Pending',

    },
    {
      id: 8,
      title: 'Shree Shyam Cafe',
      recive_date: '25-02-2024',
      price: '20 INR',
      date: '16-02-2024',
      status: 'Pending',

    },
  ]
  return (
    <>
      <section className="dashboard_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="dash_sider_bar">
                <img src={logo} alt="" />
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
                  <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Submited Reviews</button>
                  <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Wallet & Withdrawal</button>
                  <button class="nav-link" >Logout</button>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="dashboard_contant">
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    <div className="profile_box">
                         <div className="row">
                          <div className="col-xl-6 mb-3">
                            <div className="form_box">
                              <label htmlFor="">UserName</label>
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                          <div className="col-xl-6 mb-3">
                            <div className="form_box">
                              <label htmlFor="">Full Name</label>
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                          <div className="col-xl-6 mb-3">
                            <div className="form_box">
                              <label htmlFor="">Mobile Number</label>
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                          <div className="col-xl-6 mb-3">
                            <div className="form_box">
                              <label htmlFor="">Email Id</label>
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                          <div className="col-xl-6 mb-3">
                            <div className="form_box">
                              <label htmlFor="">Password</label>
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                          <div className="col-xl-6 mb-3">
                            <div className="form_box">
                              <label htmlFor="">Re-Password</label>
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                         
                          <div className="col-xl-12 mb-3">
                            <div className="form_box">
                                  <button>Submit</button>
                            </div>
                          </div>
                         </div>
                    </div>
                  </div>
                  <div class="tab-pane fade " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0"> 

                  <div className="profile_box">
                         <div className="row">
                             <div className="col-xl-12">
                              <div className="rev_sub_list">
                              {
                filters_data.map((filterdata ,f1) =>(
                  <div className="col-xxl-12">
                    <Link to="">
                  <div className="filter_box">
                  <div className="image">
                    <img src={filterdata.img} alt="" />
                  </div>
                  <div className="content">
                    <div className="box_1 w-100">
                    <h4>{filterdata.headding}
                    </h4>
                    <span className='price'>Budget  {filterdata.pr_1} INR – {filterdata.pr_2} INR</span>
                    <span className='location'><i class="fa-solid fa-location-dot"></i> Jaipur</span>
                    <span className='task'>Total Review Task 20/100</span>
                    <p>I'm looking for an expert who can set up an RTMP server using the pyrtmp library from PyPI. This server will receive video frames on an on_video_message</p>
             
                  <button className='btn_review_sub'>
                  Completed
                  </button>
                    </div>
                    
                  </div>
                
  
                </div>
                </Link>
                </div>
                ))
              }
                              </div>
                             </div>
                         </div>
                    </div>


                  </div>

                  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">

                  <div className="profile_box">
                         <div className="row">
                          <div className="col-xl-12">
                            <div className="whitdrawl_detail">
                              <div className="form_box mb-3">
                                <label htmlFor="">UPI ID</label>
                              <input type="text" name="" id="" /> 
                              </div>
                              <div className="form_box mb-3">
                                <label htmlFor="">Amount</label>
                              <input type="text" name="" id="" /> 
                              </div>
                            
                              <div className="form_box mb-3">
                                <button>Withdrwal</button>                                
                              </div>
                            </div>
                          </div>
                             <div className="col-xl-4 mb-xl-0 mb-3">
                              <div className="wallet_box">
                                <div className="content">
                                <h3>500 INR</h3>
                                <p>Total Ammount</p>
                                </div>
                                  
                                    <i class="fa-solid fa-money-bill-wave"></i>
                              </div>
                
                             </div>
                             <div className="col-xl-4 mb-xl-0 mb-3">
                              <div className="wallet_box">
                                <div className="content">
                                <h3>50 INR</h3>
                                <p>Pending Ammount</p>
                                </div>
                                  
                                    <i class="fa-solid fa-money-bill-wave"></i>
                              </div>
                
                             </div>
                             <div className="col-xl-4 mb-xl-0 mb-3">
                              <div className="wallet_box">
                                <div className="content">
                                <h3>300 INR</h3>
                                <p>Tranfer Ammount</p>
                                </div>
                                  
                                    <i class="fa-solid fa-money-bill-wave"></i>
                              </div>
                
                             </div>

                             <div className="col-xl-12">
                              <div className="das_table">
                              <DataTable
			columns={columns}
			data={data}
		/>
                              </div>
                             </div>
                             </div>
                             </div>
                  </div>
                  
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

export default Dashboard




