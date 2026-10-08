import React from 'react';

const App = () => {
 
  // const user ={
  //   name:"Rohit",
  //   age:22,
  //   city:"Bhopal"
  // }

  // localStorage.setItem("user",JSON.stringify(user))


  const getData =JSON.parse(localStorage.getItem('user'))
  console.log((getData))


  return (
    <div>
      
    </div>
  );
}

export default App;
