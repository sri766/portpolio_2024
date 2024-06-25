"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import '../app/styles/Swiper.modules.css'
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function App() {

  return (
    <div className="lg:my-20 my-4 select-none">
      <div className='title flex justify-between'>
      <h1 className="heading">Project Gallery</h1>
      <button className="btn hover:bg-pink-500 my-auto px-4 py-2 rounded-full">
        <Link href={'/project'} >
          View All
        <ArrowRight className='inline'  />
        </Link>
      </button>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={true}
        speed={300}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src='/assets/project/movie2.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/project/indiquest1.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/project/disney1.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/project/indiquest2.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/project/movie1.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/project/portfolio1.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/project/storetrend1.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/project/indiquest3.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft className='text-white ion-icon' />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight className='text-white ion-icon'/>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;