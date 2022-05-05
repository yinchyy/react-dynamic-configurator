import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Engine({
  id,
  model,
  fuel,
  displacement,
  power,
  engineCode,
  price,
  isChecked,
  change,
}) {
  let checked = '';
  if (isChecked) {
    checked = 'radio-checked';
  }
  return (
    <Col data-testid={`item-${id}`} className={`col-8 col-md-4 d-flex flex-column link-light radio-elem m-4 p-3 ${checked}`} onClick={change}>
      <Col className="text-center fw-bold fs-5">{model}</Col>
      <Col>{fuel}</Col>
      <Col>
        {displacement}
        <sup>3</sup>
      </Col>
      <Col>{power}</Col>
      <Col>{engineCode}</Col>
      <Col className="link-danger">
        {price}
        {' '}
        PLN
      </Col>
    </Col>
  );
}
Engine.propTypes = {
  id: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  fuel: PropTypes.string.isRequired,
  displacement: PropTypes.string.isRequired,
  power: PropTypes.string.isRequired,
  engineCode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
};
export default Engine;
