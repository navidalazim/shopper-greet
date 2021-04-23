import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

export default function HomePage({ products }) {
  return (
    <>
      <h1>Categories</h1>
      <div className="categories">
        {products.map((product) => (
          <div className="category-card" key={product.category}>
            <img
              src={product.image}
              alt={product.category}
            />
            <Link to={`/category/${product.categoryId}`}>{product.category}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
