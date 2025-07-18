import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../../../../public/locales/ru';
import en from '../../../../public/locales/en';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        // ns: ['translation', 'main', 'about'],
        defaultNS: 'translation',

        resources: { ru, en },
    });

export default i18n;
