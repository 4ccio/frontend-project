import { counterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    const state: counterSchema = { value: 10 };

    test('decrement counter', () => {
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment counter', () => {
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
