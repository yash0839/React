import React from 'react';
import Counter from './hooks/usestate/Counter';
import UseState from './hooks/usestate/UseState';
import UseState2 from './hooks/usestate/useState2';
import MyComp from './hooks/useEffect/MyComp';
import EffectConut from './hooks/useEffect/EffectConut';
import NewComp from './hooks/useContext/NewComp';
import UserProvider from './hooks/useContext/UserProvider';
import MyForm from './hooks/formValidation/MyForm';
import FormValidation from './hooks/formValidation/FormValidation';
import HookForm from './hooks/formValidation/HookForm';
import ColorChange from './hooks/useEffect/ColorChnage';
import UseReducerCounter from './hooks/usereducer/UseReducerCounter';

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <UseState /> */}
      {/* <UseState2 /> */}
      {/* <MyComp /> */}
      {/* <EffectConut /> */}
      {/* <NewComp /> */}
      {/* <UserProvider /> */}
      {/* <MyForm /> */}
      {/* <FormValidation /> */}
      {/* <HookForm /> */}
      {/* <ColorChange /> */}
      <UseReducerCounter />
    </div>
  );
}

export default App;
