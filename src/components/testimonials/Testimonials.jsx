import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/portfolio1.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Name 1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga iure quod nulla amet quis ut incidunt quas corrupti illo reiciendis. Suscipit distinctio exercitationem, iusto iste sapiente ipsum autem magnam!'
  },
  {
    avatar: AVTR1,
    name: 'Name 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga iure quod nulla amet quis ut incidunt quas corrupti illo reiciendis. Suscipit distinctio exercitationem, iusto iste sapiente ipsum autem magnam!'
  },
  {
    avatar: AVTR1,
    name: 'Name 3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga iure quod nulla amet quis ut incidunt quas corrupti illo reiciendis. Suscipit distinctio exercitationem, iusto iste sapiente ipsum autem magnam!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review</h5>
      <h2>Testimonials</h2>

      {/* <Swiper> is parent and <SwiperSlide> is child for swiperjs */}

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review, index }) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials