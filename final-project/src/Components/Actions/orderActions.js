export const placeOrder = (name, address) => {
    return {
      type: 'PLACE_ORDER',
      payload: { name, address },
    };
  };
  