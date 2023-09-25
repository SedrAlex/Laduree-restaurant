const initialState = {
    boutiques: [],
    error: '',
    loading: false
  };


export const getAllBoutiquesReducer = (state = initialState, action) => {
    
    switch (action.type) 
    {
          case "GET_BOTIQUES_REQUEST": return {
            loading:true,
            ...state
          };
          case "GET_BOTIQUES_SUCCESS": return {
            loading:false,
            boutiques: action.payload
          };
          case "GET_BOTIQUES_FAILED": return {
            error: action.payload,
            loading:false

          };
        default : return state;
      }
}