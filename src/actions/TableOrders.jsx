import axios from "axios";

export const placeTableOrder = (table,description) =>  async (dispatch, getState)=>{
      const orderedMeals = getState().orderedmealsReducer.orderedMeals
      dispatch({ type: 'PLACE_TABLE_ORDERS_REQUEST'});

         try {
           const response = await axios.post("http://localhost:5000/api/tableOrders", {
           orderedMeals,
           table,
           description
           });
           console.log(response);

           // Dispatch any necessary actions based on the response
           dispatch({ type: 'PLACE_TABLE_ORDERS_SUCCESS'});
         } catch (error) {
           // Dispatch an error action if the request fails
           dispatch({ type: 'PLACE_TABLE_ORDERS_FAILURE', payload: error.message });
         }
       };
     
       export const getAllTablesOrders=  () => async dispatch  => {
      
        dispatch({ type: 'GET_ALL_TABLES_ORDERS_REQUEST'});
          
       try {
           const response = await axios.get("http://localhost:5000/api/tableOrders")  
           console.log(response);
          dispatch({ type: 'GET_ALL_TABLES_ORDERS_SUCCESS', payload : response.data });
        } catch (error) {
          dispatch({ type: 'GET_ALL_TABLES_ORDERS_FAILED', payload : error});
          console.log(error);
        }
      };


      export const deliverTableOrder=(tableorderid)=>async dispatch=>{



        try {
          const response = await axios.patch('http://localhost:5000/api/tableOrders/waiter'
           , {
            tableorderid:tableorderid,
            status: "Delivered" ,

          })
          console.log(response);
          alert('Table Order Delivered')
          const tablesorders = await axios.get('http://localhost:5000/api/tableOrders')
          dispatch({type:'GET_ALL_TABLES_ORDERS_SUCCESS' , payload:tablesorders.data})
        } catch (error) {
          console.log(error);
        }
    
    }

    export const prepareTableOrder=(tablesorderid)=>async dispatch=>{



      try {
        const response = await axios.patch('http://localhost:5000/api/tableOrders/waiter' 
        , {
          tablesorderid:tableorderid,
          status: "Completed" ,

        })
        console.log(response);
        alert('Table Order Prepared')
        const tablesorders = await axios.get('http://localhost:5000/api/tableOrders')
        dispatch({type:'GET_ALL_TABLES_ORDERS_SUCCESS' , payload:tablesorders.data})
      } catch (error) {
        console.log(error);
      }
  
  
  }



 