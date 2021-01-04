import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEng from "./locales/en.json";
import translationGer from "./locales/de.json";
import translationFre from "./locales/fr.json";
import translationHin from "./locales/hi.json";
import translationJap from "./locales/ja.json";
i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    resources: {
      en: {
        translations: translationEng,
      },
      fr: {
        translations: translationFre,
      },
      hi: {
        translations: translationHin,
      },
      ja: {
        translations: translationJap,
      },
      de: {
        translations: translationGer,
      },
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
