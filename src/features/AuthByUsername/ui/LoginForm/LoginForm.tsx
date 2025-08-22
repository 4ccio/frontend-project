import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Typography, TypographyColor } from 'shared/ui/Typography/Typography';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

const reducersToLoad: ReducersList = {
    login: loginReducer,
};

export interface LoginFormProps {
	className?: string;
    onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const usernameRef = useRef(username);
    const passwordRef = useRef(password);
    usernameRef.current = username;
    passwordRef.current = password;

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername(
            {
                username: usernameRef.current,
                password: passwordRef.current,
            },
        ));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess]);

    return (
        <DynamicModuleLoader reducers={reducersToLoad}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Typography
                    align="center"
                    variant="h3"
                >
                    {t('Форма авторизации')}
                </Typography>
                {error
                    && (
                        <Typography
                            align="center"
                            color={TypographyColor.ERROR}
                        >
                            {t('Неверный логин или пароль')}
                        </Typography>
                    )}
                <Input
                    autoFocus
                    value={username}
                    onChange={onChangeUsername}
                    placeholder={t('Введите логин')}
                />
                <Input
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
