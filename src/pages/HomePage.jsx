import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { useState } from "react";

export default function HomePage({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <h1>Categories</h1>
      <div className="categories">
        {products.map((product) => (
          <div className="category-card" key={product.category}>
            <img src={product.image} alt={product.category} />
            <Link to={`/category/${product.categoryId}`}>
              {product.category}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
