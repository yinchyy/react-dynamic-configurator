import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setEngine } from '../../redux/chosenConfig';

function Engine({
  id,
  model,
  fuel,
  displacement,
  power,
  engineCode,
  price,
  isChecked,
}) {
  const dispatch = useDispatch();
  return (
    <Row className="row-cols-7 d-flex flex-row">
      <Col className="d-flex justify-content-end">
        <input type="radio" name="element" onChange={() => { dispatch(setEngine(id)); }} checked={isChecked} />
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
};
export default Engine;
