import React from 'react';
import './SplashPage.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import logoImg from '../../images/splash/logo.png';
import mainBlob from '../../images/splash/bigBlob.png';
import smallBlob from '../../images/splash/blob2.png';

const SplashPage = () => {
  return (
    <>
      <header>
        <div className='splash-container'>
          <nav className='nav-bar'>
            <a className='logo-box' href='https://www.google.com/'>
              <h2 className='logo-name'>Opal Abyss</h2>
              <img src={logoImg} alt='logo' className='logo' />
            </a>

            <ul className='nav-list'>
              <li className='nav-item'>
                <a href='https://www.google.com/' className='nav-link'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href='https://www.google.com/' className='nav-link'>
                  Contact
                </a>
              </li>
              <li className='nav-item'>
                <a href='https://www.google.com/' className='nav-link'>
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className='splash-page'>
        <div className='splash-container'>
          <div className='splash-content'>
            <div className='content-details'>
              <h1 className='title'>Let's Explore The Unknown</h1>
              <p className='splash-description'>
                Lollipop I love croissant croissant I love pudding cheesecake. I love lemon drops jelly apple pie I love toffee candy sweet roll chupa chups.
              </p>

              <div className='search'>
                <input className='search-bar' type='text' placeholder="Your Email Address" required />
                <input className='search-btn' type='button' value="Join" />
              </div>

              <div className='sm-list'>
                <a className='sm-link' href="https://www.google.com/">
                  <FaTwitter />
                </a>
                <a className='sm-link' href="https://www.google.com/">
                  <FaInstagram />
                </a>
                <a className='sm-link' href="https://www.google.com/">
                  <FaFacebookF />
                </a>
                <a className='sm-link' href="https://www.google.com/">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className='image-group'>
              <img className='blob-large' alt='large blob' src={mainBlob} />
              <img className='blob-large' alt='large blob' src={smallBlob} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SplashPage
