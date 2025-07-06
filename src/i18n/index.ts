import { IntlProvider } from "react-intl";
import enMessages from "./locales/en.json";
import siMessages from "./locales/si.json";

export const messages = {
  en: enMessages,
  si: siMessages,
};

export const defaultLocale = "en";

export { IntlProvider };
