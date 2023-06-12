import React from "react";
import ProductItem from "../ProductItem/ProductItem";

const Shoes = ({ products }) => {
  return (
    <div>
      <h2>Shoes</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shoes;
