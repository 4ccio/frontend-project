import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return all login state', () => {
        const state:DeepPartial<StateSchema> = {
            login: {
                username: 'admin',
                password: 'qwerty',
                isLoading: true,
                error: 'error',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: 'qwerty',
            isLoading: true,
            error: 'error',
        });
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
