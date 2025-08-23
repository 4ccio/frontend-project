import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { $axios } from 'shared/api/api';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, ThunkConfig<RejectedValue>>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    navigate: jest.MockedFn<any>;

    api: jest.MockedFunctionDeep<typeof $axios>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.navigate = jest.fn();
        // this.api = jest.mocked($axios, true);
        this.api = {
            post: jest.fn(),
            get: jest.fn(),
            put: jest.fn(),
            delete: jest.fn(),
        } as jest.MockedFunctionDeep<typeof $axios>;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        return action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });
    }
}
