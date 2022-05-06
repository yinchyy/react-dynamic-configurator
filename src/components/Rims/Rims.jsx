import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
} from 'reactstrap';
import { setRims } from '../../redux/chosenConfig';
import Rim from './Rim';

function Rims() {
  const { rims } = useSelector((state) => state.rims);
  const { rimsID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <div>
      <header className="d-flex justify-content-center align-items-center">
        <h1>Rims selection</h1>
      </header>
      <Container>
        <Row className="d-flex justify-content-center">
          {rims.map((value) => (
            <Rim
              size={value.size}
              name={value.name}
              price={value.price}
              isChecked={value.id === rimsID}
              change={() => { dispatch(setRims(value.id)); }}
            />
          ))}

        </Row>
      </Container>
    </div>
  );
}

export default Rims;
