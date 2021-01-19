import React from 'react';
import Footer from '../../Footer/Footer';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import { products } from '../../../data';

const Payment = () => {
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
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </table>
      </div>

      <div className='small-container cart-page'>
        <form>
          <div className='total-price'>
            <table>
              <tbody>
                <tr>
                  <td>Total</td>
                  <td>Ksh 500</td>
                </tr>
              </tbody>
            </table>

            <button>Buy Now</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Payment;
