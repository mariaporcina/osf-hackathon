import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { fav } from "./ProductCard";

import axios from "axios";

import Card from "./Card";
import { Link } from 'react-router-dom';

import { searchParams } from "../App";

function retrieveCustomerId(params) {
  return params.split('=')[1];
}

export default function Fav() {
  // const location = useLocation()
  // const { fav } = location.state

  const [fs, setFs] = useState([]);

  useEffect(() => {
    axios.get(
        `https://shrouded-mountain-15003.herokuapp.com/https://shrouded-mountain-15003.herokuapp.com/https://zzrb-494.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/MatchList-CheckExistingWishList?customerNo=${retrieveCustomerId(searchParams)}`
      )
      .then((res) => setFs(Object.values(res.data)));
  }, []);

  // const remove = (index) => {
  //   fav.fav.splice(index, 1);
  //   setFs(Object.values([...fav]));
  // };

  console.log(fs)

  return (
    <div className="favori">
      <div className="favoribg">
        <h2>Your Favourite</h2>
        <h3 className="backToHome"><Link to="/">Back to Category Selection</Link></h3>
      </div>
      <div className="body card-body product-card-container">
        <div className="card-body container">
          {fs.map((product, index) => (
            typeof product !== 'string' ? (
            <div key={index} className="wrapper-style">
              <Card product={product} />

              {/* <button
                  className="btn"
                  // onClick={ () => remove(index) }
                >Remove</button> */}
            </div> ) : ( <div></div> )
          ))}
        </div>
      </div>
    </div>
  );
}