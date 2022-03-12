import { Delete, DeleteForever, DeleteOutlineTwoTone, Payment } from "@material-ui/icons";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import {DelCart} from '../Redux_Concept/Action'


const Cart = () => {

  const item = useSelector((state) => state.CartHandler);
  const state = useSelector((state) => state.CartHandler);
  const dispatch = useDispatch();

// deleting product from shopping cart
const Delproduct = (product)=>{
  console.log(product)
   dispatch(DelCart(product))
}

// returning all shopping cart products
  const ShoppingCart = () => {
    return (
      <>
        {item.map((product) => {
          return (
            <>
            <div className="row py-3 border border-tp-0">
              <div className="col-md-4 py-2 offset-md-2">
                <img
                  src={product.image}
                  alt={product.title}
                  width="220px"
                  height="220px"
                />
              </div>

              <div className="col-md-4 py-3 ">
                <p className=" fs-normal text-uppercase text-black-50">
                 
                  {product.category}
                </p>
                <h6 className=" fw-bold text-uppercase text-danger">{product.title}</h6>
                <h5 className="fw-bold text-primary">Price: ${product.price}</h5>
                <h6 className=" text-secondary">
                  Rating: {product.rating && product.rating.rate}<i class="fa fa-star" aria-hidden="true"></i>
                </h6>

                <div className="buttons d-flex mt-1">
                  <div className="me-1"
                    onClick={()=>Delproduct(product)}
                  >
                   <Tooltip title="Delete item" arrow>
                  <IconButton>
                 <Delete />
                </IconButton>
                </Tooltip>
                  </div>

                  <Link to="/cart/payment" className="payment" > 
                  <Tooltip title="Payment" arrow>
                  <IconButton>
                 <Payment />
                </IconButton>
                </Tooltip>
                   </Link>
                </div>

              </div>
              
              </div>
            </>
          );
        })}
      </>
    );
  };

  // IF shopping cart is empty
  const Empty = ()=>{
    return(
      <>
       <div className="row py-5">
         <div className="col-md-4 offset-4 ">
         <img src="/assets/empty_cart.jpeg" width="300px" height="250px" alt="404" />
         <h4 className="display-8 fw-bold py-3 text-secondary">Your Shopping Cart is Empty😳</h4>
         </div>
         </div>
      
      </>
    )
  }
  return (
    <>
      <div className="container py-5 mt-3">
         {state.length !== 0 ? <ShoppingCart /> : <Empty/> } 
          
      </div>
    </>
  );
};

export default Cart;
