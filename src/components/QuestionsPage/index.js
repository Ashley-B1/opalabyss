import React, { useState } from 'react';
import './QuestionsPage.css';

import { Data } from './data.js'
import NavBar from '../NavBar';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const QuestionsPage = () => {
  const [show, setShow] = useState(false);

  const toggle = index => {
    if (show === index) {
      return setShow(null)
    }

    setShow(index)
  };

  return (
      <div className='questions-page'>
        <IconContext.Provider value={{ color: '#00ffb9', size: '25px' }}>
          <NavBar />
          <div className='faq-accordion'>
            <div className='questions-container'>
              {Data.map((item, index) => {
                return (
                  <>
                    <div className='faq-wrap' onClick={() => toggle(index)} key={index}>
                      <h1 className='question'>{item.question}</h1>
                      <span className='question-click'>{show === index ? <FiMinus /> : <FiPlus />}</span>
                    </div>
                    {show === index ? (
                      <div className='dropdown'>
                        <p className='answer'>{item.answer}</p>
                      </div>
                    ) : null}
                  </>
                )
              })}
            </div>
          </div>
        </IconContext.Provider>
      </div>
  )
}

export default QuestionsPage
