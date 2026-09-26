import React, { useState } from 'react';

const App = () => {
 
  const [num, setNum] = useState({user:"yash", age:21})

  const btnClicked =()=>{
    const newNum = {...num}
    newNum.user = 'mayur'

    setNum(newNum)
  }

  //  function IncNum(){
  //   setNum(num+1)
  //  }

  return (
    <div>
      <h1>{num.user} ,{num.age}</h1>
      <button onClick={btnClicked} > click me</button>
    </div>
  );
}

export default App;
