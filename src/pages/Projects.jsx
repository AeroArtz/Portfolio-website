import { Project } from '../components/Project/Project';
import { useRef, useState, React } from 'react';
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const Projects = () => {
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
    <div id='#projects' className='projectsContainer'>
          <h5>Projects</h5>
          <div className='p0uter'>
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
  )
}
