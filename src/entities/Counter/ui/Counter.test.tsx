import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('counter', () => {
    const state = {
        counter: { value: 10 },
    };
    const counterValue = () => screen.getByTestId('counter-value');

    test('should render counter value', () => {
        ComponentRender(<Counter />, { initialState: state });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });
    test('increment', () => {
        ComponentRender(<Counter />, { initialState: state });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(counterValue()).toHaveTextContent('11');
    });
    test('decrement', () => {
        ComponentRender(<Counter />, { initialState: state });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(counterValue()).toHaveTextContent('9');
    });
});
