import React from 'react';
import Counter from './hooks/usestate/Counter';
import UseState from './hooks/usestate/UseState';
import UseState2 from './hooks/usestate/useState2';
import MyComp from './hooks/useEffect/MyComp';
import EffectConut from './hooks/useEffect/EffectConut';

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <UseState /> */}
      {/* <UseState2 /> */}
      {/* <MyComp /> */}
      <EffectConut />
    </div>
  );
}

export default App;
