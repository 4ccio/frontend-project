import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { LucideIcon } from 'lucide-react';
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

type IconType = LucideIcon | FC<React.SVGProps<SVGSVGElement>>;

const iconSize: Record<ButtonSize, number> = {
    [ButtonSize.SMALL]: 16,
    [ButtonSize.MEDIUM]: 20,
    [ButtonSize.LARGE]: 24,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    iconComponent?: IconType;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.DEFAULT,
        size = ButtonSize.SMALL,
        iconComponent: Icon,
        ...otherProps
    } = props;

    const additional: string[] = [
        className, cls[theme], cls[size],
    ];

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls.withIcon]: Boolean(Icon) }, additional)}
            {...otherProps}
        >
            {Icon && <Icon width={iconSize[size]} height={iconSize[size]} />}
            {children}
        </button>
    );
});
