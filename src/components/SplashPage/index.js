import React from 'react';
import './SplashPage.css';
import { Link } from 'react-router-dom';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import mainBlob from '../../images/splash/bigBlob.png';
import smallBlob from '../../images/splash/blob2.png';
import blob1 from '../../images/splash/blob1.png';
import blob2 from '../../images/splash/blob3.png';
import blob3 from '../../images/splash/blob4.png';
import blob4 from '../../images/splash/blob5.png';

import NavBar from '../NavBar';

const SplashPage = () => {
  return (
    <>
      <NavBar />
      <section className='splash-page'>
        <div className='splash-container'>
          <div className='splash-content'>
            <div className='content-details'>
              <h1 className='title'>Let's Explore The Unknown</h1>
              <p className='splash-description'>
                Lollipop I love croissant croissant I love pudding cheesecake. I love lemon drops jelly apple pie I love toffee candy sweet roll chupa chups.
              </p>

              <div className='splash-about'>
                <Link to='/about' className='route-link'>
                  <input className='about-btn hue-shift' type='button' value="Learn More" />
                </Link>
              </div>

              <div className='sm-list'>
                <a rel="noreferrer noopener" target="_blank" className='sm-link' href="https://www.google.com/">
                  <FaLinkedinIn />
                </a>
                <a rel="noreferrer noopener" target="_blank" className='sm-link' href="https://www.google.com/">
                  <FaGithub />
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
