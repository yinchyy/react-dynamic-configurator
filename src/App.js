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
import { nextPage, previousPage, setConfig } from './redux/chosenConfig';

function SelectionPage({ target, targetKey, headers, title, inputType = "radio" }) {
  const {selectedConfig} = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className='text-center'><h1>{title}</h1></header>
      <Row class="row-cols-7 d-flex flex-row">
        <Col></Col>
            {headers.map((v)=><Col><p>{v}</p></Col>)}
        </Row>
        {target.map((v) => {
          return (<Row className="row-cols-7 d-flex flex-row">
            <Col className='d-flex justify-content-end'><input type={inputType} name="element" onChange={() => { dispatch(setConfig({v,targetKey}))}} checked={v===selectedConfig[targetKey]?true:false} /></Col>
            {Object.keys(v).map((value) => <Col>{typeof(v[value])==="boolean" ? (v[value]?<div className='text-success'>Yes</div>:<div className='text-danger'>No</div>):v[value]}</Col>)}
        </Row>) 
        })}
      </Container>
    );
  }
function FinalPage({selectedConfig}) {
  return (
    <Container className='d-flex justify-content-center'>
      <h1>Summary:</h1>
      {console.log(selectedConfig)}
      </Container>
    );
  }
  function Configurator() {
    const { activePage, lastPage, selectedConfig } = useSelector((state) => state.chosenConfig);
    const { headers, engine, paint, rims, seatType, interiorColor, additionalEquipment } = useSelector((state) => state.availableConfigOptions);
    const targetKeys = useSelector((state) => Object.keys(state.availableConfigOptions));
  const dispatch = useDispatch();
  return (
    <Container className="App-header">
      {activePage === 0 && <SelectionPage target={engine} headers={headers.engine} targetKey={targetKeys[1]} title="Engine selection"/>}
      {activePage === 1 && <SelectionPage target={paint} headers={headers.paint} targetKey={targetKeys[2]} title="Paint selection"/>}
      {activePage === 2 && <SelectionPage target={rims} headers={headers.rims} targetKey={targetKeys[3]} title="Rims selection"/>}
      {activePage === 3 && <SelectionPage target={seatType} headers={headers.seatType} targetKey={targetKeys[4]} title="Seat option selection"/>}
      {activePage === 4 && <SelectionPage target={interiorColor} headers={headers.interiorColor} targetKey={targetKeys[5]} title="Interior color selection"/>}
      {activePage === 5 && <SelectionPage target={additionalEquipment} headers={headers.additionalEquipment} targetKey={targetKeys[6]} title="Additional equipment selection" inputType='checkbox'/>}
      {activePage === lastPage && <FinalPage selectedConfig={selectedConfig} />}
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
