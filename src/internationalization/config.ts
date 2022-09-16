import i18n, {ReadCallback} from "i18next";
import {initReactI18next} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import BrowserLanguageDetector from 'i18next-browser-languagedetector';

type ImportFn = (language: string, namespace: string, callback: ReadCallback) => void

const resourcesImporter: ImportFn = (language, namespace, callback) => {
  import(`../../locales/${language}/${namespace}.json`)
    .then(({default: resources}) => {
      callback(null, resources)
    })
    .catch((error) => {
      callback(error, null)
    });
}

i18n
  .use(initReactI18next)
  .use(BrowserLanguageDetector)
  .use(resourcesToBackend(resourcesImporter))
  .init({
    debug: false,
    supportedLngs: ['en', 'es-AR', 'pt-BR', 'pt'],
    fallbackLng: 'en',
    detection: {
      lookupSessionStorage: 'i18nextLng',
      order: ['sessionStorage'],
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;