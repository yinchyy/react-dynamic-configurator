import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
} from 'reactstrap';
import { setRimsColor } from '../../../redux/chosenConfig';
import Paint from '../Paint';

function RimsPaint() {
  const { paint } = useSelector((state) => state.paint);
  const { rimsColorID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <div>
      <header className="d-flex justify-content-center align-items-center paint-header">
        <h1>Rims paint selection</h1>
      </header>
      <Container>
        <Row className="d-flex justify-content-center overflow-auto">
          {paint.map((value) => (
            <Paint
              id={value.id}
              name={value.name}
              colorCode={value.colorCode}
              price={value.price}
              isChecked={value.id === rimsColorID}
              change={() => { dispatch(setRimsColor(value.id)); }}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default RimsPaint;
