import React from 'react'
import './about.css'
import About_img from '../../assets/forest.png'
import { MdSportsCricket } from 'react-icons/md'
import { SiGumtree } from 'react-icons/si'
import Education from '../education/Education'
import { Card } from '../card/Card'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={About_img} alt="" />
          </div>
        </div>

        <div></div>

        <div className="about__content">
          <div className="career__objective">
            <h3>My Career Objective</h3>
            <h5>To obtain a challenging position in an organisation, in which I am able to utilize my skills and abilities.</h5>

          </div>
          <div className="other__activities">
            <h3>Other Activities</h3>
            <div className="about__cards">
              <Card type="one" icon={MdSportsCricket} heading="Sports" points_items={["Cricket", "Chess", "Volleyball", "Puzzle"]} />
              <Card type="one" icon={SiGumtree} heading="Social Work" points_items={["NSS (National Service Scheme) member for 2 years.", "Beach clean up"]} />
            </div>
          </div>
        </div>

        <div></div>

        <div className='about__education'>
          <Education />
        </div>

        {/* for mobile and tab */}

        <div className="other__activities-mobile">
          <h3>Other Activities</h3>
          <div className="about__cards">
            <Card type="one" icon={MdSportsCricket} heading="Sports" points_items={["Cricket", "Chess", "Volleyball", "Puzzle"]} />
            <Card type="one" icon={SiGumtree} heading="Social Work" points_items={["NSS (National Service Scheme) member for 2 years.", "Beach clean up"]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About