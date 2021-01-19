import React from 'react';
import { products } from '../../data';
import './Product.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      {products.map((product) => {
        const {
          id,
          image,
          title,
          description,
          price,
          rating,
          halfstar,
        } = product;

        return (
          <div key={id} className='col-3 product-item'>
            <figure>
              <Link to='/productdetails'>
                <img src={image} alt={title} className='img-fluid' />
              </Link>
            </figure>

            <h3>
              <Link to='/productdetails'>{title}</Link>
            </h3>

            <div className='rating'>
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <i>{<FaStar />}</i>
                ))}
              <i>{halfstar}</i>
            </div>

            <span className='price'>Ksh {price}</span>

            <p className='description'>{description.substring(0, 150)}...</p>
            <div className='buttons__container'>
              <button className='btn'>Add</button>
              <button className='btn'>
                <Link to={`/productdetails/${id}`}>View</Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
