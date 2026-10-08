import React from 'react';
import { useState } from 'react';

const counter = () => {

  const [count, setCount] = useState(0)


  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-4xl font-bold text-white mb-6">
        Count: {count}
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-600 transition" >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-3 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-600 transition">
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-600 transition" >
          Reset
        </button>
      </div>
    </div>
  );
}

export default counter;
