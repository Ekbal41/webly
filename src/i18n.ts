import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "bn",
    fallbackLng: "bn",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

i18n.on("languageChanged", (lng: string) => {
  document.documentElement.lang = lng;

  document.documentElement.style.setProperty(
    "--font-sans",
    lng === "bn" ? `"Noto Sans Bengali", sans-serif` : `"Noto Sans", sans-serif`
  );
});

export default i18n;
