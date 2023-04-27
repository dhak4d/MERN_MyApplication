import React from 'react'
import './Home.css';
import owner from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/owner.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/B_GetAboutMe", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);


  return (
    <>
      <div className='home-page'>
        <div className='image'>
          <img src={owner} alt="Profile1" className='img' />
          <h2 className='owner-name'>Mangla Nagar</h2>
        </div>

        <div className='heading'>
          <h1 className='heading1'>Hello,</h1>
          <p className='heading2'>a bit about me:</p>

          <div className='Button'>
            <button className='btn1'><Link to='https://flowcv.com/resume/stso1hv6is' className='btn-l'>MY RESUME</Link></button>
            <button className='btn2'><Link to='/projects' className='btn-l'>MY WORK</Link></button>
            <button className='btn3'><Link to='#' className='btn-l'>MY SKILLS</Link></button>
          </div>

          <div className='about-me'>
            <div className='para'>
              
              {/* <p>I'm a MERN full-stack developer with over a year of experience.
              I'm possess expertise in the MERN technology stack, consisting of MongoDB, Express.js, React.js, and Node.js.
              Having a comprehensive understanding of both front-end and back-end development, and can develop robust and scalable web applications.
              My skill set includes proficiency in JavaScript, HTML, CSS, and other relevant programming languages.</p> */}

              {(data.length !== 0) && <ul>
                {data.map((res) => {
                  return <li>
                    {res.meData}
                  </li>
                })
                }
              </ul>
              }
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
