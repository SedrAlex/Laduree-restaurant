import axios from "axios";

export const getAllMeals = () => async dispatch => {

  dispatch({ type: 'GET_MEALS_REQUEST'});
 try {
     const response = await axios.get("http://localhost:5000/api/menu/getallmeals")  
     console.log(response);
    dispatch({ type: 'GET_MEALS_SUCCESS', payload : response.data });
  } catch (error) {
    dispatch({ type: "GET_MEALS_FAILED", payload : error});
    console.log(error);
  }
};


export const filterMeals = (category) => async dispatch => {

  var filteredMeals;
  dispatch({ type: 'GET_MEALS_REQUEST'});

 try {
     const response = await axios.get("http://localhost:5000/api/menu/getallmeals")  
     filteredMeals = response.data.filter(meal => meal.category.toLowerCase().includes(category))   
     dispatch({ type: 'GET_MEALS_SUCCESS', payload : filteredMeals});
  } catch (error) {
    dispatch({ type: "GET_MEALS_FAILED", payload : error});
    console.log(error);
  }
};


export const addMeal=(meal)=>async (dispatch, getState)=>{
  const ingredientsWithMeals = getState().ingredientsWithMealsReducer.ingredientsWithMeals

  dispatch({type:'ADD_MEAL_REQUEST'})
  try {
      const response= await axios.post('http://localhost:5000/api/menu' , {
        meal,
        ingredientsWithMeals
      });
      console.log(response);
      dispatch({type:'ADD_MEAL_SUCCESS'})
  } catch (error) {
      dispatch({type:'ADD_MEAL_FAILED' , payload : error})
  }
}

export const getMealById=(mealid)=>async dispatch=>{

  dispatch({type:'GET_MEALBYID_REQUEST'})

  try {
      const response = await axios.get('http://localhost:5000/api/menu' , {mealid})
      console.log(response);
      dispatch({type:'GET_MEALBYID_SUCCESS' , payload : response.data})
  } catch (error) {
      dispatch({type:'GET_MEALBYID_FAILED' , payload : error})
  }

}