export const addToCart =  ( boutique ,quantity) => (dispatch, getState) =>{

var cartItem = 
{
    _id  : boutique._id,
    name : boutique.name,
    image : boutique.image,
    price: boutique.price,
    quantity: quantity,
}

dispatch({type:'ADD_TO_CART', payload : cartItem})

const cartItems = getState().cartReducer.cartItems
localStorage.setItem('cartItems',JSON.stringify(cartItems) )

}

const updateLocalStorage = (getState) => {
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  export const incrementQuantity = (item) => (dispatch, getState) => {

if(item.quantity >= 10)
{
window.alert('You can not add more than ten items even they are so delightful')
}
else{
    dispatch({
        type: 'INCREMENT_QUANTITY',
        payload: item,
      });
      updateLocalStorage(getState);

    
}
    
  };

  export const decreamentQuantity = (item) => (dispatch, getState) => {
    if(item.quantity <= 0)
    {
        dispatch({
            type:'DELETE_FROM_CART',
            payload:item
        });
    }
    else{
        dispatch({
            type: 'DECREAMENT_QUANTITY',
            payload: item,
          });
    }
    
  
    updateLocalStorage(getState);
  };

  export const removeFromCart =(item) =>  (dispatch, getState)  =>{
    

  dispatch({
        type:'DELETE_FROM_CART',
        payload:item
    });
    updateLocalStorage(getState);

  }
  