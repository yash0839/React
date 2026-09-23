import React from 'react';
import Navbar from './Navbar';
import Page1Content from './Page1Content';

const Section1 = (props) => {
   console.log(props.users)
  return (
    <div className='h-screen w-full bg- text-white-white'>
        <Navbar/>
        <Page1Content users = {props.users}/>
    </div>
  );
}

export default Section1;
