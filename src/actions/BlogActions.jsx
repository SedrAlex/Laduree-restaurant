import axios from "axios";

export const getAllPosts= () => async dispatch => {

  dispatch({ type: 'GET_POSTS_REQUEST'});
 try {
     const response = await axios.get("http://localhost:5000/api/posts/getposts")  
     console.log(response);
    dispatch({ type: 'GET_POSTS_SUCCESS', payload : response.data });
  } catch (error) {
    dispatch({ type: 'GET_POSTS_FAILED', payload : error});
    console.log(error);
  }
};