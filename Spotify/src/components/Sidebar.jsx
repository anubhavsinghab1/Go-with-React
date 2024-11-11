import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<div className='text-white w-[25%] h-full p-2 flex-col gap-2 hidden lg:flex'>
			<div className='flex rounded flex-col h-[15%] bg-[#424242] justify-around'>
				<div onClick={()=>navigate('/')} className='flex  items-center gap-3 pl-8 cursor-pointer'>
					<img className='w-6' src={assets.home_icon} alt="" />
					<p className='font-bold'> Home</p>
				</div>
				<div className='flex  items-center gap-3 pl-8 cursor-pointer'>
					<img className='w-6' src={assets.search_icon} alt="" />
					<p className='font-bold'>Search</p>
				</div>
			</div>
			<div className='bg-[#414141] h-[85%] rounded '>
				<div className='p-4 flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<img src={assets.stack_icon} className='w-8' alt="" />
						<p className='font-semibold'>Your Library</p>
					</div>
					<div className='flex items-center gap-3'>
						<img src={assets.arrow_icon} className='w-5' alt="" />
						<img src={assets.plus_icon} className='w-5' alt="" />
					</div>
				</div>
				<div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
					<h1>Create your First Playlist</h1>
					<p className='font-light'>It 's easy we will help you</p>
					<button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
				</div>
				<div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 mt-4 pl-4'>
					<h1>lets find some podcast to follow</h1>
					<p className='font-light'>we will keep you update</p>
					<button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar