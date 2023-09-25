import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import { applyMiddleware,combineReducers } from "redux";
import { placeOrderReducer,getUserOrdersReducer, getAllOrdersReducer } from "./reducers/orderReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { addMealReducer, getAllMealsReducer, getMealByIdReducer } from './reducers/mealReducer';
import { cartReducer } from './reducers/cartReducer';
import { loginUserReducer, registerUserReducer } from './reducers/userReducer';
import { getAllBoutiquesReducer } from './reducers/botiqueReducer';
import { getAllPostsReducer } from './reducers/blogReducer';
import { orderedmealsReducer } from './reducers/orderedmealsReducer';
import { placeTableOrderReducer } from './reducers/TableOrders';
import {getAllTablesOrdersReducer} from './reducers/TableOrders'
import { addAmountReducer, addIngredientReducer, getAllIngredientsReducer } from './reducers/ingredientsReducer';
import { ingredientsWithMealsReducer } from './reducers/IngredientsWithMealsReducer';
import analyticsReducer from "./features/AnalyticsSlice";
import totalsReducer from "./features/totalsSlice";
import postReducer from "./features/postSlice";
import usersStatsReducer from "./features/usersStatsSlice";
import orderStatusReducer from "./features/orderStatusSlice";

//root-reducer
const rootReducer = combineReducers({
    placeOrderReducer: placeOrderReducer,
    getAllMealsReducer: getAllMealsReducer,
    getAllBoutiquesReducer: getAllBoutiquesReducer,
    getAllPostsReducer:getAllPostsReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer: loginUserReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    orderedmealsReducer:orderedmealsReducer,
    placeTableOrderReducer:placeTableOrderReducer,
    getAllTablesOrdersReducer,getAllTablesOrdersReducer,
    getAllIngredientsReducer:getAllIngredientsReducer,
    addAmountReducer:addAmountReducer,
    ingredientsWithMealsReducer:ingredientsWithMealsReducer,
    addMealReducer:addMealReducer,
    getMealByIdReducer:getMealByIdReducer,
    addIngredientReducer,addIngredientReducer,
    analytics: analyticsReducer,
    totals: totalsReducer,
    addPost: postReducer,
    usersStats: usersStatsReducer,
    orderStatus: orderStatusReducer
    


})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const orderedMeals = localStorage.getItem('orderedMeals') ? JSON.parse(localStorage.getItem('orderedMeals')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const ingredientsWithMeals = localStorage.getItem('ingredientsWithMeals') ? JSON.parse(localStorage.getItem('ingredientsWithMeals')) : []

 const middleware= [thunk];
// actions hit middlewares before hit the reducers   

const initialState = 
{
    cartReducer:{
           cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    },
    orderedmealsReducer:{
        orderedMeals:orderedMeals
    },
    ingredientsWithMealsReducer:{
        ingredientsWithMeals:ingredientsWithMeals
    }
}
 export const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    );
