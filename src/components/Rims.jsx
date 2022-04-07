import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setRims } from '../redux/chosenConfig';

function Rims() {
  const { headers, rims } = useSelector((state) => state.rims);
  const { rimsID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className="text-center"><h1>Rims selection</h1></header>
      <Row className="row-cols-4 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {rims.map((value) => (
        <Row className="row-cols-4 d-flex flex-row">
          <Col className="d-flex justify-content-end">
            <input type="radio" name="element" onChange={() => { dispatch(setRims(value.id)); }} checked={value.id === rimsID} />
          </Col>
          <Col>{value.size}</Col>
          <Col>{value.name}</Col>
          <Col>{value.price}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default Rims;