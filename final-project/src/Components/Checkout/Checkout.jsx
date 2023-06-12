import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { placeOrder, clearCart } from '../Actions/cartActions';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
  
    dispatch(placeOrder(name, address));
    dispatch(clearCart());
  }

  return (
    <div>
      <h2>Оформление заказа</h2>
      <form>
        <label>
          Имя:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Адрес:
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
        </label>
        <button type="button" onClick={handlePlaceOrder}>Оформить заказ</button>
      </form>
    </div>
  );
}

export default Checkout;
