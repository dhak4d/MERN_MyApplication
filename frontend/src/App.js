import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import ContactUs from './Components/ContactUs';
import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
// import GetDetails from './Components/GetDetails';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>   
      <NavBar/>
      {/* < GetDetails /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="*" element={<div>Error Occurred</div>} />
      </Routes>
      <Footer />
  </React.Fragment> 
  );
}

export default App;
