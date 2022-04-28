import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
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
  return (
    <Row className="row-cols-3 d-flex flex-row">
      <Col className="d-flex justify-content-end">
        <input data-testid={`checkbox-${id}`} type="checkbox" name="element" onChange={change} checked={isChecked} />
      </Col>
      <Col>{name}</Col>
      <Col>{price}</Col>
    </Row>
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
