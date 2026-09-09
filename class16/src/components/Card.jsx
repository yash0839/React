import React from 'react';

const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}, { props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view explor</button>
      </div>
      
  );
}

export default Card;
