import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginSchema } from 'features/AuthByUsername';
import { User, userActions } from 'entities/User';
import { USER_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps extends Omit<LoginSchema, 'isLoading' | 'error'> {}

const URL = 'http://localhost:8000/login';

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(URL, authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
