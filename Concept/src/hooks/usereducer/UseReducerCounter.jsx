import React, { useReducer, useState } from 'react';

const initialState ={
    count : 0
}

function reducer(state, action){
    switch (action.type){
        case "Increment":{
            return { count: state.count + 1 }
        }
        case "Decrement":{
            return { count: state.count - 1 }
        }
        case "Reset":{
            return { count: 0 }
        }
    }
}




const UseReducerCounter = () => {

    const [state, dispatch]= useReducer(reducer, initialState)


  return (
    
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-80">

    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      React Counter
    </h2>

    <h4 className="text-5xl font-extrabold text-indigo-600 mb-8">
      {state.count}
    </h4>

    <div className="flex flex-col gap-3">
      <button
        onClick={() => dispatch({ type: "Increment" })}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        + Increment
      </button>

      <button
        onClick={() => dispatch({ type: "Decrement" })}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        - Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "Reset" })}
        className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        Reset
      </button>
    </div>

  </div>
</div>

  );
}

export default UseReducerCounter;
