import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const onClickInc = () => {
    //increment button
    setCount(count + 1);
  }

  const onClickDec = () => {
    //decrement button
    setCount(count - 1);
  }

  const onClickReset = () => {
    //reset button
    setCount(0);
  }

  return (
    <div className="App">
      <button onClick={onClickInc} data-testid="increment-button">Increment</button>
      <button onClick={onClickDec} data-testid="decrement-button">Decrement</button>
      <button onClick={onClickReset} data-testid="reset-button">Reset</button>
      <div data-testid="counter">Counter: {count}</div>
    </div>
  );
}

export default App;
