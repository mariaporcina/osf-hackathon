import React from "react";
import './Components.css'

const Card = ({ zIndex = 0, product }) => {
  if(typeof product !== 'string'){
    return (
      <div
        style={{
          backgroundImage: `url(${product.productImage[0]})`
        }}
        className="card"
      >
        <h4
          style={{
            color: "white",
            position: "absolute",
            bottom: "0",
            backgroundSize: "10px",
            borderRadius: "99px",
            backgroundColor: "black"
          }}
        >
          <div >{ product.productID }</div>
        </h4>
      </div>
    )
  } else {
    return (
      <div className="card">
        <h4
          style={{
            color: "white",
            position: "absolute",
            bottom: "0",
            backgroundSize: "10px",
            borderRadius: "99px",
            backgroundColor: "black"
          }}
        >
          <div>{ product }</div>
        </h4>
      </div>
    )
  }
};

export default Card;
