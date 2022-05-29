import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CategoryCard from "./categoryCard";
import './Components.css'

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios
        .get(
          `https://shrouded-mountain-15003.herokuapp.com/https://zzrb-494.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Match-CategoryList`
        )
        .then((res) => setCategories(Object.values(res.data)[3]));
    }, []);

  return (
    <div className="categories-page-container">
      <div className="category-cards-container">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category}/>
        ))}
      </div>
    </div>
  );
}
