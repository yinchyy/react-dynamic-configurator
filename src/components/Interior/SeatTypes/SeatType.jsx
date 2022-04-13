import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
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
  return (
    <Row className="row-cols-7 d-flex flex-row">
      <Col className="d-flex justify-content-end">
        <input type="radio" name="element" checked={isChecked} onChange={change} />
      </Col>
      <Col>{name}</Col>
      <Col>{material}</Col>
      <Col>{heated}</Col>
      <Col>{ventilated}</Col>
      <Col>{regulationWays}</Col>
      <Col>{price}</Col>
    </Row>
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
