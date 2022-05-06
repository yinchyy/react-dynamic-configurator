import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

function SeatType({
  name,
  material,
  heated,
  ventilated,
  regulationWays,
  price,
  isChecked,
  change,
}) {
  let checked = '';
  if (isChecked) {
    checked = 'radio-checked';
  }
  return (
    <Col className={`col-8 col-md-4 d-flex flex-column link-light radio-elem m-4 p-3 ${checked}`} onClick={change}>
      <Col className="text-center fw-bold fs-5">{name}</Col>
      <Col>{material}</Col>
      <Col>
        Heated:
        {' '}
        {heated}
      </Col>
      <Col>
        Ventilated:
        {' '}
        {ventilated}
      </Col>
      <Col>
        Regulation ways:&nbsp;
        {regulationWays}
      </Col>
      <Col className="link-danger">
        {price}
        {' '}
        PLN
      </Col>
    </Col>
  );
}
SeatType.propTypes = {
  name: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  heated: PropTypes.string.isRequired,
  ventilated: PropTypes.string.isRequired,
  regulationWays: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
};
export default SeatType;
