import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setRims } from '../../redux/chosenConfig';
import Rim from './Rim';

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
        <Rim
          size={value.size}
          name={value.name}
          price={value.price}
          isChecked={value.id === rimsID}
          change={() => { dispatch(setRims(value.id)); }}
        />
      ))}
    </Container>
  );
}

export default Rims;
