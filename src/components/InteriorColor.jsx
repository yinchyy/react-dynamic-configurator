import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setInteriorColor } from '../redux/chosenConfig';

function InteriorColor() {
  const { headers, interiorColor } = useSelector((state) => state.interiorColor);
  const { interiorColorID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className="text-center"><h1>Interior color selection</h1></header>
      <Row className="row-cols-4 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {interiorColor.map((value) => (
        <Row className="row-cols-4 d-flex flex-row">
          <Col className="d-flex justify-content-end">
            <input type="radio" name="element" onChange={() => { dispatch(setInteriorColor(value.id)); }} checked={value.id === interiorColorID} />
          </Col>
          <Col>{value.name}</Col>
          <Col style={{ color: value.colorCode }}>
            {value.colorCode}
          </Col>
          <Col>{value.price}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default InteriorColor;
