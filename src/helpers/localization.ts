import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';
import de from '../locales/de.json';
import ru from '../locales/ru.json';
import hi from '../locales/hi.json';
import ja from '../locales/ja.json';
import zh from '../locales/zh.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  fr,
  es,
  de,
  ru,
  hi,
  ja,
  zh
};

const currentLocale = I18n.currentLocale();
I18n.locale = 'en';
console.log(currentLocale);

// Is it a RTL language?
export const isRTL =
  currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name: string, params = {}) {
  return I18n.t(name, params);
}

// The method we'll use instead of a regular string
export function setLocale(locale: string) {
  I18n.locale = locale;
}
// End of file
