import React from "react";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const orderHistory = useSelector((state) => state.orderHistory);

  return (
    <div>
      <h2>История покупок</h2>
      {orderHistory.length === 0 ? (
        <p>История покупок пуста</p>
      ) : (
        orderHistory.map((order) => (
          <div key={order.id}>
            <p>Заказ № {order.id}</p>
            {/* Добавьте здесь дополнительную информацию о заказе, например, список товаров */}
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
