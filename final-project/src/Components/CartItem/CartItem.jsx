import React from 'react';

const CartItem = ({ item, onRemove }) => {
  const { product, quantity } = item;

  return (
    <div className="cart-item">
      <h3>{product.name}</h3>
      <p>Цена: {product.price}</p>
      <p>Количество: {quantity}</p>
      <button onClick={() => onRemove(product.id)}>Удалить</button>
    </div>
  );
}

export default CartItem;
