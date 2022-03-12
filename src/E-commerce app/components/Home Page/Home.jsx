import React from "react";
import Products from "../Products";
import './Homepage.css'

const Home = () => {

  return (
    <>


<div id="demo" className="carousel slide" data-bs-ride="carousel">


  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div className="carousel-inner slider">
    <div className="carousel-item active">
      <img src="/assets/1.jpg" alt="Los Angeles" className="d-block" style={{width: "100%"}}/>
      <div className="carousel-caption">
        <h3>Clothing's Store</h3>
        <p className="lead text-white">Latest and new design clothes both for men and women are available</p>
      </div>
    </div>
    <div className="carousel-item slider">
      <img src="/assets/2.jpg" alt="Chicago" className="d-block" style={{width: "100%"}}/>
      <div className="carousel-caption">
        <h3>Jewelery's Store</h3>
        <p className="lead text-white">New Design Jeweleries are available with discount</p>
      </div> 
    </div>
    <div className="carousel-item slider">
      <img src="/assets/3.jpg" alt="New York" className="d-block" style={{width: "100%"}}/>
      <div className="carousel-caption">
        <h3>Electronic's Store</h3>
        <p className="lead text-white">A great electronics devices are available</p>
      </div>  
    </div>
  </div>
  
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon slider_btn"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon slider_btn"></span>
  </button>
</div>
     
       <Products/>
    </>
  );
};

export default Home;
