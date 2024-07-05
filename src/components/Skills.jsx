"use client"
import Image from 'next/image'
import React from 'react'

const Skills = () => {

  const data =[
    {
      "name": "next",
      "path": "/space-assets/next.png"
    },
    {
      "name": "tailwind",
      "path": "/space-assets/tailwind.png"
    },
    {
      "name": "prisma",
      "path": "/space-assets/prisma.webp"
    },
    {
      "name": "javascript",
      "path": "/space-assets/js.png"
    },
    {
      "name": "html",
      "path": "/space-assets/html.png"
    },
    {
      "name": "css",
      "path": "/space-assets/css.png"
    },
    {
      "name": "react",
      "path": "/space-assets/react.png"
    },
    {
      "name": "typescript",
      "path": "/space-assets/ts.png"
    },
    {
      "name": "stripe",
      "path": "/space-assets/stripe.webp"
    },
    {
      "name": "figma",
      "path": "/space-assets/figma.png"
    },
    {
      "name": "framer",
      "path": "/space-assets/framer.png"
    },
    {
      "name": "graphql",
      "path": "/space-assets/graphql.png"
    }
  ]
  

  return (
    <div className='h-full w-full relative'>
        <video 
            autoPlay
            loop 
            muted 
            className='w-full h-[550px] object-cover opacity-35 z-[-5] absolute'>
            <source src='/space-assets/cards-video.webm' type='video/webm' />
        </video>

        <div className='content-tiles top-0 h-full w-full'>
            <h1 className='text-4xl py-4 font-bold'>SKILLS</h1>
            <div className='w-full flex items-center justify-between'>
            {
              data?.map((items,index)=>{
                return(
                  <div key={index} className='image flex flex-wrap gap-4'>
                    <Image 
                      src={items.path} 
                      alt={items.name}
                      className='object-cover object-center w-auto h-auto'
                      width={50}
                      height={50}
                    />
                  </div>
                )
              })
            }
            </div>
        </div>
    </div>
  )
}

export default Skills
