import React, { useState } from 'react';


function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate name
    if (e.target.value<3) {
      setNameError('Please enter your valid name');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    // Validate message
    if (!message.trim()) {
      setMessageError('Please enter a message');
      isValid = false;
    } else {
      setMessageError('');
    }

    // Submit the form
    if (isValid) {
      console.log(name, email, phone, message);
      fetch('http://localhost:5000/B_ContactUs', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ name, email, phone, message }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'ok') {
            alert('Contact details successful saved');
          } else {
            console.log(data);
            alert('Something went wrong with BContactUs');
          }
          window.location.reload();
        });
    }
  };

  return (
    <>
      <div className='form-container'>
      <form className="form" onSubmit={handleSubmit}>
          <h3 style={{ textAlign: 'center', color:'black' }}>GET IN TOUCH</h3>
        
          <div className='inputBox'>
          <input type="text" className="form-input" value={name} onChange={(e) => setName(e.target.value)} required/>
          <span>Name</span>
          {nameError && <div className="error">{nameError}</div>}
          </div>
        
          <div className='inputBox'>
          <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <span>Email</span>
          {emailError && <div className="error">{emailError}</div>}
          </div>
      
          <div className='inputBox'>
          <input type="number" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
          <span>Phone Number</span>
          {phoneError && <div className="error">{phoneError}</div>}
          </div>

          
          <div className='inputBox'>
          <textarea className="form-input" value={message} onChange={(e) => setMessage(e.target.value)} required/>
          <span>Message</span>
          {messageError && <div className="error">{messageError}</div>}
          </div>
       
          <div>
          <input type='submit' value='Send'/>
         </div>
      
    </form>
    </div> 
    </>
  );
}

export default ContactUs;
