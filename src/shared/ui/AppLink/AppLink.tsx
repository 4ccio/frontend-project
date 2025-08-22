import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    DEFAULT = 'default'
}

interface AppLinkProps extends LinkProps {
    children?: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
