import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
const currentUser = getState().loginUserReducer.currentUser
const cartItems = getState().cartReducer.cartItems
  try {
   const response= await axios.post("http://localhost:5000/api/boutique/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};

export const getUserOrders= () => async (dispatch,getState) => {
  const currentUser = getState().loginUserReducer.currentUser

  dispatch({ type: 'GET_USER_ORDERS_REQUEST'});
    
 try {
     const response = await axios.post("http://localhost:5000/api/boutique/orders/getuserorders",{userid : currentUser._id})  
console.log(response);
    dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload : response.data });
  } catch (error) {
    dispatch({ type: 'GET_USER_ORDERS_FAILED', payload : error});
    console.log(error);
  }
};

export const getAllOrders= () => async (dispatch,getState) => {
  const currentUser = getState().loginUserReducer.currentUser

  dispatch({ type: 'GET_ALLORDERS_REQUEST'});
    
 try {
     const response = await axios.get("http://localhost:5000/api/boutique/orders/getallorders")  
     console.log(response);
    dispatch({ type: 'GET_ALLORDERS_SUCCESS', payload : response.data });
  } catch (error) {
    dispatch({ type: 'GET_ALLORDERS_FAILED', payload : error});
    console.log(error);
  }
};


export const deliverOrders = (orderid, orderList=[]) => async (dispatch,getState) => {
  const item = orderList.filter((order) => order._id === orderid)[0];
  const currentStatus = item.status;

  try {
    const response = await axios.put("http://localhost:5000/api/boutique/orders/deliverorder" ,{
      orderid: orderid,
     status: currentStatus + 1,
    });
console.log(response);
alert('Order status changed')
const orders = await axios.get("http://localhost:5000/api/boutique/orders/getallorders")  

    dispatch({
      type: 'GET_ALLORDERS_SUCCESS',
      // payload: [response.data, ...orderList.filter((order) => order._id !== orderid)],
      payload: orders.data
    });
  } catch (err) {
    dispatch({
      type: 'DELIVER_ORDERS_FAIL',
      payload: err,
    });
  }
};
