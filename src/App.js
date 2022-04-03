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

function Engine({target,headers,title}) {
  return (
    <Container>
      <header className='text-center'><h1>{title}</h1></header>
      <Row class="row-cols-7 d-flex flex-row">
        <Col></Col>
            {headers.map((v)=><Col><p>{v}</p></Col>)}
        </Row>
        {target.map((v) => {
          return (<Row className="row-cols-7 d-flex flex-row">
            <Col className='d-flex justify-content-end'><input type="radio" name="engine"/></Col>
            {Object.keys(v).map((value) => <Col>{v[value]}</Col>)}
        </Row>) 
        })}
      </Container>
    );
  }
  
  function Configurator() {
    const { activePage, lastPage, selectedConfig } = useSelector((state) => state.chosenConfig);
    const { headers, engine, paint } = useSelector((state) => state.availableConfigOptions);
  const dispatch = useDispatch();
  return (
    <Container className="App-header">
      {activePage === 0 && <Engine target={engine} headers={headers.engine} title="Engine selection"/>}
      {activePage === 1 && <Engine target={paint} headers={headers.paint} title="Paint selection"/>}
        <div className='d-flex flex-row justify-content-evenly'>
        <Button outline color="primary" className='mr-2' onClick={() => dispatch(previousPage())}>&lt;</Button>
        <Button outline color="primary" className='ml-2' onClick={() => dispatch(nextPage())}>&gt;</Button>
        </div>
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
