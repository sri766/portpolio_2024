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
import { ArrowLeft, ArrowRight, Link2, } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';


function UX_UI() {

  return (
    <div className="lg:my-20 my-4 select-none">
      <div className='title flex justify-between items-center'>
      <h1 className="heading">UI/UX Gallery</h1>
            <Link className='cursor-pointer' href='https://teal-cheque-784.notion.site/Hey-There-1219f160981980da8ca3f7a6abbecc7b?pvs=74'>
              <Button variant={buttonVariants.PRIMARY} className='text-white flex gap-2 p-2'>View More<Link2/></Button>
            </Link>
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
          <Image src='/images/u1.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/u2.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/u3.png' alt="slide_image" width={500} height={250}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/u4.png' alt="slide_image" width={500} height={250}/>
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

export default UX_UI;