import React from 'react'
import  './Footer.css';
import { Link } from 'react-router-dom';
import linkdin from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/linkedin.svg'
import twitter from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/twitter.svg'
import instagram from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/instagram.svg'
import github from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/github.svg'

export default function Footer() {
  return (
  <>
  <div className='footer'>
    <div className='social-icon'>
      <Link to='https://www.linkedin.com/in/mangla-nagar-b955a01b3'><img src={linkdin} alt='Linkedin Mango' className='social-svg' ></img></Link>
      <Link to='https://twitter.com/ManglaNagar?t=lCIUCpYYVk_S5ppfWlwwlg&s=35'><img src={twitter} alt='twitter Mango' className='social-svg' ></img></Link>
      <Link to='https://instagram.com/mangla_nagar13?igshid=ZDdkNTZiNTM='><img src={instagram} alt='instagram Mango' className='social-svg' ></img></Link>
      <Link to='https://github.com/dhak4d'><img src={github} alt='github Mango' className='social-svg' ></img></Link>
    </div>
    <div className='copyright'>2023 &copy;All Rights Reserved | Build with ♡ by Mango </div>
  </div>
  </>
 
  )
}
