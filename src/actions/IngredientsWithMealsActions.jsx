export const addIngredientToOrder=  ( ingredient ,quantity) => (dispatch, getState) =>{

    var ingredientwithmeal = 
    {
        _id  : ingredient._id,
        quantity: quantity,
    }
    
 
    dispatch({type:'ADD_INGREDIENT_WITH_MEAL', payload : ingredientwithmeal})
    
    const ingredientsWithMeals = getState().ingredientsWithMealsReducer.ingredientsWithMeals
    localStorage.setItem('ingredientsWithMeals',JSON.stringify(ingredientsWithMeals) )
    console.log(ingredientsWithMeals);


  
    }
    const updateLocalStorage = (getState) => {
        const ingredientsWithMeals = getState().ingredientsWithMealsReducer.ingredientsWithMeals
        localStorage.setItem('ingredientsWithMeals', JSON.stringify(ingredientsWithMeals));
      };
    
    
    
    