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
        </div>

        <div className='heading'><h1 className='heading1'>Hello,</h1>
          <p className='heading2'>a bit about me:</p>

          <div className='Button'>
            <button className='btn1'><Link to='https://flowcv.com/resume/stso1hv6is' className='btn-l'>MY RESUME</Link></button>
            <button className='btn2'><Link to='/projects' className='btn-l'>MY WORK</Link></button>
            <button className='btn3'><Link to='#' className='btn-l'>MY SKILLS</Link></button>
          </div>

          <div className='about-me'>
            <div className='para'>
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
