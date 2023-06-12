import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { removeFromCart } from '../Actions/cartActions';
import './Cart.css'

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    console.log(first)
  }

  return (
    <div>
      <h2>Cart</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cartItems && cartItems.map(item => (
          <CartItem
            key={item.product.id}
            item={item}
            onRemove={handleRemoveFromCart}
          />
        ))
      )}
    </div>
  );
}

export default Cart;
