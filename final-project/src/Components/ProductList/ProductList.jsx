import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "../ProductList/ProductList.css"

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://zappos1.p.rapidapi.com/products/list';
      const options = {
        method: "POST",
        params: {
          page: "1",
          limit: "6",
          sort: "relevance/desc",
        },
        headers: {
          'X-RapidAPI-Key': '0ee7cccfc0mshc384dd7a14b9b0ap13f9b8jsn79cabff78ed3',
          'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
        },
        data: [
          {
            facetField: "zc1",
            values: ["Clothing","Shoes"],
          },
          
          {
            facetField: "zc2",
            values: ["Hoodies & Sweatshirts","Coats & Outerwear","Boots"],
          },
          {
            facetField: "txAttrFacet_Gender",
            values: ["Men", "boys"],
          },
        ],
      };
       
      try {
        const response = await axios.request(url, options);
        const data = response.data;
       
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);
  console.log("products", products.results);

  if (products.results) {
    
    return (
      <div className="list">
        
        
        {products.results.map((product) => (
         
          <ProductItem key={uuidv4()} product={product}  />
        ))}
      </div>
    );
  } else {
    return <>Data yoxdur</>;
  }
};

export default ProductList;
