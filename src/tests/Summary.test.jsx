import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Summary from '../components/Summary';
import store,
{
  setEngine,
  setPaint,
  setRimsColor,
  setRims,
  setSeatType,
  setInteriorColor,
  setCheckboxStates,
} from './testStore';

describe('Summary component', () => {
  test('it renders selected config', () => {
    store.dispatch(setEngine(1));
    store.dispatch(setPaint(2));
    store.dispatch(setRimsColor(1));
    store.dispatch(setRims(1));
    store.dispatch(setSeatType(2));
    store.dispatch(setInteriorColor(2));
    store.dispatch(setCheckboxStates([false, true, true]));
    render(<Summary />);
    expect(screen.getByText('Engine: b18m25i')).toBeInTheDocument();
    expect(screen.getByText('Body paint: yellow winegard')).toBeInTheDocument();
    expect(screen.getByText('Rims paint: red roses')).toBeInTheDocument();
    expect(screen.getByText('Rims: alloy sport 17"')).toBeInTheDocument();
    expect(screen.getByText('Seats option: premium')).toBeInTheDocument();
    expect(screen.getByText('Interior color: yellow winegard')).toBeInTheDocument();
    expect(screen.getByText('premium soundsystem')).toBeInTheDocument();
    expect(screen.getByText('sport suspension')).toBeInTheDocument();
  });
});
