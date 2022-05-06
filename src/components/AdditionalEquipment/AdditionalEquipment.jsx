import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
} from 'reactstrap';
import { setCheckboxStates } from '../../redux/checkboxStates';
import EqElement from './EqElement';

function AdditionalEquipment() {
  const { additionalEquipment } = useSelector((state) => state.additionalEquipment);
  const { checkboxStates } = useSelector((state) => state.checkboxStates);
  const dispatch = useDispatch();

  if (checkboxStates.length === 0) {
    dispatch(setCheckboxStates(new Array(additionalEquipment.length).fill(false)));
  }
  const handleCheckboxStateChange = (id) => {
    const updatedCheckboxStates = checkboxStates.map((value, index) => {
      if (id === index) {
        return !value;
      }
      return value;
    });
    dispatch(setCheckboxStates(updatedCheckboxStates));
  };
  return (
    <div>
      <header className="d-flex justify-content-center align-items-center">
        <h1>Additional equipment selection</h1>
      </header>
      <Container>
        <Row className="d-flex justify-content-center">
          {additionalEquipment.map((value) => (
            <EqElement
              id={value.id}
              name={value.name}
              price={value.price}
              isChecked={checkboxStates[value.id]}
              change={() => { handleCheckboxStateChange(value.id); }}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default AdditionalEquipment;
