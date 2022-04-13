import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { setSeatType } from '../../../redux/chosenConfig';
import SeatType from './SeatType';

function SeatTypes() {
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
        <SeatType
          name={value.name}
          material={value.material}
          heated={booleanToString(value.isHeated)}
          ventilated={booleanToString(value.isVentilated)}
          regulationWays={value.regulationWays}
          price={value.price}
          isChecked={value.id === seatTypeID}
          change={() => { dispatch(setSeatType(value.id)); }}
        />
      ))}
    </Container>
  );
}

export default SeatTypes;
