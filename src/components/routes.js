import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import ProductCard from "./ProductCard";
import CategoriesPage from "./CategoriesPage";
import Fav from "./Fav";

const Routing = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route element = { <CategoriesPage/> }  path="/" exact />
           <Route element = { <ProductCard /> }  path="/product" />
           <Route element = { <Fav /> }  path="/favs" />
        </Routes>
       </BrowserRouter>
   )
}

export default Routing;