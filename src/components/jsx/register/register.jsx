import React, { useState,useEffect  } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../footer/footer";
import Loader from "react-js-loader";

function Login() {
  const [userData, setUserData] = useState({
    Name: '',
    email: '',
    password: '',
    password2: '',
    mobile: ''
  });
  const[loaderToggle,setLoaderToggle] = useState(false)
  const[eyeToggle,setEyeToggle] = useState(true)

  const[otpMsg,setOtpMsg]=useState("Enter Validation Otp")
  const [showModal, setShowModal] = useState(false);
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');

const[otp,setOtp] = useState()
const [text_color,setText_color]=useState('')
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
const navigate = useNavigate()
  function signupfn(event) {
    event.preventDefault();
    setLoaderToggle(!loaderToggle)
    axios.post('http://64.227.167.55:8080/A2G/register/', {
      username: userData.Name,
      email: userData.email,
      password: userData.password,
      password2: userData.password2,
      mobile: userData.mobile,
      ip_address: ipAddress, 
      location:location,
    })
    .then((res) => {
      console.log("Registration successful:", res.data.msg);
      setLoaderToggle(false)

      if(res.data.msg == "Registration successful. OTP sent to your email."){
        
        setShowModal(true)
      }
    })
    .catch((error) => {
      
      const obj =error.response.data.data;
      const firstValue = obj[Object.keys(obj)[0]];
      console.error(error);
      alert(firstValue[0])
      setLoaderToggle(false)
         });
  }

  function verify_popup() {
    console.log('OTP sent');

  }

  function verify_otp() {
    axios.post('http://64.227.167.55:8080/A2G/verify_otp/', {
      email: userData.email,
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
  useEffect(() => {
    const fetchIpAndLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const response2 = await axios.get("https://api.ipify.org?format=json");
        setIpAddress(response2.data.ip);
        console.log(response2.data);
        
        setLocation(response.data.city);
      } catch (error) {
        console.error("Error fetching IP address and location:", error);
      }
    };

    fetchIpAndLocation();
  }, []);

  return (
    <>
      <section className="login_area">
        <div className="container">
          <div className="row">
         
              
                
                
            <div className="col-xl-5 mx-auto">
              <div className="login_form_inner">
                <form onSubmit={signupfn}>
                  <h1>Register Now</h1>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="input-box pt-3">
                        <input
                          type="text"
                          name="Name"
                          placeholder="Name"
                          value={userData.username}
                          onChange={handleChange}
                        />
                        <i className="bx bxs-user"></i>
                      </div>
                    </div>

                    <div className="col-xl-6 position-relative">
                      <div className="input-box pt-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={userData.email}
                          onChange={handleChange}
                        />
                        <i className="bx bxs-user"></i>
                        <p
                          className="position-absolute verify-btn"
                          onClick={verify_popup}
                        
                        >
                         
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="input-box pt-3 mb-4">
                        <input
                         type={eyeToggle?'password':'text'}
                          name="password"
                          placeholder="Password"
                          value={userData.password}
                          onChange={handleChange}
                        />
                        <i className="bx bxs-user"></i>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="input-box  position-relative mt-3">
                        <input
                        type={eyeToggle?'password':'text'}
                          name="password2"
                          placeholder="Re-Password"
                          value={userData.password2}
                          onChange={handleChange}
                        />
                        <i className="bx bxs-user"></i>
                        {
                          eyeToggle?
                          
                          <i class="fa-regular fa-eye position-absolute" style={{cursor:'pointer'}} onClick={()=>setEyeToggle(!eyeToggle)}></i>
                          :<i class="fa-regular fa-eye-slash position-absolute" style={{cursor:'pointer'}} onClick={()=>setEyeToggle(!eyeToggle)}></i>
                        }
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="input-box pt-3">
                        <input
                          type="number"
                          name="mobile"
                          placeholder="Mobile Number"
                          value={userData.mobile}
                          onChange={handleChange}
                        />
                        <i className="bx bxs-user"></i>
                      </div>
                    </div>
                  </div>

                  {/* <div className="remember-forget">
                    <label>
                    <input type="checkbox" />
                    Remember me
                    </label>
                    </div> */}
<div className="position-relative d-flex justify-content-center ">
<button type="submit" className="btn"   data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo">
                            {
                              loaderToggle?'':' Signup'
                            }
                   
                  </button>
                  <div className="position-absolute">
{
  loaderToggle?

  <Loader type="spinner-default" bgColor={"white"} size={40} />:''
}
                  </div>

</div>
                
                  <div className="register-link">
                    <p>
                      you have an account? <br />
                      <Link to="/login">Login Now</Link>
                    </p>
                  </div>
                </form>
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
  );
}

export default Login;
