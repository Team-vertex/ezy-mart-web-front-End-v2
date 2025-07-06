import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import "./styles/embla.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { messages } from "./i18n";
import RootLayout from "./layouts/RootLayout";
import store, { persistor } from "./stores";
import { RootState } from "./stores/rootReducer";
import { initializeLocale } from "./stores/slices/languageSlice";
import theme from "./theme";

function AppContent() {
  const currentLocale = useSelector(
    (state: RootState) => state.language.currentLocale
  );

  useEffect(() => {
    AOS.init();
    // Initialize locale from localStorage
    store.dispatch(initializeLocale());
  }, []);

  return (
    <IntlProvider
      locale={currentLocale}
      messages={messages[currentLocale]}
      defaultLocale="en"
    >
      <BrowserRouter>
        <Notifications />
        <RootLayout />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default function App() {
  return (
    <MantineProvider withCssVariables theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContent />
        </PersistGate>
      </Provider>
    </MantineProvider>
  );
}
