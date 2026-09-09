import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='sale'>
        <h1>Courses</h1>
        <p>Sale is LIVE!!!</p>
        <p>Sale is LIVE!!!</p>
        <p>Sale is LIVE!!!</p>
        <p>Sale is LIVE!!!</p>
        <p>Sale is LIVE!!!</p>
        <p>Sale is LIVE!!!</p>
        <p>Sale is LIVE!!!</p>

        <Outlet />
    </div>
  )
}

export default Courses