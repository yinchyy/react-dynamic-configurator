import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setCheckboxStates } from '../../redux/checkboxStates';

function AdditionalEquipment() {
  const { headers, additionalEquipment } = useSelector((state) => state.additionalEquipment);
  const { checkboxStates } = useSelector((state) => state.checkboxStates);
  const dispatch = useDispatch();

  if (checkboxStates.length === 0) {
    dispatch(setCheckboxStates(new Array(additionalEquipment.length).fill(false)));
  }
  function handleCheckboxStateChange(id) {
    const updatedCheckboxStates = checkboxStates.map((value, index) => {
      if (id === index) {
        return !value;
      }
      return value;
    });
    dispatch(setCheckboxStates(updatedCheckboxStates));
  }

  return (
    <Container>
      <header className="text-center"><h1>Additional equipment selection</h1></header>
      <Row className="row-cols-3 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {additionalEquipment.map((value) => (
        <Row className="row-cols-3 d-flex flex-row">
          <Col className="d-flex justify-content-end">
            <input type="checkbox" name="element" onChange={() => { handleCheckboxStateChange(value.id); }} checked={checkboxStates[value.id]} />
          </Col>
          <Col>{value.name}</Col>
          <Col>{value.price}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default AdditionalEquipment;
