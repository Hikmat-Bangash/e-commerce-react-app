import React from 'react'
import './login.css'
const Login = () => {
  return (
    <>
    <div class="containerr" >
	<div class="screen" >        
		<div class="screen__content">
            
			<form class="login">
            {/* Company title */}
            <div className="store_title">
            <h2> HKB Store</h2>
            </div>
            <small> Login page</small>

				<div class="login__field">
                <i class="fa fa-user login__icon" aria-hidden="true"></i>
					<input type="text" class="login__input" placeholder="User name / Email"/>
				</div>
				<div class="login__field">
                <i class="fa fa-lock login__icon" aria-hidden="true"></i>
					<input type="password" class="login__input" placeholder="Password"/>
				</div>
				<button class="button login__submit">
					<span class="button__text ">Log In</span>
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

export default Login