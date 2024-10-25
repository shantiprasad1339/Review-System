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

<h1>Login</h1>

<div class="input-box pt-3">
    <input type="text" placeholder="Username" />
    <i class='bx bxs-user'></i>
</div>

<div class="input-box">
    <input type="password" placeholder="Password" />
    <i class='bx bxs-lock-alt' ></i>
</div>

<div class="remember-forget">
    <label><input type="checkbox" />Remember me</label>
    
</div>

<button type="submit" class="btn">Login</button>

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