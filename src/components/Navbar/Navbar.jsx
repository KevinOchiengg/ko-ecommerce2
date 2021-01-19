import React from 'react';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import menu from '../../images/menu.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} className='nav-logo' alt='' />
        </Link>

        <ul className='nav-links'>
          <li>
            <button className='link-btn'>
              <Link to='/'>Home</Link>
            </button>
          </li>
          <li>
            <button className='link-btn'>
              <Link to='/products/:id'>Products</Link>
            </button>
          </li>
          <li>
            <button className='link-btn'>
              <Link to='/payment'>Checkout</Link>
            </button>
          </li>
        </ul>

        <div className='right__item'>
          <Link to={'/account'}>
            <button className='btn signin-btn'>Login</button>
          </Link>

          <div className='nav-container'>
            <img src={cart} alt='cart' className='cart' />

            <div className='amount-container'>
              <p>20</p>
            </div>
          </div>
          <img
            src={menu}
            alt='menu'
            className='toggle-btn'
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
