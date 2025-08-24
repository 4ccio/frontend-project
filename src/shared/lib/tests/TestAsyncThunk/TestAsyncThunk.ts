import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, ThunkConfig<RejectedValue>>

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    navigate: jest.MockedFn<any>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.navigate = jest.fn();
        this.api = mockedAxios;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        return action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });
    }
}
