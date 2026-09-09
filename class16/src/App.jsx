import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="parent">
      <Card user="yash" age={21} img="https://plus.unsplash.com/premium_photo-1723741360729-ac4889854f66?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"/>
      <Card user= "mayur" age={22 } img="https://plus.unsplash.com/premium_photo-1770404666726-f3b08fa57e79?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user= "ritesh" age={22} img="https://plus.unsplash.com/premium_photo-1758613869086-af521aa4b96c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"/>
      <Card user= "rohit" age={23} img="https://plus.unsplash.com/premium_photo-1770393982000-adbc65cfefe5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  );
}

export default App;
