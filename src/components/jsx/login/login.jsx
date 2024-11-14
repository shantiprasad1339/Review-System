import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Footer } from '../footer/footer'
import Navbar from "../navbar/Navbar.jsx";

function Login() {
    const [email,setEmail] = useState()
    const[password,setPassword] = useState()
    const[eyeToggle,setEyeToggle] = useState(true)
    const navigate = useNavigate()

       function  handleLogin (event)  {
        event.preventDefault();

         try {
             axios.post("http://64.227.167.55:8080/A2G/auth/login/", {
             email: email,
             password: password,
           },
           ).then((res)=>{
               console.log(res.data);
               localStorage.setItem('username',res.data.user.username)

localStorage.setItem('accessToken',res.data.access)
localStorage.setItem('refreshToken',res.data.refresh)
localStorage.setItem('userEmail',res.data.user.email)

if(res.statusText == 'OK'){
    // window.location.reload()
    navigate('/')
}
           }).catch((err)=>{
            console.log('api error',err);
            alert("Please Enter Valid Email, Password")
           })
         } catch (error) {
           console.error("There was an error logging in:");
          
         }
      };
      
    return (
        <>
    <Navbar />
        <section className="login_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 mx-auto">
                        <div className="login_form_inner">
                        <form action="">

<h1>Login</h1>

<div class="input-box pt-3 mb-4">
    <input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
    <i class='bx bxs-user'></i>
</div>

<div class="input-box d-flex align-content-center position-relative" >
    <input type={eyeToggle?'password':'text'} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
    {
        eyeToggle?

        <i class="fa-regular fa-eye position-absolute" style={{cursor:'pointer'}} onClick={()=>setEyeToggle(!eyeToggle)}></i>
        :<i class="fa-regular fa-eye-slash position-absolute" style={{cursor:'pointer'}} onClick={()=>setEyeToggle(!eyeToggle)}></i>
    }
    <i class='bx bxs-lock-alt' ></i>
</div>

<div class="remember-forget">
    {/* <label><input type="checkbox" />Remember me</label> */}
    
</div>

<button type="submit" class="btn" onClick={(e)=>handleLogin(e)}>Login</button>

<div class="register-link">
    <p>Don't have an account? <br />
  <Link to="/register">Register</Link></p>
</div>

</form>
                        </div>
                
                    </div>
                </div>
            </div>
        </section>
      <Footer />

        </>
    )
}

export default Login 