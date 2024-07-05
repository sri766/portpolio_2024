import React from 'react'
import Image from 'next/image'
import Docker from '../../components/Docker'
import Form from '../../components/Form'

const page = () => {


  return (
    <div className='h-screen lg:mx-64'>
      <Image
        className='absolute top-0 left-0 z-[-1]'
        src='/space-assets/main.svg'
        width={1280} height={500}
        alt='main'
      />
      <h1 className='text-4xl'>Let&apos;s Connect</h1>
      <div className='content flex justify-center items-center gap-4'>
        <div className='left'>
          <Image src="/assets/srisanth.webp" width={350} height={350}
            className='contrast-100 hover:grayscale rounded-lg w-auto h-auto' alt='My-Image' />
          <Docker />
        </div>
        <div className='form h-full w-full'>
          <Form />
        </div>
      </div>

    </div>
  )
}

export default page
