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
  return (
    <Row className="row-cols-7 d-flex flex-row">
      <Col className="d-flex justify-content-end">
        <input type="radio" data-testid={`item-${id}`} name="element" checked={isChecked} onChange={change} />
      </Col>
      <Col>{model}</Col>
      <Col>{fuel}</Col>
      <Col>{displacement}</Col>
      <Col>{power}</Col>
      <Col>{engineCode}</Col>
      <Col>{price}</Col>
    </Row>
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
