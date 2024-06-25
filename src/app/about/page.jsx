import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen lg:mx-64 mx-12'>
      <div className='image flex justify-center items-center'>
        <Image src='/sri.png' className='rounded-lg border-white' width={350} height={350} alt='hero' />
      </div>
      <div className='intro flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold my-2'>About Me</h1>
        <p className='text-lg mx-24 text-pretty'>
        Srisanth this side, a pre-final year student in National Insititute Of Technology,Rourkela(India) majoring in Industrial Design. I am a Fullstack Developer, UX/UI designer and a Devops enthusiast.I aspire to shape modern software. DevOps beckons with its alchemy of continuous integration, delivery, and deployment. Agile's iterative brilliance and microservices' autonomy captivate me. Containerization, CI/CD pipelines, and Infrastructure as Code bewitch with efficiency and automation. Embarking on this journey, curiosity and ardor ignite my quest for knowledge.
        </p>
      </div>
    </div>
  )
}

export default page
