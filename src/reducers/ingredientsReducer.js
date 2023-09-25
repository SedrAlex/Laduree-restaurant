export const getAllIngredientsReducer = (state = { ingredients: [] }, action) => {
    
    switch (action.type) 
    {
          case "GET_INGREDIENTS_REQUEST": return {
            loading:true,
            ...state
          };
          case "GET_INGREDIENTS_SUCCESS": return {
            loading:false,
            ingredients: action.payload
          };
          case "GET_INGREDIENTS_FAILED": return {
            error: action.payload,
            loading:false

          };
        default : return state;
      }
}


export const addAmountReducer=(state={ } , action)=>{

  switch(action.type)
  {
      case 'ADD_AMOUNT_REQUEST' : return{
          loading : true,
          ...state
      }
      case 'ADD_AMOUNT_SUCCESS' : return{
          loading : false ,
          success : true,
      }
      case 'ADD_AMOUNT_FAILED' : return{
          error : action.payload ,
          loading : false
      }
      default : return state
  }

}

export const addIngredientReducer=(state={ } , action)=>{

  switch(action.type)
  {
      case 'ADD_INGREDIENT_REQUEST' : return{
          loading : true,
          ...state
      }
      case 'ADD_INGREDIENT_SUCCESS' : return{
          loading : false ,
          success : true,
      }
      case 'ADD_INGREDIENT_FAILED' : return{
          error : action.payload ,
          loading : false
      }
      default : return state
  }

}