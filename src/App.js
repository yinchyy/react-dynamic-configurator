import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/counter';
import logo from './logo.svg';
import './App.css';

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
    
    return (
        <div>
            <p>You clicked {count} times!</p>
            <button onClick={() => dispatch(increment())}>Click!</button>
        </div>
    );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
