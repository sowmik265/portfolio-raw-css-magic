import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* ui design  */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Designing intuitive digital experiences for users.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Improving user satisfaction through thoughtful design.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Researching user needs to inform design decisions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Crafting visually appealing and functional designs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Collaborating with developers to ensure implementation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Iterating designs based on user feedback.</p>
            </li>
          </ul>
        </article>
        {/* web development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Writing clean and efficient code for websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Developing responsive and user-friendly web applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Integrating various technologies for seamless functionality.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Troubleshooting and debugging website issues.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Implementing security measures to protect user data.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Collaborating with designers to bring their vision to life.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Continuously learning and adapting to new technologies.</p>
            </li>
          </ul>
        </article>
        {/* content creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Creating compelling and engaging content for various platforms.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Conducting research to inform content strategy.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Collaborating with designers for visual content creation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Optimizing content for search engine ranking.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Proofreading and editing content for accuracy.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Keeping up-to-date with industry trends and best practices.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services