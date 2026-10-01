import React from 'react';

const App = () => {

  const submitHandler=(e) =>{
    e.preventDefault()
    console.log('form is submitted')
  }

  return (
    <div>

      <form onSubmit={(e)=>{
          submitHandler(e)
      }}>
        <input type="text" placeholder='enter name' />
        <button>submit </button>
      </form>
      
    </div>
  );
}

export default App;
