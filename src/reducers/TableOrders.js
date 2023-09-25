export const placeTableOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case "PLACE_TABLE_ORDERS_REQUEST":
        return {
          loading: true,
        };
      case "PLACE_TABLE_ORDERS_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "PLACE_TABLE_ORDERS_FAILURE":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  

  export const getAllTablesOrdersReducer = (state = { tablesorders: [] }, action) => {
    
    switch (action.type) 
    {
          case "GET_ALL_TABLES_ORDERS_REQUEST": return {
            loading:true,
            ...state
          };
          case "GET_ALL_TABLES_ORDERS_SUCCESS": return {
            loading:false,
            tablesorders: action.payload
          };
          case "GET_ALL_TABLES_ORDERS_FAILED": return {
            error: action.payload,
            loading:false
  
          };
        default : return state;
      }
  }