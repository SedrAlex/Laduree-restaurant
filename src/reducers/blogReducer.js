export const getAllPostsReducer = (state = { posts: [] }, action) => {
    
    switch (action.type) 
    {
          case "GET_POSTS_REQUEST": return {
            loading:true,
            ...state
          };
          case "GET_POSTS_SUCCESS": return {
            loading:false,
            posts: action.payload
          };
          case "GET_POSTS_FAILED": return {
            error: action.payload,
            loading:false

          };
        default : return state;
      }
}