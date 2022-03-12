import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const state = useSelector((state)=> state.CartHandler);
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
  
            <h3 className="display-7 fw-bold " style={{color: "rgb(70, 216, 250)"}}> 💦HKB Store</h3>
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"sig
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav fw-bold mx-auto mb-2 mb-lg-0 display-7">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="button">
             <Link to="/sign" className=" me-3">
             <Tooltip title="Sign in" arrow>
                  <IconButton>
                  <i className="fa fa-sign-in fa-x" aria-hidden="true"> </i>
                </IconButton>
                </Tooltip>             
             </Link>

             <Link to="/register" className=" me-3">
                 <Tooltip title="Sign up" arrow>
                  <IconButton>
                  <i className="fa fa-sign-out" aria-hidden="true"> </i>
                </IconButton>
                </Tooltip>             
             </Link>          

            <Link to="/cart" className=" me-1">             
             <Badge badgeContent={state.length === 0 ? 0: state.length} color="secondary">
             <ShoppingCartOutlined color="action" />
             </Badge>             
            </Link>

          </div>


          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
