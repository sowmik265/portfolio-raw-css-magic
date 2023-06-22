import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/toytree.jpg'
import IMG2 from '../../assets/melodylab.jpg'
import IMG3 from '../../assets/chefssteps.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Toy Tree</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sowmik265/toy-tree" className="btn" target='_blank'>Github</a>
            <a href="https://toy-tree-9f618.web.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Melody Lab</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sowmik265/melody-lab" className="btn" target='_blank'>Github</a>
            <a href="https://melody-lab.web.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>ChefSteps</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sowmik265/chef-steps" className="btn" target='_blank'>Github</a>
            <a href="https://chefsteps-612c0.web.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio