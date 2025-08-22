import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import cls from './Typography.module.scss';

export enum TypographyColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SECONDARY_LOW = 'secondary-low',
    ERROR = 'error',
    WARNING = 'warning',
}

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p' | 'span';

type TypographyAlign = 'center' | 'left' | 'right' | 'justify';

export interface TypographyProps {
	className?: string;
    children?: ReactNode;
    color?: TypographyColor;
    variant?: TypographyVariant;
    align?: TypographyAlign;
    gutterBottom?: boolean;
}

export const Typography = memo((props: TypographyProps) => {
    const {
        className,
        children,
        color = TypographyColor.PRIMARY,
        variant = 'span',
        gutterBottom,
        align,
    } = props;

    const Component: TypographyVariant = variant;

    const mods = {
        [cls.gutterBottom]: gutterBottom,
        [cls.inlineBlock]: variant === 'span',
    };

    const additional = [
        className,
        cls[color],
        cls[`align-${align}`],
    ];

    return (
        <Component className={classNames(cls.Typography, mods, additional)}>
            {children}
        </Component>
    );
});
