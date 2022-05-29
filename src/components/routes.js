import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import ProductCard from "./ProductCard";
import CategoriesPage from "./CategoriesPage";

const Routing = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route element = { <CategoriesPage/> }  path="/" exact />
           <Route element = { <ProductCard /> }  path="/product" />
        </Routes>
       </BrowserRouter>
   )
}

export default Routing;