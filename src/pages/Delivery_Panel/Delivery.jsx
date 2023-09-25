import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import styles from "./Delivery.module.css";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Success from '../../components/Success';
import { deliverOrders, getAllOrders } from '../../actions/orderActions';
import NewArrivals from '../../container/NewArrival/NewArrival';
import { getAllBoutiques } from '../../actions/BoutiqueActions';

const Delivery = () => {

  

  const status = ["preparing", "on the way", "delivered"];

  const userstate = useSelector(state => state.loginUserReducer)
  const {currentUser} = userstate
  const dispatch = useDispatch()

  const getorderstate = useSelector(state => state.getAllOrdersReducer)
  const {error,loading,orders} = getorderstate
  const [orderList, setOrderList] = useState(orders);



  useEffect(() => {

      if(currentUser.role !== 'deliveryman'){
        window.location.href= '/'
      }
      dispatch(getAllOrders())
  },[])

  

  return (
    
    <div   className={styles.main_container}> 

                 {loading && (<Loading/>)}
                    {error && (<Error error='Some thing went wrong' />)}
               <h1 className={styles.title}>Orders</h1>
                 <table className='table table-dark table-striped table-bordered'>
                   <thead>
                 <tr >
                            <th>Order Id</th>
                            <th>transaction Id</th>

                            <th>Customer</th>
                            <th>email</th>
                            <th>Amount</th>
                             <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                       </tr>
                  </thead>
         <tbody>
          {orders && orders.map(order => {
              return <tr>
                    <td>{order._id}</td>
                    <td>{order.transactionId}</td>

                    <td>{order.name}</td>
                    <td>{order.email}</td>

                    <td>${order.orderAmount}</td>
                    <td>{order.createdAt.substring(0,10)}</td>
                     <td>{status[order.status]}</td>
                     <td>

                     {order.status < 2 
                    ? <button  className= {styles.button}onClick={() => {dispatch(deliverOrders(order._id,orders))}}>Next Stage</button> 
                    : <span>Is Delivered</span>
                     }
                </td>
              </tr>

         })}   
         
         
          </tbody>
         </table>
        
     </div>    

  );
};
 

export default Delivery