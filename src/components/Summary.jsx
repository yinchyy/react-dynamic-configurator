import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

function Summary() {
  const { engine } = useSelector((state) => state.engine);
  const { paint } = useSelector((state) => state.paint);
  const { seatType } = useSelector((state) => state.seatType);
  const { interiorColor } = useSelector((state) => state.interiorColor);
  const { rims } = useSelector((state) => state.rims);
  const { additionalEquipment } = useSelector((state) => state.additionalEquipment);
  const {
    engineID,
    paintID,
    rimsID,
    rimsColorID,
    seatTypeID,
    interiorColorID,
  } = useSelector((state) => state.chosenConfig);
  const baseCost = 40000;
  let sum = baseCost;
  const config = new Array(7);
  const { checkboxStates } = useSelector((state) => state.checkboxStates);
  const additionalEquipmentIDs = [];
  for (const index in checkboxStates) {
    if (checkboxStates[index]) {
      additionalEquipmentIDs.push(parseInt(index, 10));
    }
  }

  config[0] = { ...engine.find((item) => item.id === engineID) };
  config[1] = { ...paint.find((item) => item.id === paintID) };
  config[2] = { ...paint.find((item) => item.id === rimsColorID) };
  config[3] = { ...rims.find((item) => item.id === rimsID) };
  config[4] = { ...seatType.find((item) => item.id === seatTypeID) };
  config[5] = { ...interiorColor.find((item) => item.id === interiorColorID) };
  config[6] = [];

  for (let i = 0; i < 6; i += 1) {
    sum += config[i].price;
  }
  for (const eqID of additionalEquipmentIDs) {
    config[6].push({ ...additionalEquipment.find((item) => item.id === eqID) });
  }
  for (const value of config[6]) {
    sum += value.price;
  }

  return (
    <div>
      <header className="d-flex justify-content-center align-items-center">
        <h1>Summary</h1>
      </header>
      <Container>
        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col>Base cost</Col>
          <Col>{baseCost}</Col>
        </Row>
        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col>
            Engine:
            {' '}
            {config[0].model}
          </Col>
          <Col>{config[0].price}</Col>
        </Row>
        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col>
            Body paint:
            {' '}
            {config[1].name}
          </Col>
          <Col>{config[1].price}</Col>
        </Row>
        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col>
            Rims paint:
            {' '}
            {config[2].name}
          </Col>
          <Col>{config[2].price}</Col>
        </Row>
        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col>
            Rims:
            {' '}
            {config[3].name}
            {' '}
            {config[3].size}
            &quot;
          </Col>
          <Col>{config[3].price}</Col>
        </Row>
        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col>
            Seats option:
            {' '}
            {config[4].name}
          </Col>
          <Col>{config[4].price}</Col>
        </Row>
        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col>
            Interior color:
            {' '}
            {config[5].name}
          </Col>
          <Col>{config[5].price}</Col>
        </Row>
        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col>
            Additional equipment:
          </Col>
          <Col />
        </Row>
        {config[6].map((value) => (
          <Row className="row-cols-2 d-flex flex-row justify-content-center">
            <Col className="text-center">{value.name}</Col>
            <Col>{value.price}</Col>
          </Row>
        ))}

        <Row className="row-cols-2 d-flex flex-row justify-content-center">
          <Col className="text-end">
            Total:
          </Col>
          <Col>
            {sum}
            &nbsp;PLN
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Summary;
