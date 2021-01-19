import React from 'react';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountPage from './components/Pages/AccountPage/AccountPage';
import HomePage from './components/Pages/HomePage/HomePage';
import ShoppingCart from './components/Pages/ShoppingCart/ShoppingCart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Payment from './components/Pages/Payment/Payment';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/products/:id'>
          <ProductPage />
        </Route>
        <Route path='/account'>
          <AccountPage />
        </Route>
        <Route path='/cart'>
          <ShoppingCart />
        </Route>
        <Route path='/payment'>
          <Payment />
        </Route>
        <Route path='/productdetails'>
          <ProductDetails />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
