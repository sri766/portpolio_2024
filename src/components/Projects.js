"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'


const Project = () => {

  const projects = [
    {
      title: "Disney+ Clone",
      tag: "Frontend",
      subtitle: ['React','Redux','Firebase'],
      description:
        "Built Disney Hotstar clone with React,Redux, and Firebase.Showcased adeptness in React frameworks, seamless integration, and skillful web app creation.",
      image: "/assets/project/disney2.png",
      link: "https://todo-3ce31.web.app/",
      github:'https://github.com/sri766/disney-clone',
      blog: 'false'
    },
    {
      title: "StoreTrend",
      tag: "Frontend",
      subtitle: ['React','Redux','Strapi','Stripe'],
      description:
        "Developed a React-based E-commerce site Powered with Redux, Strapi and Stripe. Implemented a user-friendly Add to Cart feature to enhance the shopping experience with Redux. Combined Stripe to provide a robust, smooth transaction and Checkout Page",
      image: "/assets/project/storetrend1.png",
      link: "https://hammerhead-app-eafku.ondigitalocean.app/",
      github:'https://github.com/sri766/StoreTrend',
      blog: 'false'
    },
    {
      title: "MovieFlex",
      tag: "Frontend",
      subtitle: ['React','Redux','TMDB API'],
      description:
        "Explore the world of cinema with the Movie Explorer App, a sophisticated React application powered by Redux and integrated with The Movie Database (TMDB) API. This feature-rich application provides users with an immersive and seamless experience as they navigate through a vast collection of movies and TV shows.",
      image: "/assets/project/movie1.png",
      link: "https://movie-db-theta-ten.vercel.app/",
      github:'https://github.com/sri766/MovieDB',
      blog: 'false'
    },
    {
      title: "CI/CD pipeline",
      tag: "DevOps",
      subtitle: ["Jenkins", "Github-Webhooks", "AWS EC2"],
      description:
        "Built a Node.js Todo app with CRUD features.Integrated CI/CD pipeline via Jenkins, GitHub webhooks, and deployed on AWS EC2.",
      image: "",
      link: "https://sri766.hashnode.dev/day-81-project-2declarative-pipeline",
      blog:'true'
    },
    {
      title: "Netflix-Clone on AWS EC2",
      tag: "DevOps",
      subtitle: ["AWS EC2", "Jenkins", "Docker", "Trivy", "SonarQube"],
      description:"Engineered Netflix clone deployment on AWS EC2 with Jenkins pipeline.Containerized using Docker for enhanced scalability.Implemented Trivy for rigorous Docker image security scans and SonarQube to ensure robust code quality and security.",
      image: "",
      link: "https://sri766-blog.vercel.app//netflix-clone-on-aws-ec2",
      blog:'true'
    }
  ];

  return (
    <div className='bento-grid h-screen grid grid-cols-12 gap-2 mx-12 lg:mx-64'>
      <div className='relative left col-span-4 border-2 overflow-hidden custom-shape'>
        <Image 
          src='/images/project.jpg' 
          className="absolute rounded-lg h-full w-full object-cover opacity-50" 
          alt='bg' 
          width={500} 
          height={500}
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
        <div className='relative z-10 text-xl lg:text-9xl font-modern text'>
          <h1 className='text-white text-center'>Projects</h1>
        </div>
      </div>
      <div className='right col-span-8 border-2 rounded'>
        <Swiper
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[Navigation]}
          className='mySwiper'
          grabCursor={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} >
              <div className='preview'>
                <Image 
                  src={project.image} 
                  className="mx-auto my-4 rounded-lg aspect-square" 
                  alt={project.title} 
                  width={500} 
                  height={500} 
                />
              </div>
              <div className='description flex flex-col justify-center items-center'>
                <h1 className='text-4xl my-4 font-bold'>{project.title}</h1>
                <p className='text-lg mx-12'>{project.description}</p>
                <div className='mt-4'>
                  <button className='py-6 px-4 '>
                    <a href={project.link}>Link</a>
                  </button>
                  <button className='py-6 px-4 '>
                    <a href={project.github}>Github</a>
                  </button>
                  {project.blog === 'true' && (
                    <a
                      href={project.link} 
                      className='ml-4 text-pink-500 underline' 
                      target='_blank' 
                      rel='noopener noreferrer'
                    >
                      Blog
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft className='text-white text-lg' />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight className='text-white text-lg'/>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Project
