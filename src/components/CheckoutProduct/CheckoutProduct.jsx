import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const CheckoutProduct = ({ id, image, title, price, rating, value }) => {
  return (
    <>
      <tr>
        <td>
          <div className='cart-info'>
            <img src={image} alt='' />
            <div>
              <p>{title}</p>
              <small>Price: Ksh 1000</small>
              <div className='rating'>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <i>{<FaStar />}</i>
                  ))}
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              <button>Remove</button>
            </div>
          </div>
        </td>
        <td>
          <input type='number' />
        </td>
        <td>Ksh {price}</td>
      </tr>
    </>
  );
};

export default CheckoutProduct;
