import React from 'react';
import './AboutPage.css';

import NavBar from '../NavBar';

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className='about-container'>
        <div className='inner-section'>
          <h1 className='about-title'>About Us</h1>
          <p className='about-content'>
            Lemon drops sesame snaps jelly beans toffee cookie. Cotton candy tiramisu dragée I love sesame snaps. Halvah jujubes danish pastry cake. Gummies cheesecake cookie I love pastry I love. I love muffin jujubes cake croissant lollipop chocolate cake lollipop. Marshmallow carrot cake sweet cotton candy tart cookie chocolate bar dessert. Oat cake fruitcake chocolate apple pie cake sesame snaps toffee sweet roll sweet. Jujubes cake sweet topping carrot cake jelly beans I love liquorice.
          </p>
          <div className='info'>
            <button className='about-button'>
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
