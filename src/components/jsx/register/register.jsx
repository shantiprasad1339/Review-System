import React from 'react'
 import { Link } from 'react-router-dom'
import { Footer } from '../footer/footer'
 
function Login() {
    return (
        <>
         
        <section className="login_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 mx-auto">
                        <div className="login_form_inner">
                        <form action="">

<h1>Register Now</h1>
  <div className="row">

  <div className="col-xl-6">
  <div class="input-box pt-3">
    <input type="text" placeholder="Username" />
    <i class='bx bxs-user'></i>
</div>
  </div>

  
  <div className="col-xl-6">
  <div class="input-box pt-3">
    <input type="email" placeholder="Email" />
    <i class='bx bxs-user'></i>
</div>
  </div>

  
  <div className="col-xl-6">
  <div class="input-box pt-3">
    <input type="password" placeholder="Password" />
    <i class='bx bxs-user'></i>
</div>
  </div> 

  
  <div className="col-xl-6">
  <div class="input-box pt-3">
    <input type="password" placeholder="Re-Password" />
    <i class='bx bxs-user'></i>
</div>
  </div>
   
  <div className="col-xl-12">
  <div class="input-box pt-3">
    <input type="number" placeholder="Mobile Number" />
    <i class='bx bxs-user'></i>
</div>
  </div>
  </div>


 

<div class="remember-forget">
    <label><input type="checkbox" />Remember me</label>
    
</div>

<button type="submit" class="btn">Login</button>

<div class="register-link">
    <p>you have an account? <br />
    <Link to="/login">Login Now</Link> </p>
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