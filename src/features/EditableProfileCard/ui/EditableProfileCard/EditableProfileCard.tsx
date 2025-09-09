import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    fetchProfileData,
    getProfileData, getProfileError, getProfileIsLoading,
    ProfileCard, profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useRef } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { Country, Currency } from 'shared/const/common';
import {
    editableProfileActions,
    editableProfileReducer,
} from '../../model/slice/editableProfileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import {
    getEditableProfileIsLoading,
} from '../../model/selectors/getEditableProfileIsLoading/getEditableProfileIsLoading';
import {
    getEditableProfileFormData,
} from '../../model/selectors/getEditableProfileFormData/getEditableProfileFormData';
import {
    getEditableProfileReadonly,
} from '../../model/selectors/getEditableProfileReadonly/getEditableProfileReadonly';
import cls from './EditableProfileCard.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
    editableProfile: editableProfileReducer,
};

interface EditableProfileCardProps {
	className?: string;
}

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    // Profile entity selectors
    const isLoadingProfile = useSelector(getProfileIsLoading);
    const errorProfile = useSelector(getProfileError);
    const profileData = useSelector(getProfileData);

    // EditableProfile feature selectors
    const readonly = useSelector(getEditableProfileReadonly);
    const formData = useSelector(getEditableProfileFormData);
    const isLoadingUpdate = useSelector(getEditableProfileIsLoading);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onEdit = useCallback(() => {
        dispatch(editableProfileActions.setReadonly(false));
        inputRef.current?.focus();
    }, [dispatch]);

    const onEditCancel = useCallback(() => {
        dispatch(editableProfileActions.cancelEdit());
    }, [dispatch]);

    const onSaveChanges = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(editableProfileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(editableProfileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(editableProfileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(editableProfileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(editableProfileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(editableProfileActions.updateProfile({ country: value }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(editableProfileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(editableProfileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.header}>
                <Typography variant="h3">
                    {t('Профиль')}
                </Typography>
                {
                    readonly ? (

                        <Button
                            disabled={isLoadingProfile}
                            onClick={onEdit}
                            theme={ButtonTheme.TEXT}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <div className={cls.actionButtons}>
                            <Button
                                disabled={isLoadingUpdate}
                                onClick={onEditCancel}
                                theme={ButtonTheme.DEFAULT}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                disabled={isLoadingUpdate}
                                onClick={onSaveChanges}
                                theme={ButtonTheme.PRIMARY}
                            >
                                {t('Сохранить')}
                            </Button>
                        </div>
                    )
                }
            </div>
            <div className={classNames(cls.EditableProfileCard, {}, [className])}>
                <ProfileCard
                    readonly={readonly}
                    error={errorProfile}
                    isLoading={isLoadingProfile}
                    profileData={formData}
                    onChangeFirstname={onChangeFirstname}
                    onChangeAge={onChangeAge}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeCountry={onChangeCountry}
                    onChangeCurrency={onChangeCurrency}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>
        </DynamicModuleLoader>
    );
};
