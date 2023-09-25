export const ingredientsWithMealsReducer = (state = {ingredientsWithMeals:[]}, action) => {

    switch(action.type)
    {
        case 'ADD_INGREDIENT_WITH_MEAL' : 
      
        const alreadyExists =  state.ingredientsWithMeals.find(ingredient => ingredient._id===action.payload._id)
        if(alreadyExists)
        {
                    return{
    
                        ...state,
                        ingredientsWithMeals : state.ingredientsWithMeals.map(ingredient => ingredient._id === action.payload._id ? { ...ingredient, quantity: action.payload.quantity }  // update the quantity
                        : ingredient ) 
                     }
        }
        else{
            return {
                ...state,
                ingredientsWithMeals:[...state.ingredientsWithMeals, action.payload]
            }
    
            
        }
    
    
      
       
        default: return state
    
    }
    
    }