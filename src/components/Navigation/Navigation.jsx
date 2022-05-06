import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container } from 'reactstrap';
import { nextPage, previousPage, returnToFirstPage } from '../../redux/chosenConfig';

function Navigation() {
  const { activePage, lastPage } = useSelector((state) => state.chosenConfig);
  const dispatch = useDispatch();
  let className = '';
  let btnValue = 'Next step >';
  if (activePage === 0) {
    className = 'invisible';
  } else if (activePage === lastPage - 1) {
    btnValue = 'Finish';
  }
  if (activePage === lastPage) {
    return (
      <Container className="d-flex justify-content-evenly">
        <Button data-testid="returnToFirstPage" className="col-12 col-md-4 py-3 py-md-2 px-4" color="primary" onClick={() => { dispatch(returnToFirstPage()); }}>Configure again</Button>
      </Container>
    );
  }
  return (
    <Container className="d-flex flex-wrap justify-content-between my-auto">
      <Button data-testid="previousPage" color="primary" className={`col-12 col-md-4 py-3 py-md-0 px-4 ${className}`} onClick={() => { dispatch(previousPage()); }}>&lt; Previous&nbsp;step</Button>
      <div className={`col-12 col-md-4 my-2 text-center align-middle ${className}`}>
        {activePage + 1}
        {' '}
        of
        {' '}
        {lastPage}
      </div>
      <Button data-testid="nextPage" className="col-12 col-md-4 py-3 py-md-0 px-4" color="primary" onClick={() => { dispatch(nextPage()); }}>{btnValue}</Button>
    </Container>
  );
}

export default Navigation;
