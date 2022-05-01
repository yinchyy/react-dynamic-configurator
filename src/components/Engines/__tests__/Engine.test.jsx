import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../utils/test-utils';
import Engine from '../Engine';
import storage from '../../../redux/testStore';
import { setEngine } from '../../../redux/chosenConfig';

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
  test('value in store changes on radio change', () => {
    const { engine } = storage.getState().engine;
    render(engine.map((value) => (
      <Engine
        id={value.id}
        model={value.model}
        fuel={value.fuel}
        displacement={value.displacement}
        power={value.power}
        engineCode={value.engine_code}
        price={value.price}
        isChecked={value.id === storage.getState().chosenConfig.engineID}
        change={() => { storage.dispatch(setEngine(value.id)); }}
      />
    )));
    expect(storage.getState().chosenConfig.engineID).toBe(0);
    const radio1 = screen.getByTestId('item-1');
    userEvent.click(radio1);
    expect(storage.getState().chosenConfig.engineID).toBe(1);
  });
});
