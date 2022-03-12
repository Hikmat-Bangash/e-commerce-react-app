import React from 'react'
import './singup.css'
const Signup = () => {
  return (
    <>
    <div class="containerr">
	<div class="screen">
        
		<div class="screen__content">
            
			<form class="SignUP">
            {/* Company title */}
            <div className="store_titlee">
            <h2> HKB Store</h2>
            </div>
			<div className="page">
            <small> Register page</small>
			</div>

               <div className="signUp_inputs">
				<div class="sign_up">
                <i class="fa fa-user sign_icon" aria-hidden="true"></i>
					<input type="text" class="signup_input" placeholder="First Name"/>
				</div>

				<div class="sign_up">
                <i class="fa fa-user sign_icon" aria-hidden="true"></i>
					<input type="text" class="signup_input" placeholder="Last Name"/>
				</div>

				<div class="sign_up">
                <i class="fa fa-envelope sign_icon" aria-hidden="true"></i>
					<input type="email" class="signup_input" placeholder="Enter your email"/>
				</div>
        
				<div class="sign_up">
                <i class="fa fa-lock sign_icon" aria-hidden="true"></i>
					<input type="password" class="signup_input" placeholder="Password"/>
				</div>
                 
				<div class="sign_up">
                <i class="fa fa-lock sign_icon" aria-hidden="true"></i>
					<input type="password" class="signup_input" placeholder="Re-type password"/>
				</div>
				</div>

				<button class="button signup__submit">
					<span class="button__text ">Register</span>
					<i class="fa fa-check  button__icon fa-2x" aria-hidden="true"></i>
                   
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon "><i class="fa fa-instagram " aria-hidden="true"></i></a>
					<a href="#" class="social-login__icon "><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
					<a href="#" class="social-login__icon "><i class="fa fa-twitter" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    
    </>
  )
}

export default Signup

