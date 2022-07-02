import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"    // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={70}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aperiam quo necessitatibus officia, illum reprehenderit facilis nihil corrupti earum consequatur praesentium omnis enim iste tempore similique harum delectus explicabo veniam?</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar one" />
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aperiam quo necessitatibus officia, illum reprehenderit facilis nihil corrupti earum consequatur praesentium omnis enim iste tempore similique harum delectus explicabo veniam?</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar one" />
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aperiam quo necessitatibus officia, illum reprehenderit facilis nihil corrupti earum consequatur praesentium omnis enim iste tempore similique harum delectus explicabo veniam?</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials