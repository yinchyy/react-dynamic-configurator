import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Engine from './Engine';
import { setEngine } from '../../redux/chosenConfig';

function Engines() {
  const { headers, engine } = useSelector((state) => state.engine);
  const { engineID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className="text-center"><h1>Engine selection</h1></header>
      <Row className="row-cols-7 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {engine.map((value) => (
        <Engine
          model={value.model}
          fuel={value.fuel}
          displacement={value.displacement}
          power={value.power}
          engineCode={value.engine_code}
          price={value.price}
          isChecked={value.id === engineID}
          change={() => { dispatch(setEngine(value.id)); }}
        />
      ))}
    </Container>
  );
}

export default Engines;