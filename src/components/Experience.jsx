"use client"
import { Link1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const Experience = () => {
  const exp = [
    {
      name: 'Codespeedy Technology Private Limited Internship',
      year: '2023-24',
      role: 'Web Developer and Technical Writer',
      tech: 'JavaScript',
      desc: 'Work on JavaScript, and documented the code for the project',
      pow: 'https://drive.google.com/file/d/1vKnyLPLnu0l8QMAKZA2fyFp8fj6v-NaW/view?usp=sharing'
    },
    {
      name: 'Summer Internship at NIT Rourkela',
      year: '2023-24',
      role: "Frontend Internship",
      tech: ['React.js, ','TailwindCSS'],
      desc: "Build an Conference Website for National Conference for Noise and Vibrational Control",
      pow: 'https://effortless-bombolone-92c7e8.netlify.app/'
    }
    
  ]
  return (
    <div className='h-full w-full flex flex-col'>
      <div>
        <h1 className='text-4xl my-4 flex justify-center font-bold'>Experience</h1>
      </div>
      <div className='card flex flex-col justify-center mx-10 gap-2 p-4'>
      {exp?.map((e,index)=>{
        return (
          <div key={index} className='card h-full border-l-4 border-purple-500 px-4 py-1'>
            <h1 className='text-2xl select-none'>{e.name}</h1>
            <h2 className='text-sm select-none'>{e.year}</h2>
            <h3 className='text-lg font-bold gradient select-none'>{e.role}</h3>
            {/* <h3 className='text-lg font-bold select-none border-2 p-1 w-fit'>{e.tech}</h3> */}
            <p className='px-4 py-2 select-none'>{e.desc}</p>
            <Link href={e.pow} target='__blank'>Project of Work
              <Link1Icon className='w-6 h-6 inline m-2' />
            </Link>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Experience
