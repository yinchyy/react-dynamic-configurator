import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Engine from './components/Engines';
import BodyPaint from './components/BodyPaint';
import Navigation from './components/Navigation';

function App() {
  const { activePage } = useSelector((state) => state.chosenConfig);
  return (
    <div className="App">
      {activePage === 0 && <Engine />}
      {activePage === 1 && <BodyPaint />}
      <Navigation />
    </div>
  );
}

export default App;
