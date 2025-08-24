import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { ProfileCard, fetchProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
            <ProfileCard />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
