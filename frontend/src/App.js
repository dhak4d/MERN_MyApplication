import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import GetDetails from './Components/GetDetails';

function App() {
  return (
    <React.Fragment>   
      <NavBar/>
      {/* < GetDetails /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="*" element={<div>Error Occurred</div>} />
      </Routes>
  </React.Fragment> 
  );
}

export default App;
