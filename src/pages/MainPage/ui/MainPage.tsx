import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            <div style={{ marginTop: '10px' }}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Input placeholder="Text input" />
            </div>
        </div>
    );
};

export default MainPage;
