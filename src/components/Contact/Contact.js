import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Get In Touch</h1>
      <p className='para'>
        Have a question or want to collaborate? Feel free to send me a message.
      </p>
      <div className='form'>
        <>
          <div className='container'>
            <label
              htmlFor='exampleFormControlInput1'
              className='form-label'
            >
              Your Name
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
            />
          </div>
          <div className='container'>
            <label
              htmlFor='exampleFormControlInput1'
              className='form-label'
            >
              Email Address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div className='container'>
            <label
              htmlFor='exampleFormControlTextarea1'
              className='form-label'
            >
              Email Area
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows={3}
              defaultValue={""}
              
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default Contact;
