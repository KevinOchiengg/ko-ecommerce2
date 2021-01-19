import React from 'react';
import Footer from '../../Footer/Footer';
import './ShoppingCart.css';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import { products } from '../../../data';

const ShoppingCart = () => {
  return (
    <>
      <div className='small-container cart-page'>
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </tbody>
          {products.map((product) => (
            <CheckoutProduct
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </table>

        <div className='total-price'>
          <table>
            <tbody>
              <tr>
                <td>Total Items</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Total Price</td>
                <td>Ksh 20,300</td>
              </tr>
            </tbody>
          </table>

          <button>Checkout &#8594;</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
