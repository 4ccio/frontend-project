import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    TEXT = 'text',
    BACKLESS = 'backless',
}

export enum SizeButton {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.DEFAULT,
        size = SizeButton.SMALL,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
