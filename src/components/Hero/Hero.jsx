import React, { useState } from 'react';
import './Hero.css';
import plapt from '../../assets/plapt.png';
import blapt from '../../assets/blapt.png';
import i1v2 from '../../assets/i1v2.png';
import i2 from '../../assets/i2.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  const [projects,SetProjects] = useState([
    {
      title : 'ChatPDF using LangChain',
      date : '1 May 2023',
      desc : 'Built a ChatPDF application to interact with user uploaded documents using LLMs'
    },
    {
      title : 'Handwritten Digits Classifier',
      date : '20 May 2023',
      desc : 'Built a neural network from scratch to classify handwritten digit images'
    },
    {
      title : 'Property Price Predictor',
      date : '10 May 2023',
      desc : 'Built a linear regression mdoel from scratch to predict property price'
    },
    {
      title : 'Sign Language Recognition',
      date : '1 May 2023',
      desc : 'Built a real time sign language recognition system using computer vision and deep learning'
    },
    {
      title : 'News App',
      date : '1 May 2023',
      desc : 'Built a crypto news app using React Native'
    },
    {
      title : 'Shopiy App',
      date : '1 May 2023',
      desc : 'Built a Shopify web app to facilate local delivery'
    },
    {
      title : 'Art Portfolio',
      date : '12 June 2021',
      desc : 'Built an art gallery website from scratch using Django'
    }
  ]);

  
  return (
    <section id='hero' className='heroContainer'>
      <div className='heroContent'>
        <h2 id='nameTitle'>
            ABDUL REHMAN
        </h2>
        <p id='roles'>Software developer  | Artist | Content Creator </p>
        <p>I write code to turn ideas into reality. Here you can explore my journey</p>
        
        <div className='button-container'>
          <AnchorLink href='#projects'>
            <button className='button'>
              See more
            </button>
          </AnchorLink>
        </div>

        

      </div>

      <div className='heroImg'>  
        <div className='plapt'>
          <img src={i1v2} alt='laptop'/>
        </div>
      </div>

    </section>
  )
}

export default Hero
