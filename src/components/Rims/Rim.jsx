import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
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
  let checked = '';
  if (isChecked) {
    checked = 'radio-checked';
  }
  return (
    <Col className={`col-8 col-md-4 d-flex flex-column link-light radio-elem m-4 p-3 ${checked}`} onClick={change}>
      <Col className="text-center fw-bold fs-5">{name}</Col>
      <Col>{size}</Col>
      <Col className="link-danger">
        {price}
        {' '}
        PLN
      </Col>
    </Col>
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
