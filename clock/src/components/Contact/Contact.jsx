import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cst2o2b', 'template_nmlsjik', form.current, {
        publicKey: 'dADKFTagApNNIHxgw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
    <div class="page">
      <h1 className='heading'>CONTACT US</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Email: mohitepunam29@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: SVPM's COE, Baramati, India</p>
      </div>
    </div>
    </div>
  );
};


export default Contact;