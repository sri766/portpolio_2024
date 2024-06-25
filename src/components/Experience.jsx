import React from 'react'

const Experience = () => {
  const exp = [
    {
      name: 'Summer Internship under Prof. Mohit Sir',
      year: '2023-24',
      role: "frontend Internship",
      tech: ['React.js','TailwindCSS'],
      desc: "Build an Conference Website for National Conference for Noise and Vibrational Control",
      pow: 'https://effortless-bombolone-92c7e8.netlify.app/'
    },
    {
      name: 'Summer Intership at Codespeedy Private Limited',
      year: '2023-34',
      role: 'Web Developer',
      desc: '',
      pow: ''
    }
  ]
  return (
    <div className='h-full w-full flex'>
      <div>
        <h1 className='text-4xl'>Experience</h1>
      </div>
      <div className='card'>

      </div>
    </div>
  )
}

export default Experience
