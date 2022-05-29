import React from "react";
import "./Components.css";

const Card = ({ zIndex = 0, product }) => {
  if (typeof product !== "string") {
    return (
      <>
      <div className="product-title">
          <h1>
            {product.productName}
          </h1>
        </div>
      {/* <div className="product-image-container"> */}
        <div
          style={{
            backgroundImage: `url(${product.productImage[0]})`,
          }}
          className="card product-image-container"
        >
        </div>
      {/* </div> */}
      </>
    );
  } else {
    return (
      <div className="card">
        <h1>
          <div>{product}</div>
        </h1>
      </div>
    );
  }
};

export default Card;
