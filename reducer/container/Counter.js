import React from 'react' ;

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  ) ;
} ;

export default Counter ;