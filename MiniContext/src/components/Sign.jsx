import React, { useState } from 'react'
import {Link } from 'react-router-dom'

const Sign = () => {
  const [show,setShow]=useState(false);
  const showSignup=()=>{
    setShow(true);
    setShowin(false)
  }
  const [showin,setShowin]=useState(true);
  const showlogin=()=>{
    setShowin(true);
    setShow(false);
  }
  return (
    <div className='h-screen bg-red-100 flex justify-center items-center'>
      <div className='w-[70vw] bg-gray-900 text-white h-[80vh] grid grid-cols-1 rounded-lg sm:grid-cols-2'>
        <div className=' flex flex-col justify-center' >
         {show ? <form className='flex flex-col gap-6 px-[50px] py-[20px]'>
            <h1 className='font-medium text-3xl mb-4'>Create Account</h1>
            <div className='flex flex-col relative'>
              <input type="text" required name='name' className='bg-transparent text-gray-700 p-2 peer border-b-2 outline-none' autocomplete='off'/>
              <label className='absolute left-1 top-[-15px] transition-all duration-200 transform scale-75 text-blue-500 peer-focus:left-0 peer-focus:text-blue-500 peer-focus:scale-100' htmlFor="name">Name</label>
            </div>
            <div className='flex flex-col relative'>
              <input type="email" required name='email' className='bg-transparent text-gray-700 p-2 peer border-b-2 outline-none' autocomplete='off'/>
              <label className='absolute left-1 top-[-15px] transition-all duration-200 transform scale-75 text-blue-500 peer-focus:left-0 peer-focus:text-blue-500 peer-focus:scale-100' htmlFor="email">Email</label>
            </div>
            <div className='flex flex-col relative'>
              <input type="password" required name='password' className='bg-transparent text-gray-700 p-2 peer border-b-2 outline-none'/>
              <label className='absolute left-[0px] top-[-15px] transition-all duration-200 transform scale-75 text-blue-500 peer-focus:left-0 peer-focus:text-blue-500 peer-focus:scale-100' htmlFor="password">Password</label>
            </div>
            <div className='flex flex-col relative'>
              <input type="password" required name='confirm' className='bg-transparent text-gray-700 p-2 peer border-b-2 outline-none'/>
              <label className='absolute -left-2 top-[-15px] transition-all duration-200 transform scale-75 text-blue-500 peer-focus:left-0 peer-focus:text-blue-500 peer-focus:scale-100' htmlFor="confirm"> Confirm Password</label>
            </div>
            <button className='border bg-white text-black mt-4 p-1.5 rounded-md border-none  font-bold hover:bg-orange-500 hover:ring-orange-900' type='submit'>Sign Up</button>
            
         <h3 className='text-center' >Already have an acount ?<Link to="login" onClick={showlogin}  className='text-green-500 hover:text-green-600'>Sign In</Link></h3>
          </form> : <div className='h-[80vh]'> <img src='../../mypic.jpg' className= 'w-full h-full object-cover rounded-lg hidden sm:block'/></div>
        }
        </div>
        <div className='flex flex-col justify-around '>
          {showin?<form className='flex flex-col gap-10 px-[50px] py-[30px] '>
            <h1 className='text-3xl font-medium mb-4'>Sign In</h1>
            <img src="" alt="" />
            <div className='flex flex-col relative'>
              <input type="text" required name='username' autocomplete='off' className='bg-transparent text-gray-700 p-2 peer border-b-2 outline-none'/>
              <label className='absolute left-1 top-[-15px] transition-all duration-200 transform scale-75 text-blue-500 peer-focus:left-0 peer-focus:text-blue-500 peer-focus:scale-100' htmlFor="username">Username</label>
            </div>
            <div className='flex flex-col relative'>
              <input type="password" required name='password' className='bg-transparent text-gray-700 p-2 peer border-b-2 outline-none'/>
              <label className='absolute left-1 top-[-15px] transition-all duration-200 transform scale-75 text-blue-500 peer-focus:left-0 peer-focus:text-blue-500 peer-focus:scale-100' htmlFor="password">Password</label>
            </div>
            <button className='border bg-white text-black mt-4 p-1.5 rounded-md border-none  font-bold hover:bg-orange-500 hover:ring-orange-900' type='submit'>Sign In</button>
          <h3 className='text-center'>Don't have an acount ?<Link to="register" className='text-green-500 hover:text-green-600' onClick={showSignup}> Create Account</Link></h3>
          </form>:<div className='h-[80vh]'> <img src='../../mypic.jpg ' className= 'w-full h-full object-cover rounded-lg hidden sm:block'/></div>}
        </div>
      </div>
    </div>
  )
}

export default Sign