import React from "react";
import './Components.css'
import { Link } from "react-router-dom";

const CategoryCard = props => {
    return (
      <div className="category-cards-holder">
        <h3 className="category-title"> { props.category.category} </h3>
        <ul>
          { props.category.subcategory.map(sub => (
          <li className="sub-categories-links">
            <Link to="/product" state={{ from: {sub} }}>
              {sub}
            </Link>
          </li>
        ))}
        </ul>
      </div>
    )
  }

export default CategoryCard;
