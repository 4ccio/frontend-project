import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const { path, icon: Icon, text } = item;

    return (
        <AppLink
            to={path}
            theme={AppLinkTheme.DEFAULT}
            className={classNames('', { [cls.collapsed]: collapsed }, [])}
        >
            <div className={classNames(cls.item)}>
                <Icon className={cls.icon} />
                <span className={cls.link}>
                    {t(text)}
                </span>
            </div>
        </AppLink>
    );
});
