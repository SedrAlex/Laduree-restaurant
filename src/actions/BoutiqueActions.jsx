import axios from "axios";

export const getAllBoutiques= () => async dispatch => {

  dispatch({ type: 'GET_BOTIQUES_REQUEST'});
 try {
     const response = await axios.get("http://localhost:5000/api/boutique/getItems")  
     console.log(response);
    dispatch({ type: 'GET_BOTIQUES_SUCCESS', payload : response.data });
  } catch (error) {
    dispatch({ type: 'GET_BOTIQUES_FAILED', payload : error});
    console.log(error);
  }
};