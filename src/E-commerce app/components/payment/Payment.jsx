import React from 'react'
import './payment.css'
const Payment = () => {
  return (
    <>
      <section className="credit-card">
		 <div className="container">
		  
			<div className="card-holder">
			  <div className="card-box bg-news">
		       <div className="row">
				<div className="col-lg-6">
				 <div className="img-box">
				   <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid" />
				 </div>
				</div>

				<div className="col-lg-6">				
				<form>
				  <div className="card-details">
					<h3 className="title">Credit Card Details</h3>
					<div className="row">
					  <div className="form-group col-sm-7">
					   <div className="inner-addon right-addon">
						<label for="card-holder">Card Holder</label>
                       
						<input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
					   </div>	
					  </div>
					  <div className="form-group col-sm-5">
						<label for="">Expiration Date</label>
						<div className="input-group expiration-date ">
						  <input type="text" className="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
						  <span className="date-separator">/</span>
						  <input type="text" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
						</div>
					  </div>
					  <div className="form-group col-sm-8">
					   <div className="inner-addon right-addon">
						<label for="card-number">Card Number</label>
                        
						<input id="card-number" type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
					   </div>	
					  </div>
					  <div className="form-group col-sm-4">
						<label for="cvc">CVC</label>
						<input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
					  </div>
					  <div className="form-group col-sm-12">
						<button type="button" className="btn btn-primary btn-block proceedBTN">Proceed</button>
					  </div>
					</div>
				  </div>
				</form>				
				
				</div>
		  
		       </div>
			  </div>
			</div>		 
			
		 </div>
		</section>
    
    </>
  )
}

export default Payment