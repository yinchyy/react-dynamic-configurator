import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../utils/test-utils';
import Engines from '../Engines';
import store from '../../../redux/testStore';

describe('Engine component', () => {
  test('first element checked by default', () => {
    render(<Engines />);
    const radio0 = screen.getByTestId('item-0');
    expect(radio0).toHaveClass('radio-checked');
    expect(screen.getByText('b20m23i')).toBeInTheDocument();
  });
  test('radio select works', async () => {
    render(<Engines />);
    const radio1 = await screen.findByTestId('item-1');
    expect(store.getState().chosenConfig.engineID).toEqual(0);
    userEvent.click(radio1);
    expect(store.getState().chosenConfig.engineID).toEqual(1);
  });
});
