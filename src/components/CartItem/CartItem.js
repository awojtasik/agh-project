import React from 'react';

import './CartItem.styles.scss';

const cartItem = ({item: {imageUrl, price, name, quantity}}) => (
<div className='cartItem'>
<img src={imageUrl} alt='item' />
<div className='itemDetails'>
    <span className='name'>{name}</span>
<span className='price'>{quantity} x ${price}</span>
</div>
</div>
);

export default cartItem;