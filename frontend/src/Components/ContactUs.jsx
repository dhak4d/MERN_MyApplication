import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
          console.log(name, email, phone, message);
          fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({name, email, phone, message} ),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userRegister");
              if (data.status === "ok") {
                alert("Registration Successful");
              }
              else {
                console.log(data)
                alert("Something went wrong");
              }
              window.location.reload();
              });
            }
                  

  return (
    <>
    <h3 style={{textAlign:'center'}}>Contact Us</h3>
    <form  className="form" onSubmit={handleSubmit}>
      <label className="form-label">Name:</label>
        <input type="text" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
     
      <label className="form-label">Email:</label>
        <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <label className="form-label">Phone Number: </label>
        <input type="number" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
     
      <label className="form-label">Message:</label>
        <textarea  className="form-input" value={message} onChange={(e) => setMessage(e.target.value)} />
      
      <button className='submit' type="submit">Submit</button>
    </form>
    </>
  );
}

export default ContactUs;
