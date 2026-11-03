
import React from 'react';

function Greeting() {

  const currentHour = new Date().getHours();

  let message;

  if (currentHour < 12) {
    message = "Good Morning";
  } 
  else if (currentHour <= 18) {
    message = "Good Afternoon";
  } 
  else {
    message = "Good Evening";
  }

  return (
    <div className="greeting-card">
      <h1>{message}!</h1>
      <p>Welcome to our React Application.</p>
      <h4>Current Hour: {currentHour}</h4>
    </div>
  );
}

export default Greeting;
