

export const orderedmealsReducer = (state = {orderedMeals:[]}, action) => {

    switch(action.type)
    {
        case 'ADD_TO_ORDER' : 
      
        const alreadyExists =  state.orderedMeals.find(meal => meal._id===action.payload._id)
        if(alreadyExists)
        {
                    return{
    
                        ...state,
                        orderedMeals : state.orderedMeals.map(meal => meal._id === action.payload._id ? { ...meal, quantity: action.payload.quantity }  // update the quantity
                        : meal ) 
                     }
        }
        else{
            return {
                ...state,
                orderedMeals:[...state.orderedMeals, action.payload]
            }
    
            
        }
    
    
      
       
        default: return state
    
    }
    
    }