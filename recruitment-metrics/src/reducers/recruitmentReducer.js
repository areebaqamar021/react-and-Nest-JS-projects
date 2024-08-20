const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const recruitmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
      }
  };
  
  export default recruitmentReducer;
  