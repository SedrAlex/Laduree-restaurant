import React, { useLayoutEffect, useState } from 'react'

import Checkout from '../../components/Checkout/Checkout'
import style from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import MenuCard from '../../container/MenuCard/MenuCard';
import { NavLink } from "react-router-dom";
import { addToCart, decreamentQuantity, incrementQuantity, removeFromCart } from '../../actions/cartActions';
import emptyCart from '../../assets/images/emptycart.png'
export default function Cart() {
  const cart = useSelector(state=>state.cartReducer)
  const cartItems = cart.cartItems

  const [coShown, setCOShown] = useState(false);
  const dispatch  = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecreament = (item) => {
    dispatch(decreamentQuantity(item));
  };
  const DeleteFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('noscroll-web');
    document.body.classList.add('trans');
  }, []);

  const totalPrice = () => {
        let totalAmout = 0;
        cartItems.forEach(item => {
            totalAmout += item.price * item.quantity ;
        })
        return totalAmout;
    }
    const totalCost = totalPrice();



  return (
    <div className={style.page}>
      <div className={style.wrapper}>
        
        {cartItems.length > 0 ? (
          <div className={style.items}>
            {cartItems.map((cartItem)  => {
              return <div key = {cartItem._id} className={style.item}>
                <div className={style.item_wrapper}>
                  <div className={style.item_remove}>
                    <button type="button" >
                      
                      <span className="material-icons" onClick={() => DeleteFromCart (cartItem)}>close</span>
                    </button>
                  </div>
                  <div className={style.item_image}>
                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                    />
                  </div>
                  <div className={style.item_details}>
                    <h3>{cartItem.name}</h3>
                   
                  </div>
                  <div className={style.item_controller}>
                    {/* <div className="text">Quantity</div> */}
          
                    <button type="button" onClick={() => handleDecreament (cartItem)}>
                      <i className="material-icons">remove</i>
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button type="button" onClick={() => handleIncrement(cartItem)}>
                      <i className="material-icons">add</i>
                    </button>
                  </div>
                  <div className={style.item_price}>
                     {'$' + cartItem.price }
                  </div>
                </div>
              </div>
              
})}
          </div>

        ) : (
          <div className={style.empty}>
            <img src= {emptyCart}   />
          </div>
        )}

        <div
          className={`${style.checkout} ${coShown ? style.checkout_shown : ''}`}
        >
          <h2>Order Summary</h2>
          <div className={style.total_box}>
            <div className={style.total_box_content}>
              <div className={style.total_item}>
                <div className={style.price_text}>Bag Total</div>
                <div className={style.price_text}>{totalCost.toFixed(2)}</div>
              </div>

              <div className={style.total_item}>
                <div className={style.price_text}>Shipping</div>
                <div className={style.price_text}>Free</div>
              </div>

              <div className={`${style.total_item} ${style.coupon}`}>
                <div className="text">Discount</div>
                <div className={style.discount}>0.00</div>
              </div>

              <div className={style.total_item}>
                <div className={style.price_text}>Total</div>
                <div className={style.price_text}>{totalCost.toFixed(2)}
                </div>
              </div>
            </div>

            <div className={style.checkout_footer}>
              <Checkout subtotal={totalCost}/>
                      <NavLink to='/Boitque' >
                                    <button>
                                      Return to shop
                                    </button>
                      </NavLink>

            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={(e) => setCOShown(!coShown)}
        className={`${style.toggle_btn} ${coShown ? style.toggle_close : ''}`}
      >
        <span className="material-icons">keyboard_arrow_left</span>
      </button>
    </div>
  );
}

