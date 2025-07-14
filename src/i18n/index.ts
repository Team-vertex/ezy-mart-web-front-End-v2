import { IntlProvider } from "react-intl";
import enMessages from "./locales/en.json";
import aboutUsEnMessages from "./locales/pages/aboutUs.en.json";
import aboutUsSiMessages from "./locales/pages/aboutUs.si.json";
import siMessages from "./locales/si.json";

export const messages = {
  en: { ...enMessages, ...aboutUsEnMessages },
  si: { ...siMessages, ...aboutUsSiMessages },
};

export const defaultLocale = "en";

export { IntlProvider };
