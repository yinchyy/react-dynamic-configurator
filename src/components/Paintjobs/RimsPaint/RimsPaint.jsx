import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setRimsColor } from '../../../redux/chosenConfig';
import Paint from '../Paint';

function RimsPaint() {
  const { headers, paint } = useSelector((state) => state.paint);
  const { rimsColorID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className="text-center"><h1>Rims paint selection</h1></header>
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
          isChecked={value.id === rimsColorID}
          change={() => { dispatch(setRimsColor(value.id)); }}
        />
      ))}
    </Container>
  );
}

export default RimsPaint;
