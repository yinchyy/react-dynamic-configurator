import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setPaint } from '../../../redux/chosenConfig';
import Paint from '../Paint';

function BodyPaint() {
  const { headers, paint } = useSelector((state) => state.paint);
  const { paintID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className="text-center"><h1>Body paint selection</h1></header>
      <Row className="row-cols-4 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {paint.map((value) => (
        <Paint
          id={value.id}
          name={value.name}
          colorCode={value.colorCode}
          price={value.price}
          isChecked={value.id === paintID}
          change={() => { dispatch(setPaint(value.id)); }}
        />
      ))}
    </Container>
  );
}

export default BodyPaint;
