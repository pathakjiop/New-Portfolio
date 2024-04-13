import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='head'>
      <h1>Get In Touch</h1>
      <p className='para'>
        Have a question or want to collaborate? Feel free to send me a message.
      </p>
      <div className='form'>
        <>
          <div className='mb-3'>
            <label
              htmlFor='exampleFormControlInput1'
              className='form-label'
            >
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='exampleFormControlTextarea1'
              className='form-label'
            >
              Example textarea
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

// You can define Input and Textarea components here if needed
// (consider using a UI library like Material UI or Bootstrap for these)
