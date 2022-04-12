import React, { useState } from 'react';
import './AboutPage.css';

import NavBar from '../NavBar';

const AboutPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='about-container'>
      <NavBar />
      <div className='about'>
        <div className='inner-section'>
          <h1 className='about-title'>About Us</h1>
          <p className='about-content'>
            Lemon drops sesame snaps jelly beans toffee cookie. Cotton candy tiramisu dragée I love sesame snaps. Halvah jujubes danish pastry cake. Gummies cheesecake cookie I love pastry I love. I love muffin jujubes cake croissant lollipop chocolate cake lollipop. Marshmallow carrot cake sweet cotton candy tart cookie chocolate bar dessert. Oat cake fruitcake chocolate apple pie cake sesame snaps toffee sweet roll sweet. Jujubes cake sweet topping carrot cake jelly beans I love liquorice.
          </p>
          <div className='info'>
            <button onClick={() => setShow(!show)} className='about-btn hue-shift'>
              More Info
            </button>
          </div>
            {show && (
              <div className='click-more'>
                <p className='more-info'>
                  Bonbon pastry jelly beans pastry gummi bears chocolate cake marshmallow. Soufflé bonbon cake marshmallow jujubes. Soufflé sweet chocolate chocolate bar jelly powder. Cotton candy gummies toffee liquorice caramels sweet roll. Tart danish sweet roll jelly-o tiramisu ice cream candy cake danish. Caramels gummi bears tart gummies toffee powder tart apple pie biscuit. Cheesecake soufflé tootsie roll bonbon gummies cotton candy gingerbread. Tootsie roll pudding bonbon shortbread chocolate cake candy canes gummies lollipop. Pastry icing liquorice cake cake donut. Carrot cake marzipan cake carrot cake jujubes sweet roll biscuit. Carrot cake sweet roll pie donut powder sugar plum chupa chups jelly beans. Bear claw jelly beans brownie cookie powder powder caramels donut cheesecake.
                </p>
                <p className='more-info'>
                  Bonbon pastry jelly beans pastry gummi bears chocolate cake marshmallow. Soufflé bonbon cake marshmallow jujubes. Soufflé sweet chocolate chocolate bar jelly powder. Cotton candy gummies toffee liquorice caramels sweet roll. Tart danish sweet roll jelly-o tiramisu ice cream candy cake danish. Caramels gummi bears tart gummies toffee powder tart apple pie biscuit. Cheesecake soufflé tootsie roll bonbon gummies cotton candy gingerbread. Tootsie roll pudding bonbon shortbread chocolate cake candy canes gummies lollipop. Pastry icing liquorice cake cake donut. Carrot cake marzipan cake carrot cake jujubes sweet roll biscuit. Carrot cake sweet roll pie donut powder sugar plum chupa chups jelly beans. Bear claw jelly beans brownie cookie powder powder caramels donut cheesecake.
                </p>
                <p className='more-info'>
                  Bonbon pastry jelly beans pastry gummi bears chocolate cake marshmallow. Soufflé bonbon cake marshmallow jujubes. Soufflé sweet chocolate chocolate bar jelly powder. Cotton candy gummies toffee liquorice caramels sweet roll. Tart danish sweet roll jelly-o tiramisu ice cream candy cake danish. Caramels gummi bears tart gummies toffee powder tart apple pie biscuit. Cheesecake soufflé tootsie roll bonbon gummies cotton candy gingerbread. Tootsie roll pudding bonbon shortbread chocolate cake candy canes gummies lollipop. Pastry icing liquorice cake cake donut. Carrot cake marzipan cake carrot cake jujubes sweet roll biscuit. Carrot cake sweet roll pie donut powder sugar plum chupa chups jelly beans. Bear claw jelly beans brownie cookie powder powder caramels donut cheesecake.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
