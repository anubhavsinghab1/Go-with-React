import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Sign from './components/Sign'
const App = () => {


  return (
    
    <UserContextProvider>
      <div>
        <Sign />
        <Profile/>
      </div>
      
    </UserContextProvider>
  )
}

export default App