import React from 'react';
import './About.css';
import img1 from '../../assets/img1.png';
import img3 from '../../assets/img3.jpg';
import { Socials } from '../socials/Socials';



export const About = () => {
  return (
    <section className='about-container'>
        <div className='about-content'>
            <img src={img1}/>
            <div className='text-container'>
              <p>
                  I've been into programming since I was child in school . To me programming is not just a hobby, it's much more than that. I see it as bridge between dreams and reality, to be able to turn innovative ideas and dreams into reality.
              </p>
              <br></br>
              <p>I started programming at the age of 15 when I first watched cs50, which ultimately led me to my journey. Ever since I've built numerous perosnal projects ranging from image classification of handwritten digits to self-driving car simulation using machine learning algorithms. I've built projects professioanally for startups as well including responsive full stack web apps, mobile apps etc</p>
            </div>
        </div>
    </section>
  )
}
