import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setCheckboxStates } from '../../redux/checkboxStates';
import EqElement from './EqElement';

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
        <EqElement
          name={value.name}
          price={value.price}
          isChecked={checkboxStates[value.id]}
          change={() => { handleCheckboxStateChange(value.id); }}
        />
      ))}
    </Container>
  );
}

export default AdditionalEquipment;
