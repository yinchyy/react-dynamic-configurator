import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdditionalEquipment from '../AdditionalEquipment';
import { render } from '../../../utils/test-utils';
import store from '../../../redux/testStore';

describe('AdditionalEquipment component', () => {
  test('checkbox click changes value in checkboxStates store', () => {
    render(<AdditionalEquipment />);
    expect(store.getState().checkboxStates.checkboxStates[0]).toBe(false);
    userEvent.click(screen.getByTestId('checkbox-0'));
    expect(store.getState().checkboxStates.checkboxStates[0]).toBe(true);
  });
});
