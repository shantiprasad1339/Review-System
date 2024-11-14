import React,{useEffect,useState} from 'react'

import DataTable from 'react-data-table-component';
import bid_1 from '../../images/bid/bid_1.jpg'
import bid_2 from '../../images/bid/bid_2.jpg'
import bid_3 from '../../images/bid/bid_3.jpg'
import { Footer } from '../footer/footer';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/favicon.png'
import Navbar from '../navbar/Navbar';
 import axios from 'axios';
 import Loader from "react-js-loader";
 import {  useNavigate } from "react-router-dom";

function Dashboard() {
  const[clientsData,setClientsData] = useState()
  const[eyeToggle,setEyeToggle] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const[otp,setOtp] = useState()
  const[otpMsg,setOtpMsg]=useState("Enter Validation Otp")
  const [text_color,setText_color]=useState('')
  const[loaderToggle,setLoaderToggle] = useState(false)

  const[profileData,setProfileData] = useState({
    username: localStorage.getItem("username") || '',
    email: localStorage.getItem("userEmail") || '',
    password:'',
    oldpassword:'',

  })
  const navigate = useNavigate()
 
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



  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("userEmail");
    
    axios
      .post("http://64.227.167.55:8080/A2G/token/refresh/", {
        refresh: refreshToken,
      })
      .then((response) => {
        GetclientsData(response.data.access);

      
      })
      .catch((error) => alert('LogIn Again!'));
  }, []);
  function GetclientsData(token){
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer" + " " + token,
    };
    axios.get("http://64.227.167.55:8080/A2G/Jointest/", {
      headers,
     
    })
      .then(response => setClientsData(response.data.data))
      .catch(error =>  alert('LogIn Again!'));
  }
  const logOutFn = () => {
   
    
    localStorage.clear();
    navigate("/login");
      
     
    
  };
  
  function verify_otp() {
    axios.post('http://64.227.167.55:8080/A2G/verify_otp/', {
      email: profileData.email,
      otp: otp
    })
    .then((res) => {
      console.log("OTP verification successful:", res.data);
      if(res.data.msg == "Varification Successfull !"){
        setShowModal(false); 
        navigate('/login');
      }else{
        setOtpMsg(res.data.msg)
        setText_color('red')
      }
    })
    .catch((error) => {
      console.error("OTP verification error:", error.response?.data);
    });
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
function mailSender(){
  const accessToken = localStorage.getItem("accessToken");
  setLoaderToggle(true)
  const changePasswordData = {
    password: profileData.password,
    re_password: profileData.oldpassword,
    username: profileData.username,
    email: profileData.email
  };
  // console.log(accessToken);
  
  axios.post("http://64.227.167.55:8080/A2G/change-pass/", changePasswordData,{
    headers: {
      "Authorization": "Bearer " + accessToken,
    }
  }
  
  )
  .then(response => {
    console.log(response.data);
    if(response.data.msg == "OTP sent to your email."){
      setShowModal(true)
    }
    alert(response.data.msg)
    navigate('/')
  })
  .catch(error =>{
    console.log(error.response.data.msg.password);
    if(error.response.data.code == "token_not_valid"){

      alert('Please login Again')
navigate('/login')
    }
    alert(error.response.data.msg.password)
    window.location.reload()
  });
}
  return (
    <>
    <Navbar/>
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
                  <button class="nav-link" onClick={logOutFn}>Logout</button>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="dashboard_contant">
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    <div className="profile_box">
                    <div className="row">
      <div className="col-xl-6 mb-4">
        <div className="form_box">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            id="username"
            value={profileData.username}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="col-xl-6 mb-4">
        <div className="form_box position-relative">
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            name="email"
            id="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
         
        </div>
      </div>

      <div className="col-xl-6 mb-4">
        <div className="form_box">
          <label htmlFor="oldpassword">Change Password</label>
          <input
            type={eyeToggle ? 'password' : 'text'}
            name="oldpassword"
            id="oldpassword"
            value={profileData.oldpassword}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="col-xl-6 mb-4">
        <div className="form_box position-relative">
          <label htmlFor="password">Re enter Password</label>
          <input
            type={eyeToggle ? 'password' : 'text'}
            name="password"
            id="password"
            value={profileData.password}
            onChange={handleInputChange}
          />
          {eyeToggle ? (
            <i
              className="fa-regular fa-eye position-absolute"
              style={{ cursor: 'pointer', top: '51px', right: '20px' }}
              onClick={() => setEyeToggle(!eyeToggle)}
            ></i>
          ) : (
            <i
              className="fa-regular fa-eye-slash position-absolute"
              style={{ cursor: 'pointer', top: '51px', right: '20px' }}
              onClick={() => setEyeToggle(!eyeToggle)}
            ></i>
          )}
        </div>
      </div>

      <div className="col-xl-12 mb-4">
        <div className="form_box">
          <button onClick={mailSender}>Submit {loaderToggle? <Loader type="spinner-default" bgColor={"white"} size={40}/>:''}
</button>
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
                clientsData && clientsData.map((filterdata ,f1) =>
                  
                  
                  {
                   
                    
                    
                    return(
                  <div className="col-xxl-12">
                    <Link to="">
                  <div className="filter_box">
                  <div className="image">
                    <img src={'https://'+filterdata.link} alt="" />
                  </div>
                  <div className="content">
                    <div className="box_1 w-100">
                    <h4>{filterdata.headding}
                    </h4>
                    <span className='price'>Budget  INR – {filterdata.client_details.cost} INR</span>
                    <span className='location'><i class="fa-solid fa-location-dot"></i> {filterdata.location}</span>
                    <span className='task'>Total Review Task {filterdata.client_details.total_reviews}</span>
                    <p> <h4>Your Review:</h4> {filterdata.review}</p>
             
                  <button className='btn_review_sub'>
                   
                  {filterdata.verify_status}
                  </button>
                    </div>
                    
                  </div>
                
  
                </div>
                </Link>
                </div>
                )})
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
  {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: "block" }} aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"style={{ color: text_color }} id="exampleModalLabel">{otpMsg}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Enter OTP" onChange={(e)=>setOtp(e.target.value)}/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button onClick={verify_otp} className="btn btn-primary">Submit OTP</button>
              </div>
            </div>
          </div>
        </div>
      )}
<Footer />
    </>
  )
}

export default Dashboard




