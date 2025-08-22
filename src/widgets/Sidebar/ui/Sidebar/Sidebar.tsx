import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {
    PanelLeftClose, PanelLeftOpen,
} from 'lucide-react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../Sidebaritem/SidebarItem';
import { SidebarItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = useCallback(() => {
        setCollapsed((prevState) => !prevState);
    }, []);

    const ToggleIcon = useMemo(() => (collapsed ? PanelLeftOpen : PanelLeftClose), [collapsed]);

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
                    iconComponent={ToggleIcon}
                />
            </div>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem key={item.path} collapsed={collapsed} item={item} />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher theme={ButtonTheme.BACKLESS} />
                <LangSwitcher theme={ButtonTheme.BACKLESS} short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
});
