export const addToOrder=  ( meal ,quantity) => (dispatch, getState) =>{

    var orderedmeal = 
    {
        _id  : meal._id,
        name : meal.name,
        image : meal.image,
        quantity: quantity,
        price:meal.price
    }
  
    dispatch({type:'ADD_TO_ORDER', payload : orderedmeal})
    
    const orderedMeals = getState().orderedmealsReducer.orderedMeals
    localStorage.setItem('orderedMeals',JSON.stringify(orderedMeals) )


  
    }
    
    const updateLocalStorage = (getState) => {
        const orderedMeals = getState().orderedmealsReducer.orderedMeals;
        localStorage.setItem('orderedMeals', JSON.stringify(orderedMeals));
      };
    
      export const incrementQuantity = (meal) => (dispatch, getState) => {
    
    if(meal.quantity >= 30)
    {
    window.alert('You can not add more than ten items even they are so delightful')
    }
    else{
        dispatch({
            type: 'INCREMENT_QUANTITY',
            payload: meal,
          });
          updateLocalStorage(getState);
    
        
    }
        
      };
    
      export const decreamentQuantity = (meal) => (dispatch, getState) => {
        if(meal.quantity <= 0)
        {
            dispatch({
                type:'DELETE_FROM_CART',
                payload:meal
            });
        }
        else{
            dispatch({
                type: 'DECREAMENT_QUANTITY',
                payload: meal,
              });
        }
        
      
        updateLocalStorage(getState);
      };    