import React from 'react';
import { FaStar } from 'react-icons/fa';
import { products } from '../../data';

const Rating = () => {
  return (
    <div className='rating'>
      {Array(products.rating)
        .fill()
        .map((_, i) => (
          <i>{<FaStar />}</i>
        ))}
      <i>{products.halfstar}</i>
    </div>
  );
};

export default Rating;
