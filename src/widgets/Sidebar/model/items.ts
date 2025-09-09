import {
    LucideIcon, House, BookOpen, User,
} from 'lucide-react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: LucideIcon;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        icon: House,
        text: 'Главная',
    },
    {
        path: RoutePaths.about,
        icon: BookOpen,
        text: 'О сайте_навигация',
    },
    {
        path: RoutePaths.profile,
        icon: User,
        text: 'Профиль',
        authOnly: true,
    },
];
