import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from './test-utils';
import Navigation from '../components/Navigation';
import store,
{
  moveToLastPage,
} from './testStore';

describe('Navigation component', () => {
  test('navigation renders navigation buttons', () => {
    render(<Navigation />);
    expect(screen.getByTestId('previousPage')).toBeInTheDocument();
    expect(screen.getByTestId('nextPage')).toBeInTheDocument();
  });
  test('navigation renders return to main page button on last page', () => {
    store.dispatch(moveToLastPage());
    render(<Navigation />);
    expect(screen.getByTestId('returnToFirstPage')).toBeInTheDocument();
    expect(screen.queryByTestId('nextPage')).not.toBeInTheDocument();
  });
  test('navigation buttons work', () => {
    store.dispatch(moveToLastPage());
    render(<Navigation />);
    userEvent.click(screen.getByTestId('returnToFirstPage'));
    expect(store.getState().chosenConfig.activePage).toBe(0);
    userEvent.click(screen.getByTestId('nextPage'));
    expect(store.getState().chosenConfig.activePage).toBe(1);
    userEvent.click(screen.getByTestId('previousPage'));
    expect(store.getState().chosenConfig.activePage).toBe(0);
  });
});
