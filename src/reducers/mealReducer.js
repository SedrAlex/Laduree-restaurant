export const getAllMealsReducer = (state = { meals: [] }, action) => {
    
    switch (action.type) 
    {
          case "GET_MEALS_REQUEST": return {
            loading:true,
            ...state
          };
          case "GET_MEALS_SUCCESS": return {
            loading:false,
            meals: action.payload
          };
          case "GET_MEALS_FAILED": return {
            error: action.payload,
            loading:false

          };
        default : return state;
      }
}

export const addMealReducer=(state={ } , action)=>{

  switch(action.type)
  {
      case 'ADD_MEAL_REQUEST' : return{
          loading : true,
      }
      case 'ADD_MEAL_SUCCESS' : return{
          loading : false ,
          success : true,
      }
      case 'ADD_MEAL_FAILED' : return{
          error : action.payload ,
          loading : false
      }
      default : return state
  }

}

export const getMealByIdReducer=(state={ } , action)=>{

  switch(action.type)
  {
      case 'GET_MEALBYID_REQUEST' : return{
          loading : true,
          ...state
      }
      case 'GET_MEALBYID__SUCCESS' : return{
          loading : false ,
          meal : action.payload
      }
      case 'GET_MEALBYID_FAILED' : return{
          error : action.payload ,
          loading : false
      }
      default : return state
  }

}
