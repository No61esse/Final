import React from "react";
import ProductItem from "../ProductItem/ProductItem";

const Clothes = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <p>Salam</p>
    </div>
  );
};

export default Clothes;
