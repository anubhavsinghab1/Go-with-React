import React from 'react'
const Card = () => {
  return (
    <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800'><a href="../../public/my.jpg" ><img className='p-8 rounded-t-lg' src="../../public/my.jpg" alt="My Image" /></a>
    <div className='px-5 pb-5'>
      <a href="/">
      <h5 className='text-white'>Profile Image with quality camera</h5></a></div></div>
  )
}

export default Card