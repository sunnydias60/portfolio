import React, { useState } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  // emailjs
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); 

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_l2zt8u5', 'template_3zdmt3k', form.current, '6KOFIU5DKJyZyFJ_1')
    .then(
      (result) => {
          console.log(result.text); // Log success
          setMessageSent(true);    // Set success state
          setTimeout(() => setMessageSent(false), 3000); // Hide after 3 seconds
      },
      (error) => {
          console.error(error.text); // Handle errors
      }
  );
    e.target.reset();
  };
  // emailjs 
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sunnydias60@gmail.com</h5>
            <a href="mailto:sunnydias60@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelephone className='contact__option-icon' />
            <h4>Call</h4>
            <h5>+15483330392</h5>
            <a href="tel:+15483330392" target='_blank'>Click to call</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+15483330392</h5>
            <a href="https://api.whatsapp.com/send?phone=5483330392" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className='submit-message'>
            <button type='submit' className="btn btn-primary submit">Send Message</button>
            {/* Display success message */}
            {messageSent && (
              <div className="btn btn-primary message-sent">
                  Message sent successfully!
              </div>
            )}
          </div>
          
        </form>

        
      </div>
    </section>
  )
}

export default Contact
//test