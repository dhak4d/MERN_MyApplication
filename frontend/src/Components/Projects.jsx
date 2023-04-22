import React from 'react'
import './Projects.css'
import project from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/project.png'
import github from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/github.svg'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      <div className='project-up-box'>
        <div className='project-box'>
          <div><img src={project} /></div>
          <div className='all'>
            <h3>PortFolio Website</h3>
            <h1>SkillSetMe Portfolio Website</h1>
            <p>Developed my own Portfolio using MERN technology -</p>
            <ul>
              <li>Designed beautiful UI with the help of frontend technologies JSX, ReactJs</li>
              <li>Developed backend using ExpressJs, NodeJs for interacting frontend and backend</li>
              <li>Created database and collection on MongoDB atlas and stablish connection between database to backend.</li></ul>
            <div className='project-link'>
              <img src={github} />
              <button type='button' className='project-btn'><Link to='https://github.com/dhak4d/MERN_MyApplication' className='project-btn-Link'>Visit Project</Link></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-down-box1'>
        <div className='project-down-box'>
          <div><img src={project} /> </div> 
          <h4>Ecomm Website</h4>
          <h2>Ecommerce Website</h2>
          <div className='project-down-div'><Link to='https://github.com/dhak4d/E-comm_with_Js' className='project-down-Link'>Visit</Link>
          <img src={github} />
          </div>
        </div>
       
        <div className='project-down-box'>
          <div><img src={project} />
          <h4>Charts_Visuals</h4>
          <h2>Charts Visualization</h2>
          <div className='project-down-div'><Link to='https://github.com/dhak4d/Chart_Visuals' className='project-down-Link'>Visit</Link>
          <img src={github} />
          </div>
        </div> 
        </div>
        </div>

    </>
  )
}
