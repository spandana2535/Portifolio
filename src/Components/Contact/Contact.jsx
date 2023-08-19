import React, { useRef } from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { GrLinkedin } from 'react-icons/gr';
import emailjs from 'emailjs-com';
 import {BsFillChatTextFill} from 'react-icons/bs';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_73lbro7', 'template_fmg0d57', form.current, 'TJd03FE-mG64voW41')
      .then((result) => {
        console.log(result.text);
        form.current.reset(); // Reset the form fields

      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className=" container contact-container">
        <div className="contact-options">
          <article id="email" className='contact-option'>
            <AiOutlineMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>spandanapasupuleti2535@gmail.com</h5>
            <a href="mailto:spandanapasupuleti2535@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article id="LinkedIn" className='contact-option'>
            <GrLinkedin className='contact-icon' />
            <h4>LinkedIn</h4>
            <h5>Spandana Pasupuleti</h5>
            <a
              href="https://www.linkedin.com/in/spandanapasupuleti/"
              target="_blank" rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          {/* <article id="whatsapp" className='contact-option'>
            <BsWhatsapp className='contact-icon'/>
            <h4>Whatsapp</h4>
            <h5>+19803277156</h5>
            <a
              href="https://api.whatsapp.com/send?phone=19803277156"
              target="_blank" rel="noreferrer"
            >
              Send a message
            </a>
          </article> */}
          <article id="sms" className="contact-option">
    <BsFillChatTextFill className="contact-icon" />
  <h4>Text Message</h4>
  <h5>+19805521975</h5>
  <a href="sms:+19805521975">Send a text message</a>
</article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Full Name" name='name' required className="form-field" />
          <br />
          <input type="text" placeholder="Your Email" name='email' required className="form-field" />
          <br />
          <textarea
            rows="5"
            placeholder="Your Message" name='message'
            required
            className="form-field"
          ></textarea>
          <br />
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
