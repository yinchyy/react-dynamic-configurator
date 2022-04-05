import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setEngine } from '../redux/chosenConfig';

function Engines() {
  const { headers, engine } = useSelector((state) => state.engine);
  const { engineID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className="text-center"><h1>Engine selection</h1></header>
      <Row class="row-cols-7 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {engine.map((value) => (
        <Row className="row-cols-7 d-flex flex-row">
          <Col className="d-flex justify-content-end">
            <input type="radio" name="element" onChange={() => { dispatch(setEngine(value.id)); }} checked={value.id === engineID} />
          </Col>
          <Col>{value.model}</Col>
          <Col>{value.fuel}</Col>
          <Col>{value.displacement}</Col>
          <Col>{value.power}</Col>
          <Col>{value.engine_code}</Col>
          <Col>{value.price}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default Engines;
