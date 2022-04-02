import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { increment } from './redux/availableConfigOptions';
import logo from './logo.svg';
import './App.css';

function Counter() {
  const { engine, paint } = useSelector((state) => state.availableConfigOptions);
  const dispatch = useDispatch();
    return (
        <div>
        <p>Your car engine model is: {engine[0].model} and paint color: {paint[0].name}! That costs you: {parseInt(engine[0].price) + parseInt(paint[0].price)} PLN in total.</p>
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
