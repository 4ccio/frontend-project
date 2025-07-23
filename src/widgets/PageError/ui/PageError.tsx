import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(`app ${cls.PageError}`, {}, [className, theme])}>
            <p className={classNames(cls.message)}>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button size={ButtonSize.MEDIUM} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
