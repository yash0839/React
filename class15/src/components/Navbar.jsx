import React from 'react'
import ThemeDataContext from '../context/ThemeContext'

const Navbar = () => {

  const data = useContext(ThemeDataContext)
  return (
    <div className='nav'>
        <h1>Navbar</h1>
    </div>
  )
}

export default Navbar