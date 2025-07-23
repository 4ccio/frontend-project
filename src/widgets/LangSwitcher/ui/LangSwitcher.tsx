import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Languages } from 'lucide-react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
    theme?: ButtonTheme;
    size?: ButtonSize;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {
        className,
        short,
        theme = ButtonTheme.TEXT,
        size = ButtonSize.MEDIUM,
    } = props;
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={theme}
            icon={<Languages />}
            size={size}
            onClick={toggle}
        >
            {t(short ? '' : 'Язык')}
        </Button>
    );
};
