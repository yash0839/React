import React, { useEffect, useState } from 'react';

const MyComp = () => {

    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     console.log("hello guys component is working ")
    // })

    // useEffect(()=>{
    //     console.log("kya re chikne")
    // },[])

  const [ct1, setCt1] = useState(0);
  const [ct2, setCt2] = useState(100);

  useEffect(() => {
    console.log("hello Arun bhai ");
  }, [ct1]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-6">

      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Count CT1: {ct1}
        </h1>

        <button
          className="m-5 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => setCt1(ct1 + 1)}
        >
          Increase CT1
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Count CT2: {ct2}
        </h1>

        <button
          className="m-5 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          onClick={() => setCt2(ct2 + 10)}
        >
          Increase CT2
        </button>
      </div>

    </div>
  );
}

export default MyComp;



