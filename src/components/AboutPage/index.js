import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            Opal Abyss was found by me, Skye Brown, a natural born weirdo who's not afraid to explore alternative outlooks on life. It started when I was around 13 years old, I was on some weird phenomenon website. That's when I discovered the story of Black Dahlia, a young woman who was found butchered in Leimert Park in Los Angeles. Little did I know I would soon go down the rabbit hole of strange occurrences and conspiracies that will last over a decade.
          </p>
          <div className='info'>
            <button onClick={() => setShow(!show)} className='about-btn hue-shift'>
              More Info
            </button>
          </div>
            {show && (
              <div className='click-more'>
                <p className='more-info'>
                  I know what you're wondering, "Skye, why did you name it Opal Abyss?" A couple of years ago, I started my spiritual journey and felt drawn to witchcraft, gemology, astrology, and other alternative practices. I studied the different spiritual meanings behind gems and found opal is the stone that encourages self-expression and confidence. Growing up I was bullied a lot for being weird, but now as an adult I appreciate all my quirks. In a sense I found my opal, and now I'm determined to help other people find theirs. Abyss is just an alias for the rabbit hole that is all things conspiracy and abnormal.
                </p>
                <p className='more-info'>
                  Opal Abyss is meant to help people embrace their quirks and curiosity. The overall message is to not be afraid to explore the dark and weird side of yourself. Life is not meant to be monotonous, humanity's strength is our individuality. In my personal opinion, we are all like puzzle pieces. We share the same picture/experience, but different pieces/outlook. None of us are built "wrong", we are designed to be unique. Life isn't about cutting the pieces to make it fit, but to simply find your place in this big puzzle we call life. 
                </p>
                <p className='more-info'>
                This is a developing website, so there will be updates in due time. I will be adding posts at a later date. If you have any recommendations for a post, please go to the <Link className='contact-link' to='/contact'>contact page</Link> and send over your recommendation.
                </p>
                <p className='more-info'>
                  Have fun weirdos 🤪!
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
