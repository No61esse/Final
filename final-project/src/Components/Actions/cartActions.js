export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };
  
  export const updateCartItemQuantity = (productId, quantity) => {
    return {
      type: 'UPDATE_CART_ITEM_QUANTITY',
      payload: {
        productId,
        quantity,
      },
    };
  };
  export const clearCart = () => {
    return {
      type: 'CLEAR_CART',
    };
  };
  export const placeOrder = (name, address) => {
    // Ваш код для оформления заказа
    // Возможно, здесь вы хотите отправить запрос на сервер или выполнить другие действия, связанные с оформлением заказа
    return {
      type: 'PLACE_ORDER',
      payload: {
        name,
        address,
      },
    };
  };