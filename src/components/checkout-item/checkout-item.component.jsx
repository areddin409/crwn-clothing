import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={imageUrl} />
    </div>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    <span className='quantity'>{quantity}</span>
    <div className='remove-button'>&#10008;</div>
  </div>
);

export default CheckoutItem;