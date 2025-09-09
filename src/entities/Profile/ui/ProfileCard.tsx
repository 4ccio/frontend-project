import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography, TypographyColor } from 'shared/ui/Typography/Typography';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader';
import { Country, Currency } from 'shared/const/common';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useMemo } from 'react';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
    profileData?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeCountry?: (value?: Country) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        profileData,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCountry,
        onChangeAge,
        onChangeCurrency,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;
    const { t } = useTranslation('profile');

    const translations = useMemo(() => {

    }, []);

    if (isLoading) {
        return (
            <div className={classNames(cls.loading, {}, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Typography
                    variant="h3"
                    color={TypographyColor.ERROR}
                    align="center"
                >
                    {t('Ошибка при загрузке данных')}
                </Typography>
                <Typography
                    variant="p"
                    color={TypographyColor.ERROR}
                    align="center"
                >
                    {t('Попробуйте обновить страницу')}
                </Typography>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.headerWrapper}>
                <Avatar size={72} src={profileData?.avatar} alt="avatar" />
            </div>
            <div className={cls.form}>
                <div>
                    <Typography className={cls.label}>
                        {t('Имя')}
                    </Typography>
                    <Input
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        placeholder={t('Имя')}
                        value={profileData?.first}
                    />
                    {/* <Typography color={TypographyColor.ERROR} className={cls.label}>Ошибка</Typography> */}
                </div>
                <div>
                    <Typography className={cls.label}>{t('Фамилия')}</Typography>
                    <Input
                        readonly={readonly}
                        placeholder={t('Фамилия')}
                        value={profileData?.lastname}
                        onChange={onChangeLastname}
                    />
                </div>
                <div>
                    <Typography className={cls.label}>{t('Логин')}</Typography>
                    <Input
                        readonly={readonly}
                        placeholder={t('Логин')}
                        value={profileData?.username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div>
                    <Typography className={cls.label}>{t('Возраст')}</Typography>
                    <Input
                        readonly={readonly}
                        placeholder={t('Возраст')}
                        value={profileData?.age}
                        onChange={onChangeAge}
                    />
                </div>
                <div>
                    <Typography className={cls.label}>{t('Страна')}</Typography>
                    <Input
                        readonly={readonly}
                        placeholder={t('Страна')}
                        value={profileData?.country}
                        // onChange={onChangeCountry}
                    />

                </div>
                <div>
                    <Typography className={cls.label}>{t('Город')}</Typography>
                    <Input
                        readonly={readonly}
                        placeholder={t('Город')}
                        value={profileData?.city}
                        onChange={onChangeCity}
                    />

                </div>
                <div>
                    <Typography className={cls.label}>{t('Валюта')}</Typography>
                    <Input
                        readonly={readonly}
                        placeholder={t('Валюта')}
                        value={profileData?.currency}
                    />
                </div>
                <div>
                    <Typography className={cls.label}>{t('Аватар')}</Typography>
                    <Input
                        readonly={readonly}
                        placeholder={t('Ссылка на аватарку')}
                        value={profileData?.avatar}
                        onChange={onChangeAvatar}
                    />
                </div>
            </div>
        </div>
    );
};
