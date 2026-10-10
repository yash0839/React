import React, { useEffect, useState } from 'react';

const EffectConut = () => {

    const [count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            console.log(`count the valu off ${count} sec`);
            setCount(count + 1)
        },1000)
    })

  return (
    <div>
      <h2  className="text-2xl font-bold text-gray-800">Count: {count}</h2>
    </div>
  );
}

export default EffectConut;
