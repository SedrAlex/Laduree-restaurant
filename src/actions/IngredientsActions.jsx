import axios from "axios";

export const getAllIngredients = () => async dispatch => {

  dispatch({ type: 'GET_INGREDIENTS_REQUEST'});
 try {
     const response = await axios.get("http://localhost:5000/api/ingredients")  
     console.log(response);
    dispatch({ type: 'GET_INGREDIENTS_SUCCESS', payload : response.data });
  } catch (error) {
    dispatch({ type: "GET_INGREDIENTS_FAILED", payload : error});
    console.log(error);
  }
};

   export const addAmount=(amount)=>async dispatch=>{
    dispatch({type:'ADD_AMOUNT_REQUEST'})
    try {
        const response= await axios.post("http://localhost:5000/api/ingredientOrders" , amount)
        console.log(response);
        dispatch({type:'ADD_AMOUNT_SUCCESS'})
    } catch (error) {
        dispatch({type:'ADD_AMOUNT_FAILED' , payload : error})
    }


}

export const addIngredient=(ingredient)=>async dispatch=>{
  dispatch({type:'ADD_INGREDIENT_REQUEST'})
  try {
      const response= await axios.post("http://localhost:5000/api/ingredients" , ingredient)
      console.log(response);
      dispatch({type:'ADD_INGREDIENT_SUCCESS'})
  } catch (error) {
      dispatch({type:'ADD_INGREDIENT_FAILED' , payload : error})
  }
}