import React from 'react';
import './App.css'

const App = () => {

  // function inputChanging(val){
  //   console.log(val)
  // }
 
  const pageScrolling = (elem)=>{
    console.log(elem)
  }
  

  return (
    <div onWheel={pageScrolling}>
      {/* <input onChange={function (elem) {
        inputChanging(elem.target.value)
      }}
      type='text' placeholder='enter name'
      /> */}

      <div className="page1"> page 1</div>
      <div className="page2"> page2 </div>
      <div className="page3"> page3</div>


    </div>
  );
}

export default App;
