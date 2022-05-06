import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Paint({
  name,
  colorCode,
  price,
  isChecked,
  change,
}) {
  let checked = '';
  if (isChecked) {
    checked = 'radio-checked';
  }
  return (
    <Col className={`col-8 col-md-4 d-flex flex-column link-light m-4 p-3 ${checked}`} onClick={change} style={{ backgroundColor: colorCode }}>
      <Col className="text-center fw-bold fs-5">{name}</Col>
      <Col>{colorCode}</Col>
      <Col className="link-light">
        {price}
        {' '}
        PLN
      </Col>
    </Col>
  );

  /*
  return (
    <Row className="row-cols-4 d-flex flex-row">
      <Col className="d-flex justify-content-end">
        <input type="radio" name="element" checked={isChecked} onChange={change} />
      </Col>
      <Col>{name}</Col>
      <Col style={{ color: colorCode }}>
        {colorCode}
      </Col>
      <Col>{price}</Col>
    </Row>
  ); */
}
Paint.propTypes = {
  name: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
};
export default Paint;
