import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

import NavBar from '../NavBar';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_02wrmfz', 'template_4x49pap', form.current, 'b60TD5DsgGB7VOuLv')
      .then((result) => {
          alert('Your inquiry has been submitted!');
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className='contact-page'>
      <NavBar />
        <form ref={form} className='contact-form' onSubmit={sendEmail}>
          <h3 className='contact-title'>Spread The Truth</h3>
          <p className='contact-msg'>
            Are you interested in sharing your conspiracy theories or just a recruiter looking for a frontend developer? If so please contact me using the form below and expect a response within 24-48 hours.
          </p>
          <input type='text' id='name' placeholder='Name' name='name' required />
          <input type='email' id='email' placeholder='Email' name='email' required />
          <input type='tel' id='phone' placeholder='Phone' name='phone' required />
          <textarea id='message' rows='4' placeholder='Message' name='msg' required />
          <button className='submit-btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactPage
