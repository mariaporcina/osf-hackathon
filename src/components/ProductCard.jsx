import React from "react";
import Swipeable from "react-swipy"

import Card from "./Card";

import Footer from './Footer';

import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useSwipeable } from "react-swipeable";

// import Cards, { Card } from 'react-swipe-card';
// import { CardActionArea } from "@material-ui/core";

const wrapperStyles = {position: "relative", width: "250px", height: "250px"};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
};

export const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {

    axios
      .get(
        `https://shrouded-mountain-15003.herokuapp.com/https://zzrb-494.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Match-ProductsListByCategory?categoryID=newarrivals-womens`
      )
      .then((res) => setProducts(Object.values(res.data)));

    // fetchData();
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=28`
    //   )
    //   .then((res) => setProducts(res.data.results.reverse()));

  }, []);

  // console.log(products);

  const addToFavorite = (direction) => {
    if(direction === 'right'){
      const swipedElement = products[0];
      setFav([...fav, swipedElement]);
    }

    remove();
  };

  const remove = () => {
    setProducts(products.slice(1, products.length));
  }

  console.log(typeof products)

  return (
    <div className="body">
      <div className="body_container">
        {( products.length > 0 ) ? (
          <div style={wrapperStyles}>
            <Swipeable
              buttons={({ right, left }) => (
                <div style={actionsStyles}>
                  <Footer right={right} left={left} />
                </div>
              )}
              onSwipe={(direction) => {addToFavorite(direction)}}
            >
              <Card product={products[0]} />
            </Swipeable>
          </div>
        ) : <Card zIndex={-2} product="No more cards" /> }
        {/* {products.length < 1 ?? <Card zIndex={-2} product="No more cards" />} */}
      </div>
    </div>
  );
};

export default ProductCard