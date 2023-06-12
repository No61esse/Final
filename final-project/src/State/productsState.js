const initialState = [
    { id: 1, name: 'Товар 1', price: 10 },
    { id: 2, name: 'Товар 2', price: 20 },
    { id: 3, name: 'Товар 3', price: 30 },
  ];
  
  const productsReducer = (state = initialState, action) => {
    
    switch (action.type) {
     
      default:
        return state;
    }
  };
  
  export default productsReducer;
  