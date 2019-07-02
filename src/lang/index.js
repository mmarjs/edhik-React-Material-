/**
 * App Language Provider
 * Add more locales here
 */
import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import frLang from './entries/fr_FR';

const AppLocale = {
    en: enLang,
    fr: frLang
};

addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.fr.data);

export default AppLocale;
