import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(resourcesToBackend((language, _namespace, callback) => {
        import(`./assets/i18n/${language}.json`)
            .then((resources) => {
                callback(null, resources);
            })
            .catch(err => {
                callback(err, null);
            });
    }))
    .init({
        detection: {
            // had to configure it like that because detection finds "pl-PL" language, instead of "pl"
            convertDetectedLanguage: (lng) => {
                // idea is to get the "core" language
                return lng.split('-')[0];
            }
        },
        fallbackLng: 'en',
        debug: true,
        nonExplicitSupportedLngs: true,
        interpolation: { escapeValue: false }
    });

export default i18n;