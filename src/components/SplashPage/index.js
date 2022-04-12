import React from 'react';
import './SplashPage.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import logoImg from '../../images/splash/logo.png';
import mainBlob from '../../images/splash/bigBlob.png';
import smallBlob from '../../images/splash/blob2.png';
import blob1 from '../../images/splash/blob1.png';
import blob2 from '../../images/splash/blob3.png';
import blob3 from '../../images/splash/blob4.png';
import blob4 from '../../images/splash/blob5.png';

const SplashPage = () => {
  return (
    <>
      <header>
        <div className='splash-container'>
          <nav className='nav-bar'>
            <a className='logo-box hue-shift' href='https://www.google.com/'>
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

              <div className='splash-about'>
                <input className='about-btn hue-shift' type='button' value="Learn More" />
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

            <div className='image-group hue-shift'>
              <img className='blob-large' alt='large blob' src={mainBlob} />
              <img className='blob-small' alt='small blob' src={smallBlob} />
            </div>
          </div>
        </div>

        <img className='blob blob-2 hue-shift' alt='side-blob' src={blob2} />
        <img className='blob blob-1 hue-shift' alt='side-blob' src={blob1} />
        <img className='blob blob-3 hue-shift' alt='side-blob' src={blob3} />
        <img className='blob blob-4 hue-shift' alt='side-blob' src={blob4} />
      </section>
    </>
  )
}

export default SplashPage
