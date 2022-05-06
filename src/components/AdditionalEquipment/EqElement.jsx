import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

function EqElement({
  id,
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
    <Col data-testid={`checkbox-${id}`} className={`col-8 col-md-4 d-flex flex-column link-light radio-elem m-4 p-3 ${checked}`} onClick={change}>
      <Col className="text-center fw-bold fs-5">{name}</Col>
      <Col className="link-danger">
        {price}
        {' '}
        PLN
      </Col>
    </Col>
  );
}
EqElement.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
};
export default EqElement;
