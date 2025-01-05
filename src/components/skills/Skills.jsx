import React from 'react'
import './skills.css'
import { BiCheck } from 'react-icons/bi'
import { Card } from '../card/Card'

const Skills = () => {

  const data = [
    {
      heading: "Programming Language",
      points_items: [
        "C",
        "C++",
        "Python",
        "SQL"
      ]
    },
    {
      heading: "Web Development",
      points_items: [
        "HTML",
        "CSS",
        "Javascript",
        "Jquery",
        "AJAX",
        "PHP",
        "SQL"
      ]
    },
    {
      heading: "Frameworks",
      points_items: [
        "Laravel",
        "React Js",
        "Bootstrap"
      ]
    },
    {
      heading: "Cloud",
      points_items: [
        "GCP",
        "Azure",
      ]
    },
    {
      heading: "Platforms",
      points_items: [
        "UNIX",
        "Ubuntu",
        "Windows",
      ]
    },
    {
      heading: "Database Management",
      points_items: [
        "PhpMyAdmin",
        "Firebase",
      ]
    },
    {
      heading: "Other tools",
      points_items: [
        "XAMPP",
        "Wamp",
        "Visual Studio",
        "Git",
        "Postman",
        "Wordpress",
        "Wix"
      ]
    },
    {
      heading: "Other Skills",
      points_items: [
        "Skilled Communication",
        "Quick learner",
        "Leadership Quality",
      ]
    }
  ]
  return (
    <section id='skills'>
      <h5>Take a look at</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">
        {
          data.map(({ index, heading, points_items }) => {
            return (
              <div>
                <Card type="three" key={index} heading={heading} points_items={points_items} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills