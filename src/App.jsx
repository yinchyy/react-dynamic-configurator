import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Engine from './components/Engines/Engines';
import BodyPaint from './components/Paintjobs/BodyPaint/BodyPaint';
import RimsPaint from './components/Paintjobs/RimsPaint/RimsPaint';
import Rims from './components/Rims/Rims';
import SeatType from './components/Interior/SeatType/SeatType';
import InteriorColor from './components/Interior/InteriorColors/Primary';
import AdditionalEquipment from './components/AdditionalEquipment/AdditionalEquipment';
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
