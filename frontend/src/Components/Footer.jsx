import React from 'react'
import  './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
   <>
  <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><Link To ='' className="social-icon__link">
          <ion-icon name="logo-facebook"></ion-icon>
        </Link></li>
      <li className="social-icon__item"><Link To =''  className="social-icon__link" >
          <ion-icon name="logo-twitter"></ion-icon>
        </Link></li>
      <li className="social-icon__item"><Link To ='' className="social-icon__link" >
          <ion-icon name="logo-linkedin"></ion-icon>
        </Link></li>
      <li className="social-icon__item"><Link To =''  className="social-icon__link" >
          <ion-icon name="logo-instagram"></ion-icon>
        </Link></li>
    </ul>
   
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </>
  )
}
