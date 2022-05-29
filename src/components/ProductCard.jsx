import React from "react";
import './Components.css'
import Swipeable from "react-swipy"
import { Link, useLocation } from "react-router-dom";

import Card from "./Card";

import CardFooter from './CardFooter';

import { useState, useEffect } from "react";
import axios from "axios";

export const fav = []

export const ProductCard = (props) => {
  const location = useLocation()
  const { from } = location.state

  const [products, setProducts] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {

    axios
      .get(
        `https://shrouded-mountain-15003.herokuapp.com/https://zzrb-494.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Match-ProductsListByCategory?categoryID=${from.sub}`
      )
      .then((res) => setProducts(Object.values(res.data)));
  }, []);


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


  return (
    <div className="body card-body product-card-container">
      <Link to="/">Back to Category Selection</Link>
      <Link to="/favs">My Favorites</Link>
      <div className="card-body container">
        {( products.length > 0 ) ? (
          <div className="wrapper-style">
            <Swipeable limit={300} min={100}
              buttons={({ right, left }) => (
                <div className="actions-styles">
                  <CardFooter right={right} left={left} />
                </div>
              )}
              onSwipe={(direction) => {addToFavorite(direction)}}
            >
              <Card product={products[0]} />
            </Swipeable>
          </div>
        ) : <Card zIndex={-2} product="No more cards" /> }
      </div>
    </div>
  );
};

export default ProductCard