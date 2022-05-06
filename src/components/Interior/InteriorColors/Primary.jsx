import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
} from 'reactstrap';
import { setInteriorColor } from '../../../redux/chosenConfig';
import InteriorColors from '../../Paintjobs/Paint';

function Primary() {
  const { interiorColor } = useSelector((state) => state.interiorColor);
  const { interiorColorID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <div>
      <header className="d-flex justify-content-center align-items-center paint-header">
        <h1>Interior color selection</h1>
      </header>
      <Container>
        <Row className="d-flex justify-content-center overflow-auto">
          {interiorColor.map((value) => (
            <InteriorColors
              name={value.name}
              colorCode={value.colorCode}
              price={value.price}
              isChecked={value.id === interiorColorID}
              change={() => { dispatch(setInteriorColor(value.id)); }}
            />
          ))}

        </Row>
      </Container>
    </div>
  );
}

export default Primary;
