import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setInteriorColor } from '../../../redux/chosenConfig';
import InteriorColors from '../../Paintjobs/Paint';

function Primary() {
  const { headers, interiorColor } = useSelector((state) => state.interiorColor);
  const { interiorColorID } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  return (
    <Container>
      <header className="text-center"><h1>Interior color selection</h1></header>
      <Row className="row-cols-4 d-flex flex-row">
        <Col />
        {headers.map((value) => <Col>{value}</Col>)}
      </Row>
      {interiorColor.map((value) => (
        <InteriorColors
          name={value.name}
          colorCode={value.colorCode}
          price={value.price}
          isChecked={value.id === interiorColorID}
          change={() => { dispatch(setInteriorColor(value.id)); }}
        />
      ))}
    </Container>
  );
}

export default Primary;
