import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  // emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yj1jelu', 'template_3zdmt3k', form.current, '6KOFIU5DKJyZyFJ_1')
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
            <a href="https://api.whatsapp.com/send?phone=+15483330392" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
//test