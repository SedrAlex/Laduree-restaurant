import React, { useState } from 'react'
import'./MenuCard.css'
import { RiStarSFill } from 'react-icons/ri';
import {RiShoppingBagLine}from 'react-icons/ri';
import bag from '../../assets/images/bag.png'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
const MenuCard = (props) => {
  
  const [quantity,setquantity]=useState(1)

    const {_id,name,image,price,category} = props.item;
    const dispatch  = useDispatch();
   
    const handleAddToCart = () => {
     
      dispatch(addToCart(props.item,quantity));
    };
    
    

  return (
    <div className=' single__product'>
    <div className='product__img'>

         <img src={image} alt=""  className='w-100'/>
    </div>
    <div className='product__content'>
          <div className='rating d-flex align-items-center '>
           <span><RiStarSFill /></span>
           <span><RiStarSFill /></span>           
           <span><RiStarSFill /></span>           
           <span><RiStarSFill /></span>
           <span><RiStarSFill /></span>

           
 </div>
 <h6>{name}</h6>
  <div className='d-flex align-items-center justify-content-between'>
          <span className='price d-flex align-items-center'> <span>{'$' + price}</span></span>
          <span 
          className='shopping__icon ' onClick={handleAddToCart}> 
          <img src = {bag} />
 </span>
  </div>
</div>
</div>  
)
}
export default MenuCard