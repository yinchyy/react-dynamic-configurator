import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
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
  );
}
Paint.propTypes = {
  name: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
};
export default Paint;
