import React, { useState } from 'react';

const App = () => {
 
  const [num, setNum] = useState([10,20, 30,])


  const btnClicked =()=>{
    const newNum = [...num]
    newNum.push = (99)
   console.log(newNum)
    // setNum(newNum)
  }

  

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={btnClicked} > click me</button>
    </div>
  );
}

export default App;
