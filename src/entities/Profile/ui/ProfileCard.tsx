import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui/Typography/Typography';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
// import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames('', {}, [className])}>
            <Typography variant="h3">
                {t('Профиль')}
            </Typography>
            <Input placeholder="Имя" value={profileData?.first} />
            <Input placeholder="Фамилия" value={profileData?.lastname} />
        </div>
    );
};
