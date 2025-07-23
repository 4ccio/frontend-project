import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, JSX, cloneElement,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    TEXT = 'text',
    BACKLESS = 'backless',
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

const iconSize: Record<ButtonSize, number> = {
    [ButtonSize.SMALL]: 16,
    [ButtonSize.MEDIUM]: 20,
    [ButtonSize.LARGE]: 24,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    icon?: JSX.Element;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.DEFAULT,
        size = ButtonSize.SMALL,
        icon,
        ...otherProps
    } = props;

    const additional: string[] = [
        className, cls[theme], cls[size],
    ];

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls.withIcon]: Boolean(icon) }, additional)}
            {...otherProps}
        >
            {icon && cloneElement(icon, { height: iconSize[size], width: iconSize[size] })}
            {children}
        </button>
    );
};
