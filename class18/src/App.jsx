import React from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';


const App = () => {

  const users =[
    {
      img: "https://plus.unsplash.com/premium_photo-1661495483342-4b40cadb545e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      intro:"",
      tag:"Satisfied"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661722243182-ac6e3f12d879?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underserved"
    },
    {
      img: "https://images.unsplash.com/photo-1719937206325-3a5f474fe7d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"UnderBanked"
    },
     {
      img: "https://plus.unsplash.com/premium_photo-1661495483342-4b40cadb545e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      intro:"",
      tag:"Satisfied"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661722243182-ac6e3f12d879?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underserved"
    },
    {
      img: "https://images.unsplash.com/photo-1719937206325-3a5f474fe7d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"UnderBanked"
    }
  ]


  return (
   <div>
    <Section1 users={users}  />
    <Section2 />
   </div>
  );
}

export default App;
