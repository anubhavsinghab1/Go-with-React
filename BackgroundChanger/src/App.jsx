import React, { useState } from 'react'

const App = () => {
  const [color,setColor] =useState("olive");


  return (
    <div className='w-full h-screen duration-1000' style={{backgroundColor:color}}>
      <div className='fixed flex-wrap justify-center bottom-5 inset-x-0 px-2 flex'>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button >
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={()=>setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"cyan"}}>Cyan</button>
          <button onClick={()=>setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=>setColor("tomato")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"tomato"}}>Tomato</button>
          <button onClick={()=>setColor("White")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>White</button>
        </div>
       
      </div>
    </div>
  )
}

export default App