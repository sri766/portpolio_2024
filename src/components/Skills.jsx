"use client"
import Image from 'next/image'
import React from 'react'

const Skills = () => {

  const data = {
    languages: [
      { name: "JavaScript", path: "/space-assets/js.png" },
      { name: "TypeScript", path: "/space-assets/ts.png" },
      { name: "C++", path: "/space-assets/cpp.png" },
      { name: "Python", path: "/space-assets/python.png" },
    ],
    toolsTechnologies: [
      { name: "React.js", path: "/space-assets/react.png" },
      { name: "Next.js", path: "/space-assets/next.png" },
      { name: "Node.js", path: "/space-assets/node.png" },
      { name: "Express", path: "/space-assets/express.png" },
      { name: "Docker", path: "/space-assets/docker.webp" },
      { name: "Jenkins", path: "/space-assets/jenkins.png" },
      { name: "MongoDB", path: "/space-assets/mongodb.png" },
      { name: "MySQL", path: "/space-assets/mysql.png" },
      { name: "Prisma", path: "/space-assets/prisma.webp" },
      { name: "GraphQL", path: "/space-assets/graphql.png" },
    ],
    platforms: [
      { name: "Vercel", path: "/space-assets/vercel.svg" },
      { name: "Netlify", path: "/space-assets/netlify.png" },
      { name: "DigitalOcean", path: "/space-assets/digitalocean.svg" },
    ]
  };

  return (
    <div className='h-full w-full relative p-8'>
      <video 
            autoPlay
            loop 
            muted 
            className='w-full h-[350px] object-cover top-[68%] opacity-50 z-[-5] absolute'>
            <source src='/space-assets/cards-video.webm' type='video/webm' />
        </video>
      <h1 className='text-4xl py-4 font-bold text-white text-center'>Tech Stack</h1>

      <div className='mb-6'>
        <h2 className='text-2xl font-semibold text-gray-300 mb-4'>Languages</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
          {data.languages.map((item, index) => (
            <div key={index} className='flex gap-2 items-center p-2 rounded-lg bg-slate-100 bg-opacity-10 backdrop-blur-lg hover:scale-105 transition-transform duration-300'>
              <Image src={item.path} width={40} height={40} alt={item.name} className='mb-2' />
              <p className='text-white text-lg'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-6'>
        <h2 className='text-2xl font-semibold text-gray-300 mb-4'>Tools & Technologies</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
          {data.toolsTechnologies.map((item, index) => (
            <div key={index} className='flex gap-2 items-center p-2 rounded-lg bg-slate-100 bg-opacity-10 backdrop-blur-lg hover:scale-105 transition-transform duration-300'>
              <Image src={item.path} width={40} height={40} alt={item.name} className='mb-2 aspect-square object-contain object-center' />
              <p className='text-white text-lg'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-semibold text-gray-300 mb-4'>Platforms</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
          {data.platforms.map((item, index) => (
            <div key={index} className='flex gap-2 items-center p-2 rounded-lg bg-slate-100 bg-opacity-10 backdrop-blur-lg hover:scale-105 transition-transform duration-300'>
              <Image src={item.path} width={40} height={40} alt={item.name} className='mb-2 aspect-square object-center object-contain' />
              <p className='text-white text-lg'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
