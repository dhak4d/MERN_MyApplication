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
    if (!name.trim()) {
      setNameError('Please enter your name');
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
      fetch('http://localhost:5000/register', {
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
          console.log(data, 'userRegister');
          if (data.status === 'ok') {
            alert('Registration Successful');
          } else {
            console.log(data);
            alert('Something went wrong');
          }
          window.location.reload();
        });
    }
  };

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Contact Us</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="error">{nameError}</div>}
        </div>

        <div>
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>

        <div>
          <label className="form-label">Phone Number: </label>
          <input
            type="number"
            className="form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {phoneError && <div className="error">{phoneError}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea className="form-input" value={message} onChange={(e) => setMessage(e.target.value)}/>
          {messageError && <div className="error">{messageError}</div>}
        </div>
        <button className='submit' type="submit">Submit</button>
      
    </form>
    </>
  );
}

export default ContactUs;
