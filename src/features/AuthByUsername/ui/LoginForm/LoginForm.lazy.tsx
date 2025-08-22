import { lazy, FC } from 'react';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormLazy = lazy < FC<LoginFormProps>>(
    () => new Promise((resolve) => {
        // @ts-ignore
        const delay = __IS_STORYBOOK__ ? 0 : 1500;
        setTimeout(() => resolve(import('./LoginForm')), delay);
    }),
);
