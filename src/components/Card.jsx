import React from "react";

const cardStyles = {
  background: "black",
  borderRadius: 3,
  width: "250px",
  height: "250px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  color: 'black'
};

const Card = ({ zIndex = 0, product }) => {
  console.log(product);
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
          <div style={{ ...cardStyles, zIndex }}>{ product.productID }</div>
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
          <div style={{ ...cardStyles, zIndex }}>{ product }</div>
        </h4>
      </div>
    )
  }
};

export default Card;
