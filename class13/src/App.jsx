import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
  }

  return (
    <div>
      <h1>theme is {theme}</h1>
      <Navbar changeTheme={changeTheme}/>
     
    </div>
  )
}

export default App