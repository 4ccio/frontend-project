import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
