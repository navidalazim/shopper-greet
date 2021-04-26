import React from "react";
import "./drawer.css";
import { useState } from "react";

export default function Drawer({ products }) {
  const [searchTerm, setSeacrhTerm] = useState("");
  return (
    <div className="sidenav">
      <h5>Filter</h5>
      <input
        className="search-bar"
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSeacrhTerm(event.target.value);
        }}
      />

      <div className="checkbox-filters">
        <div>
          <h4>Eligible for Delivery</h4>
        </div>
        <div>
          <input type="checkBox" name="items" /> Free delivery inside Dhaka
          district
        </div>
        <div>
          <input type="checkBox" name="items" /> Free Delivery inside Dhaka
          Division
        </div>
        <div>
          <input type="checkBox" name="items" /> Free Delivery all over
          Bangladesh
        </div>
      </div>
      <div className="checkbox-filters">
        <div>
          <h4>Brands</h4>
          <div>
            <input type="checkBox" name="items" /> brand A
          </div>
          <div>
            <input type="checkBox" name="items" /> brand B
          </div>
          <div>
            <input type="checkBox" name="items" /> brand C
          </div>
          <div>
            <input type="checkBox" name="items" /> brand D
          </div>
          <div>
            <input type="checkBox" name="items" /> brand E
          </div>
        </div>
      </div>
      <div className="checkbox-filters">
        <div>
          <h4>Price Range</h4>
          <div>
            <input type="checkBox" name="items" /> $1-50
          </div>
          <div>
            <input type="checkBox" name="items" /> $51-100
          </div>
          <div>
            <input type="checkBox" name="items" /> $101-200
          </div>
          <div>
            <input type="checkBox" name="items" /> $201-400
          </div>
        </div>
      </div>
      <div className="checkbox-filter">
        <div>
          <h4>Seller Lists</h4>
        </div>
        <div>
          <input type="checkBox" name="items" /> Seller A
        </div>
        <div>
          <input type="checkBox" name="items" /> Seller B
        </div>
        <div>
          <input type="checkBox" name="items" /> Seller C
        </div>
        <div>
          <input type="checkBox" name="items" /> Seller D
        </div>
      </div>
    </div>
  );
}
