
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Actions/cartActions';
import '../ProductItem/ProductItem.css'

const ProductItem = ({ product }) => {
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }
 console.log(product)
  useEffect(() => {
    const fetchProductDetails = async () => {
      const options = {
        method: 'GET',
        url: 'https://zappos1.p.rapidapi.com/products/detail',
        params: {
          productId: product.id
        },
        headers: {
          'X-RapidAPI-Key': '1874b57c66msh360648125005d5cp1662cejsn5640318b6d4c',
          'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setProductDetails(response.data);
       
      } catch (error) {
        console.error(error);
      }
    
      
    };

    // fetchProductDetails();
  }, []);

 

  return (
   
     
    <div className="product">
      <img src={`https://m.media-amazon.com/images/I/${product.msaImageId}._AC_SR736,920_.jpg`} alt="" />
      <h3>{product.brandName}</h3>
      {/* <p>Rəng: {product.colorId}</p> */}
      <p>{product.productName}</p>
      <p>Price: {product.price}</p>
      {productDetails && (
        <div>
          <h4>Məhsul haqqında</h4>
          {/* Отображение деталей продукта */}
        </div>
      )}
      <button onClick={handleAddToCart}>Buy</button>
    </div>
  );
};

export default ProductItem;
