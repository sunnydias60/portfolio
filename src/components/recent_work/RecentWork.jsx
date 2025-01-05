import React from 'react'
import './recent_work.css'
import FINVINE from '../../assets/finvine.PNG'
import JSP from '../../assets/jsp.PNG'
import VH from '../../assets/vhousing.PNG'
import TENX from '../../assets/10x.jpg'

const data = [
  {
    id: 1,
    image: TENX,
    title: '10x Task website',
    content: 'website to register for a task manager app',
    link: 'https://10xtask.com/'
  },
  {
    id: 2,
    image: FINVINE,
    title: 'Fivine website',
    content: 'website to register for a financial planner app',
    link: 'https://finvine.in/'
  },
  {
    id: 3,
    image: JSP,
    title: 'JSP wealth website',
    content: 'financial planning and other services website',
    link: 'https://jspwealth.com/'
  },
  {
    id: 4,
    image: VH,
    title: 'Vhousing website',
    content: 'landing page for real estate comapany',
    link: 'https://vhousing.in/'
  }
]

const RecentWork = () => {
  return (
    <section id='recent_work'>
      <h5>Checkout my</h5>
      <h2>Recent Work</h2>

      <div className="container recent_work__container">
        {
          data.map(({ id, image, title, link, content }) => {
            return (
              <article key={id} className="recent_work__item">
                <div className="recent_work__item-image">
                  <img className='recent_work__img' src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="recent_work__content">
                  <p>{content}</p>
                </div>
                <div className="recent_work__item-cta">
                  <a href={link} className="btn btn-primary" target='_blank'>View</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}
export default RecentWork