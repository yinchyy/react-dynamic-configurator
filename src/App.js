import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { nextPage,previousPage,setConfig } from './redux/chosenConfig';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { nextPage, previousPage } from './redux/chosenConfig';

function SelectionPage({target,headers,title,inputType="radio"}) {
  return (
    <Container>
      <header className='text-center'><h1>{title}</h1></header>
      <Row class="row-cols-7 d-flex flex-row">
        <Col></Col>
            {headers.map((v)=><Col><p>{v}</p></Col>)}
        </Row>
        {target.map((v) => {
          return (<Row className="row-cols-7 d-flex flex-row">
            <Col className='d-flex justify-content-end'><input type={inputType} name="element"/></Col>
            {Object.keys(v).map((value) => <Col>{typeof(v[value])==="boolean" ? (v[value]?<div className='text-success'>Yes</div>:<div className='text-danger'>No</div>):v[value]}</Col>)}
        </Row>) 
        })}
      </Container>
    );
  }
function FinalPage({selectedConfig}) {
    
  }
  function Configurator() {
    const { activePage, lastPage, selectedConfig } = useSelector((state) => state.chosenConfig);
    const { headers, engine, paint, rims, seatType, interiorColor, additionalEquipment } = useSelector((state) => state.availableConfigOptions);
  const dispatch = useDispatch();
  return (
    <Container className="App-header">
      {activePage === 0 && <SelectionPage target={engine} headers={headers.engine} title="Engine selection"/>}
      {activePage === 1 && <SelectionPage target={paint} headers={headers.paint} title="Paint selection"/>}
      {activePage === 2 && <SelectionPage target={rims} headers={headers.rims} title="Rims selection"/>}
      {activePage === 3 && <SelectionPage target={seatType} headers={headers.seatType} title="Seat option selection"/>}
      {activePage === 4 && <SelectionPage target={interiorColor} headers={headers.interiorColor} title="Interior color selection"/>}
      {activePage === 5 && <SelectionPage target={additionalEquipment} headers={headers.additionalEquipment} title="Additional equipment selection" inputType='checkbox'/>}
      {activePage === lastPage && <FinalPage />}
      {activePage<lastPage?
        <div className='d-flex flex-row justify-content-evenly'>
        <Button outline color={activePage===0?"secondary":"primary"} className='mr-2' onClick={() => dispatch(previousPage())}>&lt;</Button>
        <Button outline color="primary" className='ml-2' onClick={() => dispatch(nextPage())}>{activePage===5?"Finish":">"}</Button>
        </div>:""
      }
    </Container>
    )
  }
function App() {
  return (
    <div className="App">
      <Configurator />
    </div>
  );
}

export default App;
