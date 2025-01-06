import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-64'>
      <div className='image flex justify-center items-center'>
        <Image src='/assets/sri.png' className='rounded-lg border-white' width={250} height={250} alt='hero' />
      </div>
      <div className='intro flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold my-2'>About Me</h1>
        <p className='text-sm text-pretty'>
        <span className='text-lg'>Srisanth</span> this side, a pre-final year student in National Insititute Of Technology,Rourkela(India) majoring in Industrial Design. I am a Fullstack Developer, UX/UI designer and a Devops enthusiast.I aspire to shape modern software. DevOps beckons with its alchemy of continuous integration, delivery, and deployment. Agile&apos;s iterative brilliance and microservice&apos;s autonomy captivate me. Containerization, CI/CD pipelines, and Infrastructure as Code bewitch with efficiency and automation. Embarking on this journey, curiosity and ardor ignite my quest for knowledge.
        </p>
      </div>
    </div>
  )
}

export default page
