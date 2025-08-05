import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const [inputValue, setInputValue] = useState('');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                value={inputValue}
                onChange={setInputValue}
                placeholder={t('Введите логин')}
            />
            <Input placeholder={t('Введите пароль')} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
