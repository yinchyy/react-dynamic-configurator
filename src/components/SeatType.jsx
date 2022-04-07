import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { setSeatType } from '../redux/chosenConfig';

function SeatType() {
  const { headers, seatType } = useSelector((state) => state.seatType);
  const { seatTypeID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();

  function booleanToString(bool) {
    if (bool) {
      return <p className="text-success">Yes</p>;
    }
    return <p className="text-danger">No</p>;
  }
  booleanToString.propTypes = {
    bool: PropTypes.bool,
  };

  return (
    <Container>
      <header className="text-center"><h1>Seat type selection</h1></header>
      <Row className="row-cols-7 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {seatType.map((value) => (
        <Row className="row-cols-7 d-flex flex-row">
          <Col className="d-flex justify-content-end">
            <input type="radio" name="element" onChange={() => { dispatch(setSeatType(value.id)); }} checked={value.id === seatTypeID} />
          </Col>
          <Col>{value.name}</Col>
          <Col>{value.material}</Col>
          <Col>{booleanToString(value.isHeated)}</Col>
          <Col>{booleanToString(value.isVentilated)}</Col>
          <Col>{value.regulationWays}</Col>
          <Col>{value.price}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default SeatType;
