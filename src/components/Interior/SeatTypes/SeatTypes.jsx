import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { setSeatType } from '../../../redux/chosenConfig';
import SeatType from './SeatType';

function SeatTypes() {
  const { seatType } = useSelector((state) => state.seatType);
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
    <div>
      <header className="d-flex justify-content-center align-items-center">
        <h1>Seat type selection</h1>
      </header>
      <Container>
        <Row className="d-flex justify-content-center">
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
        </Row>
      </Container>
    </div>
  );
}

export default SeatTypes;
