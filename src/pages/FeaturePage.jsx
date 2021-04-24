import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./featurepage.css";

export default function FeaturePage({ products, addToCart }) {
  const [availableProducts, setAvailableProducts] = useState([]);
  const { categoryId } = useParams();

  const categoryProduct = products.find(
    (product) => product.categoryId === categoryId
  );

  useEffect(() => {
    setAvailableProducts(categoryProduct.products);
  }, [categoryProduct]);

  return (
    <div className="container">
      {availableProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
