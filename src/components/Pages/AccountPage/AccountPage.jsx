import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import image1 from '../../../images/gallery-4.png';
import './AccountPage.css';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import { Link, useHistory } from 'react-router-dom';

const AccountPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='account-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <img src={image1} alt='' style={{ width: '100%' }} />
            </div>
            <div className='col-2'>
              <div className='form-container'>
                <div className='form-btn'>
                  <span>Login</span>
                  <span>Register</span>
                  <hr className='indicator' />
                </div>
                <form action='' className='login-form'>
                  <input type='email' placeholder='E-mail' />
                  <input type='password' placeholder='Password' />
                  <button type='submit' className='btn '>
                    Login
                  </button>
                  <Link to=''>Forgot password?</Link>
                </form>
                <form action='' className='reg-form-show'>
                  <input type='email' placeholder='Email' />
                  <input type='password' placeholder='Password' />
                  <button type='submit' className='btn'>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
