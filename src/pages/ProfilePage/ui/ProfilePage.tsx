import { memo } from 'react';
import { EditableProfileCard } from 'features/EditableProfileCard';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = (({ className }: ProfilePageProps) => (
    <div className={cls.ProfilePage}>
        <EditableProfileCard />
    </div>
));

export default ProfilePage;
