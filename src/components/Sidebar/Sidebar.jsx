import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from '../../images/logo.png';
import './Sidebar.css';

import { social, links } from './data';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='looqu' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <Link to={url}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: url,
                }}
                target='_blank'
              >
                {icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
