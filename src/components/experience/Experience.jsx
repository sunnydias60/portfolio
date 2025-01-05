import React from 'react'
import './experience.css'
import { Card } from '../card/Card'

const intership = [
  {
    date: 'August 2020-October 2020',
    position: 'Web Development Intern',
    company: 'TECHNOCOLABS',
    location: 'Indore, MP',
    points_items: [
      "Tasked with developing a Coding Quiz Website with 28 mini projects",
      "Worked on various domain for task such as HTML, CSS, JavaScript, React Js, Firebase.",
      "Worked as Project leader for development team, managed and completed the project within the given deadline."
    ]
  },
  {
    date: 'November 2020-February 2021',
    position: 'Website & Web App Development Intern',
    company: 'RC Diamonds',
    location: 'Rajkot, Gujarat',
    points_items: [
      "Tasked with working on service oriented businesses such as LeadGenPro.club, Youthmonk.com and CorporateTrainers.club as well as developing various single-page and multi-page websites",
      "Worked on Bootstrap, React Js for frontend, PHP, SQL for backend, Wordpress for websites and Postman for API testing.",
      "Worked with 3 teams on 5 projects and awarded as 'RC Diamonds Outstanding Performer at Web Development Internship Programme'"
    ]
  }
]

const professional = [
  {
    date: 'January 2021- May 2021',
    position: 'Junior Developer',
    company: 'Clarus Info Solutions',
    location: 'Mumbai, Maharashtra',
    points_items: [
      "Tasked with working on Task Manager and CRM web applications along with landing pages and e-commerce websites.",
      "Worked on Laravel framework along with PHP, JavaScript, SQL.",
      "Developed websites such as 10xTask.com , Finvine.in single-handedly and added new modules in web app such as 10x Task working with team."
    ]
  },
  {
    date: 'June 2021- Present',
    position: 'Application Development Associate',
    company: 'Accenture',
    location: 'Mumbai, Maharashtra',
    points_items: [
      "Tasked with working on GCP as Cloud Operations and Azure as DBA support",
      "Worked on BigQuery, CloudSQL, Compute Instance, Monitoring in GCP",
      "In Azure, performed DBA support activities using SSMS on MSSQL DB and managing tickets in service-now platform.",
      "Used Terraform and Git to add resources in GCP"
    ]
  }
]

const Experience = () => {


  return (
    <section id='experience'>
      <h5>Internship and Professional</h5>
      <h2>Work Experience</h2>
      <div className="container experience__container">
        <div className="experience__internship">
          <h3>Internships</h3>
          {
            intership.map(({ index, date, position, company, location, points_items }) => {
              return (
                <Card type="two" key={index} date={date} position={position} company={company} location={location} points_items={points_items} />
              )
            })
          }
        </div>
        <div className='line'>
        </div>
        <div className="experience__professional">
          <h3>Professional</h3>
          {
            professional.map(({ index, date, position, company, location, points_items }) => {
              return (
                <Card type="two" key={index} date={date} position={position} company={company} location={location} points_items={points_items} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Experience