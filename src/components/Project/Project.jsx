import React from 'react'
import './Project.css'

export const Project = ({elm}) => {
  return (
    <div className='pOuter-card'>
        <h6>{elm.title}</h6>
        <p className='work-duration'>{elm.date}</p>
        <p className='desc'>{elm.desc}</p>
    </div>
  )
}


