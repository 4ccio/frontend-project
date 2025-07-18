import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink
                    to="/"
                    className={classNames(cls.mainLink)}
                    theme={AppLinkTheme.DEFAULT}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    // eslint-disable-next-line i18next/no-literal-string
                    to="/about"
                    theme={AppLinkTheme.DEFAULT}
                >
                    {t('О сайте_навигация')}
                </AppLink>
            </div>
        </div>
    );
};
