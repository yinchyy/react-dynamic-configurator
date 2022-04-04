import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'reactstrap';
import { nextPage, previousPage } from '../redux/chosenConfig';

function Navigation() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button color="primary" outline onClick={() => { dispatch(previousPage()); }}>&lt;</Button>
      <Button color="primary" outline onClick={() => { dispatch(nextPage()); }}>&gt;</Button>
    </Container>
  );
}

export default Navigation;
