import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { User, userActions } from 'entities/User';
import { USER_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps extends Omit<LoginSchema, 'isLoading' | 'error'> {}

const URL = '/login';

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>(URL, authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            // race condition с получением даннх из localstorage для запроса данных профиля
            // extra.navigate?.('/profile');

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
