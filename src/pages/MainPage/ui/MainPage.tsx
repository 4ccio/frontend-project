import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            {/* eslint-disable-next-line i18next/no-literal-string */}
        </div>
    );
});

export default MainPage;
