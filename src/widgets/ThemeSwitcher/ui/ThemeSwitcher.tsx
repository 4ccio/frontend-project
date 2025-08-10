import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { SunMoon } from 'lucide-react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {
        className,
        theme = ButtonTheme.TEXT,
        size = ButtonSize.MEDIUM,
    } = props;

    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={theme}
            size={size}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            icon={<SunMoon />}
        />
    );
};
