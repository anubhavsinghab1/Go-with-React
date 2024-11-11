import React, { useState, useCallback, useEffect, useRef } from 'react'

const App = () => {
  const [len, setLen] = useState(8);
  const [numallowed, setNumAllowed] = useState(false);
  const [charallowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*(){}[]~+=_-"

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char);
    }
    setPass(password);

  }, [len, numallowed, charallowed, setPass]);

  useEffect(() => {
    passwordGenerator();

  }, [len, numallowed, charallowed, passwordGenerator])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(3,8);
    window.navigator.clipboard.writeText(pass)
  },[pass])
  return (
    <>
      <div className='w-full flex flex-col max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center my-3 mx-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-600 hover:bg-blue-700  text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy </button>
        </div>
        <div className='flex justify-between text-sm mb-2 gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range" min={8} onChange={(e) => { setLen(e.target.value) }} max={50} value={len} className='cursor-pointer' />
            <label >Length:{len}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={numallowed} id='numberinput' onChange={() => setNumAllowed(prev => !prev)} />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={charallowed} id='numberinput' onChange={() => setCharAllowed(prev => !prev)} />
            <label htmlFor="numberinput">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App