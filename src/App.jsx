import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Engine from './components/Engines/Engines';
import BodyPaint from './components/BodyPaint';
import RimsPaint from './components/RimsPaint';
import Rims from './components/Rims';
import SeatType from './components/SeatType';
import InteriorColor from './components/InteriorColor';
import AdditionalEquipment from './components/AdditionalEquipment';
import Summary from './components/Summary';
import Navigation from './components/Navigation';

function App() {
  const { activePage, lastPage } = useSelector((state) => state.chosenConfig);
  return (
    <div className="App">
      {activePage === 0 && <Engine />}
      {activePage === 1 && <BodyPaint />}
      {activePage === 2 && <RimsPaint />}
      {activePage === 3 && <Rims />}
      {activePage === 4 && <SeatType />}
      {activePage === 5 && <InteriorColor />}
      {activePage === 6 && <AdditionalEquipment />}
      {activePage === lastPage && <Summary />}
      <Navigation />
    </div>
  );
}

export default App;
