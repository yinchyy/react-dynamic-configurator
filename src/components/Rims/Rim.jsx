import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Rim({
  size,
  name,
  price,
  isChecked,
  change,
}) {
  return (
    <Row className="row-cols-4 d-flex flex-row">
      <Col className="d-flex justify-content-end">
        <input type="radio" name="element" checked={isChecked} onChange={change} />
      </Col>
      <Col>{size}</Col>
      <Col>{name}</Col>
      <Col>{price}</Col>
    </Row>
  );
}
Rim.propTypes = {
  size: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
};
export default Rim;
