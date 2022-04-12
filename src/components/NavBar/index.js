import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

import logoImg from '../../images/splash/logo.png';

const NavBar = () => {
  return (
    <header>
        <div className='splash-container'>
          <nav className='nav-bar'>
            <Link to='/' className='logo-box hue-shift'>
              <h2 className='logo-name'>Opal Abyss</h2>
              <img src={logoImg} alt='logo' className='logo' />
            </Link>

            <ul className='nav-list'>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <a href='https://www.google.com/' className='nav-link'>
                  Contact
                </a>
              </li>
              <li className='nav-item'>
                <Link to='/faq' className='nav-link'>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default NavBar
