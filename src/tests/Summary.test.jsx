import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Summary from '../components/Summary';
import store,
{
  setEngine,
} from './testStore';

describe('Summary component', () => {
  test('it renders selected config', () => {
    store.dispatch(setEngine(1));
    render(<Summary />);
    expect(screen.getByText('Engine: b18m25i')).toBeInTheDocument();
  });
});
