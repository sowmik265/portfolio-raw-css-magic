import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const COntact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nqyvalq', 'template_i3askgm', form.current, 'yQwFflyz2v3cQGc2y')
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'></MdOutlineEmail>
            <h4>Email</h4>
            <h5>sowmik265@gmail.com</h5>
            <a href='mailto:somwik265@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>Sowmik Ahamed</h5>
            <a href='https://m.me/sowmik.ahamed' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>01520100654</h5>
            <a href='https://api.whatsapp.com/send?phone01520100654' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default COntact