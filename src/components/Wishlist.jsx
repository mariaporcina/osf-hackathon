import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { WishlistCard } from '../WishlistCard';

export const Wishlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(
            `https://shrouded-mountain-15003.herokuapp.com/https://zzrb-494.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/Match-ProductsListByCategory?categoryID=newarrivals-womens`
        ).then((res) => setProducts(Object.values(res.data)));
      }, []);

    return (
        <section className='wishlistSecion'>
            <h2>Wishlist</h2>
            <ul>
                <WishlistCard products={ products } />
            </ul>
        </section>
    )
}

export default Wishlist;