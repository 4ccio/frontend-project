import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {
    BookOpen, House, PanelLeftClose, PanelLeftOpen,
} from 'lucide-react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.header}>
                <div className={cls.headerText}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <span>Header</span>
                </div>
                <Button
                    data-testid="sidebar-toggle"
                    onClick={onToggle}
                    theme={ButtonTheme.TEXT}
                    size={ButtonSize.MEDIUM}
                    icon={collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
                />
            </div>
            <div className={cls.items}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.DEFAULT}
                >
                    <div className={classNames(cls.item)}>
                        <House className={cls.icon} />
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </div>
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.DEFAULT}
                >
                    <div className={cls.item}>
                        <BookOpen className={cls.icon} />
                        <span className={cls.link}>
                            {t('О сайте_навигация')}
                        </span>

                    </div>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher theme={ButtonTheme.BACKLESS} />
                <LangSwitcher theme={ButtonTheme.BACKLESS} short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
