import React from 'react';

import Card from './components/Card';

export const WishlistCard = ({ products }) => {
    return products.map((product, index) => ( <li>
        <Card key={ product.productID } product={ product } />
    </li> ));
}