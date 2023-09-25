import React, { useEffect } from 'react'
import styles from "./Orders.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../actions/orderActions';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import baked from '../../assets/images/bake.png'
import paid from '../../assets/images/paid.png'
import bike from '../../assets/images/bike.png'
import delivered from '../../assets/images/delivered.png'
import checked from '../../assets/images/checked.png'


const Orders = () => {
  const dispatch = useDispatch();

useEffect(() => {
      dispatch(getUserOrders())
},[])

const statusClass = (status,index) => {
  if (index - status < 1) return styles.done;
  if (index - status === 1) return styles.inProgress;
  if (index - status > 1) return styles.undone;
};



const orderstate = useSelector(state => state.getUserOrdersReducer)
const{orders, error, loading} = orderstate



  
return (
<>
<div className={styles.main_container}>
  {loading && (<Loading/>)}
  {error && (<Error error='Something went wrong' />)}  
  {orders && orders.map(order => {
    const { _id, name, email, orderAmount, status , } = order; 
    return <div className={styles.container}>
 
     <div className={styles.left}>
   
               
       <div className={styles.row}>
      <table  className={styles.table}>
      
     <tr className={styles.trTitle}>
            <th>Order ID</th>
            <th>Transation ID</th>
            <th>Customer</th>
            <th>Email</th>
            <th>City</th>
          </tr>
           
            <tr className={styles.tr}>
            <td>
              <span className={styles.id}>{_id}</span>
            </td>
            <td>
              <span className={styles.id}>{order.transactionId}</span>
            </td>
            <td>
              <span className={styles.name}>{name}</span>
            </td>
            <td>
              <span className={styles.address}>{email}</span>
            </td>
            <td>
              <span className={styles.total}>{order.shippingAddress.city}</span>
            </td>
          </tr>
        
        </table>
        </div>
  


          
  <div className={styles.row}>
    <div className={statusClass(status,0)}>
      <img src={paid} width={100} height={100} alt="" />
      <span>Payment</span>
      <div className={styles.checkedIcon}>
        <img
          className={styles.checkedIcon}
          src={checked}
          width={20}
          height={20}
          alt=""
        />
      </div>
    </div>

    <div className={statusClass(status,1)}>
      <img src={baked }width={100} height={100} alt="" />
      <span>Preparing</span>
      <div className={styles.checkedIcon}>
        <img
          className={styles.checkedIcon}
          src={checked}
          width={20}
          height={20}
          alt=""
        />
      </div>
    </div>
    <div className={statusClass(status,2)}>
      <img src={bike}width={100} height={100} alt="" />
      <span>On the way</span>
      <div className={styles.checkedIcon}>
        <img
          className={styles.checkedIcon}
          src={checked}
          width={20}
          height={20}
          alt=""
        />
      </div>
    </div>
    <div className={statusClass(status,3)}>
      <img src={delivered} width={100} height={100} alt="" />
      <span>Delivered</span>
      <div className={styles.checkedIcon}>
        <img
          className={styles.checkedIcon}
          src={checked}
          width={20}
          height={20}
          alt=""
        />
      </div>
    </div>
  </div>

     </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${orderAmount}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${orderAmount}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  })}
    </div>
</>

  );
  


};

     

        
  


export default Orders
