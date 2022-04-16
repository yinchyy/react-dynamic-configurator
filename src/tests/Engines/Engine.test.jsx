import React from 'react';
import { screen, fireEvent, findByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../test-utils';
import Engine from '../../components/Engines/Engine';

describe('Engine component', () => {
  test('element renders', () => {
    render(
      <Engine
        id={0}
        model="m123del"
        fuel="gas"
        displacement="2136cm^3"
        power="26kW"
        engineCode="TRB"
        price={7896}
        isChecked={false}
      />,
    );

    const radio0 = screen.getByTestId('item-0');
    expect(radio0).not.toBeChecked();
    expect(screen.getByText('m123del')).toBeInTheDocument();
    expect(screen.getByText('gas')).toBeInTheDocument();
    expect(screen.getByText('2136cm^3')).toBeInTheDocument();
    expect(screen.getByText('26kW')).toBeInTheDocument();
    expect(screen.getByText('TRB')).toBeInTheDocument();
    expect(screen.getByText('7896')).toBeInTheDocument();
  });
});
