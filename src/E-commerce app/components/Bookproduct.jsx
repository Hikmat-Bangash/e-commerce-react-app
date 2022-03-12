import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import {useDispatch } from 'react-redux'
import {AddCart} from '../Redux_Concept/Action'
import { IconButton, Tooltip } from '@material-ui/core'

const Bookproduct = () => {

  const [product, setproduct] = useState([])
  const [loading, setloading] = useState(false)
  const {id} = useParams();

  const dispatch = useDispatch();
// add product to shopcart using Redux dispatch function
  const AddProduct = (product)=>{
     dispatch(AddCart(product));
  }

  // navigation back method definition
  const navigate = useNavigate();
  const handleClick=()=>{
        navigate(-1);
  }
 useEffect(() => {
    
   const getProducts = async() =>{
       setloading(true)
       const products = await fetch(`http://fakestoreapi.com/products/${id}`);
       const response = await products.json();
       setproduct(response)
       setloading(false);      
   }
   // calling method
    getProducts();
 }, [])
 
 // showing loading
 const Loading = () =>{
     return(
         <>         
          <div className="col-md-6">
            <Skeleton height={400} width={360}/>
            </div>
            <div className="col-md-6">
              <Skeleton height={30} width={170}/>
              <Skeleton height={90} width={480}/>
              <Skeleton height={50} width={240}/>
              <Skeleton height={30} width={100}/>
              <Skeleton height={140} width={600}/>
              <Skeleton height={50} width={200}/>
              </div>
         </>
     )
 }


// showing booked product
const ShowProduct = () =>{
    return(
        <>
         <div className="col-md-6">
           <img src={product.image} alt={product.title} width="400px" height="400px" />     
        </div>

        <div className="col-md-6 ">
         <h4 className='text-uppercase text-black-50'> {product.category}</h4>
          <h2 className='display-8 text-dark-30'>{product.title}</h2>  
          <h3 className='display-6 fw-bold '>Price: ${product.price }</h3>
          <h5 className=''>Rating: {product.rating && product.rating.rate}⭐</h5>
          <p className='lead fw-normal mt-3'>{product.description}</p>
          <div className="buttons mt-2">
             <button className='btn btn-outline-dark me-2' onClick={()=>{AddProduct(product) }}> Add-to-Cart</button>
             <Link to="/cart" className='btn btn-outline-dark me-1'> Go-to-Cart</Link>
           </div>
         </div>
        </>
    )
}

  return (
    <>
      <div className="container py-5">
          <div className="row mt-5">

              <div className="back float-left" >
              <Tooltip title="go back" arrow>
                  <IconButton>
                  <i class="fa fa-arrow-left" aria-hidden="true" onClick={handleClick}></i>
                </IconButton>
                </Tooltip>                
              </div>

             {loading ? <Loading/> : <ShowProduct/>}  
                
          </div>
     </div>
    </>
  )
}

export default Bookproduct