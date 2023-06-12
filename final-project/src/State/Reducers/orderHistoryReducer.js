const initialState = {
    orderHistory: [],
  };
  
  const orderHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PLACE_ORDER':
        return {
          ...state,
          orderHistory: [...state.orderHistory, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default orderHistoryReducer;
  