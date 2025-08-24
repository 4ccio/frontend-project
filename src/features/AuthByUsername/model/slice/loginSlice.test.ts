import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('newUser')),
        ).toEqual<DeepPartial<LoginSchema>>({ username: 'newUser' });
    });
    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('qwerty')),
        ).toEqual<DeepPartial<LoginSchema>>({ password: 'qwerty' });
    });
});
