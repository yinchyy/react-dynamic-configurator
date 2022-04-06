import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setPaint } from '../redux/chosenConfig';

function BodyPaint() {
  const { headers, paint } = useSelector((state) => state.paint);
  const { paintID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className="text-center"><h1>Engine selection</h1></header>
      <Row class="row-cols-4 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {paint.map((value) => (
        <Row className="row-cols-4 d-flex flex-row">
          <Col className="d-flex justify-content-end">
            <input type="radio" name="element" onChange={() => { dispatch(setPaint(value.id)); }} checked={value.id === paintID} />
          </Col>
          <Col>{value.name}</Col>
          <Col>{value.colorCode}</Col>
          <Col>{value.price}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default BodyPaint;
