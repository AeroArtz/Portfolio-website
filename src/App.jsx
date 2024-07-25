import { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import { Project } from './components/Project/Project';
import { Skills } from './components/Skills/Skills';
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { About } from './components/About/About';
import { Socials } from './components/socials/Socials';

function App() {
  const [projects,SetProjects] = useState([
    {
      title : 'ChatPDF using LangChain',
      date : '1 May 2023',
      desc : 'Built a ChatPDF application to interact with user uploaded documents using LLMs'
    },
    {
      title : 'A.I Virtual Assistant Jarvis',
      date : '1 Jan 2022',
      desc : 'Built a virtual assistant for the disabled to carry out tasks to use a computer system eg. adjust system settings, open/close applications'
    },
    {
      title : 'E-Commerce Marketplace',
      date : '1 Feb 2024',
      desc : 'Built a Full Stack Multi-vendor Marketplace to connect buyer and sellers'
    },
    {
      title : 'AI powered Lesson planner',
      date : '1 Jul 2024',
      desc : 'Built a lesson planner for teachers using Gemini 1.5 Flash'
    },
        {
      title : 'DeFi StableCoin',
      date : '1 Mar 2024',
      desc : 'Built a decentralized stable coin that tokenized a real world asset (US Dollar) using Solidity'
    },
    {
      title : 'Handwritten Digits Classifier',
      date : '20 May 2023',
      desc : 'Built a neural network from scratch to classify handwritten digit images'
    },
    {
      title : 'Property Price Predictor',
      date : '10 May 2023',
      desc : 'Built a linear regression mdoel from scratch to predict property prices'
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
      title : 'Movie Explorer App',
      date : '1 May 2023',
      desc : 'Built a an app to browse movies using React Native'
    },
    {
      title : 'Shopify App',
      date : '1 May 2023',
      desc : 'Built a Shopify web app to facilitate local delivery'
    },
    {
      title : 'Art Portfolio',
      date : '12 June 2021',
      desc : 'Built an art gallery website from scratch using Django'
    }
  ]);
  const [skills,setSkills] = useState([
    'Python', 'JavaScript', 'React', 'NodeJS','NextJS','Tailwind','MySQL','PostgreSQL','MongoDB','HTML', 'CSS', 'Deep Learning', 'Machine Learning'
  ]);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  


  return (
 
    <div>
    
      <Navbar/>
      <div className='container'>
        <Hero/>

        <div id='projects' className='projectsContainer'>
          <h5>Projects</h5>
          <div className='pOuter'>
            <div onClick={slideRight} className='arrow-right'>
             
              <FaChevronRight />

            </div>

            <div onClick={slideLeft} className='arrow-left'>
              <FaChevronLeft />
            </div>
            <Slider ref={sliderRef} {...settings}>
              {projects.map((data)=>{
                return(
                  <Project elm={data}/>
                )
              })}
              </Slider>
          </div>
        </div>

        <div id='skills' className='skillsContainer'>
          <h5>Skills</h5>
          <div className='sOuter'>
            {skills.map((data)=>{
              return(
                <Skills elm={data}/>
              )
            })}
          </div>
        </div>
        
        <div id='about' className='aboutContainer'>
          <h5>About</h5>
          <About/>
        </div>

        <div id='contact' className='contact-container'>
          <h5>Contact</h5>
          <p>If you have any inquiries, feel free to reach out to at abdulrehmanikram9710@gmail.com</p>
          <Socials/>
        </div>
      </div>
  
     
    </div>

  )
}

export default App
