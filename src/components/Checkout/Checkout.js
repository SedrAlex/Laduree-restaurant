import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector, } from "react-redux";
import { placeOrder } from '../../actions/orderActions';
import Loading from '../Loading'
import Success from '../Success'
import Error from '../Error'



export default function Checkout({ subtotal }) {

  const orderstate = useSelector((state) => state.placeOrderReducer)
  
  const {loading,success,error}=orderstate
  
  const dispatch = useDispatch()
  function tokenHandler(token) {
    setTimeout(() => dispatch(placeOrder(token, subtotal)), 0);
    console.log(token);
 }
 
  
    return (
    <div>

              {loading && (<Loading/>)}
              {success && (<Success success='Your Ordered Placed successfully' />)}
              {error && (<Error error='Something went wrong' />)}

                 <StripeCheckout
                  amount={ subtotal * 100}
                  billingAddress   // By adding this line, 'billingAddress' will be enabled
                   shippingAddress
                  token={tokenHandler}
                  stripeKey='pk_test_51NDWMnDnOnVRIDi92NbgY9ebRx7zyZtSdTjRGOdGjv9ICqwK3zQg3VpKAKpUyP071p7DPtfYH0v5naP6iPxRKI1w00j76ULrXE'
                  currency="USD"
                 >
     
                          <button>Place Order </button>
                 </StripeCheckout>
         
    </div>
  )
}
