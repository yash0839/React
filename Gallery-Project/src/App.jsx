import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';


const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12 `)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = <h3 className='text-blot text-gray-500 absolute top-1/2 left-1/2 -transla-x-1/2 -transla-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }

  return(
    <div className="bg-black min-h-screen text-white flex flex-col">
      <div className="flex-1 flex flex-wrap justify-center gap-6 p-5">
        {printUserData}
      </div>
      <div className="flex justify-center items-center gap-6 p-5">

    
        <button
          disabled={index === 1}
          className={`bg-amber-400 text-black text-sm rounded px-4 py-2 transition active:scale-95 ${index === 1
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:bg-amber-300"
            }`}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

    
        <h1 className="text-2xl font-bold">
          Page {index}
        </h1>

    
        <button
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 hover:bg-amber-300 transition"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>

      </div>
    </div>

  );
}

export default App;
