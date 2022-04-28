import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container } from 'reactstrap';
import { nextPage, previousPage, returnToFirstPage } from '../redux/chosenConfig';

function Navigation() {
  const { activePage, lastPage } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  let color = 'primary';
  let btnValue = '>';
  if (activePage === 0) {
    color = 'secondary';
  } else {
    color = 'primary';
    if (activePage === lastPage - 1) {
      btnValue = 'Finish';
    } else {
      btnValue = '>';
    }
  }
  if (activePage === lastPage) {
    return (
      <Container className="d-flex justify-content-evenly">
        <Button data-testid="returnToFirstPage" color="primary" onClick={() => { dispatch(returnToFirstPage()); }}>Configure again</Button>
      </Container>
    );
  }
  return (
    <Container className="d-flex justify-content-evenly">
      <Button data-testid="previousPage" color={color} outline onClick={() => { dispatch(previousPage()); }}>&lt;</Button>
      <p>
        {activePage + 1}
        {' '}
        of
        {' '}
        {lastPage}
      </p>
      <Button data-testid="nextPage" color="primary" outline onClick={() => { dispatch(nextPage()); }}>{btnValue}</Button>
    </Container>
  );
}

export default Navigation;
