import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        const userValue = { id: '1', username: 'user' };
        thunk.api.post.mockResolvedValue({ data: userValue });

        const result = await thunk.callThunk({ username: '123', password: 'qwerty' });

        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);

        expect(thunk.api.post).toBeCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('failed login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockResolvedValue({ status: 403 });

        const result = await thunk.callThunk({ username: '123', password: 'qwerty' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toBeCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
