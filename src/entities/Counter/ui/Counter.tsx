import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions, counterSlice } from 'entities/Counter/model/slice/counterSlice';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">
                {counterValue}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
                // eslint-disable-next-line i18next/no-literal-string
            >

                increment
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
                // eslint-disable-next-line i18next/no-literal-string
            >
                decrement
            </Button>
        </div>
    );
};
