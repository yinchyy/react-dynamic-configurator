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
  const config = new Array(6);

  config[0] = { ...engine.find((item) => item.id === engineID) };
  config[1] = { ...paint.find((item) => item.id === paintID) };
  config[2] = { ...paint.find((item) => item.id === rimsColorID) };
  config[3] = { ...rims.find((item) => item.id === rimsID) };
  config[4] = { ...seatType.find((item) => item.id === seatTypeID) };
  config[5] = { ...interiorColor.find((item) => item.id === interiorColorID) };

  for (const obj of config) {
    sum += obj.price;
  }
  return (
    <Container>
      <header className="text-center"><h1>Summary</h1></header>
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
        <Col className="text-end">
          Sum:
        </Col>
        <Col>{sum}</Col>
      </Row>
    </Container>
  );
}

export default Summary;
