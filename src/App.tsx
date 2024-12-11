import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import RootLayout from './layouts/RootLayout';
import store, { persistor } from './stores';
import theme from './theme';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MantineProvider withCssVariables theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Notifications />
            <RootLayout />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </MantineProvider>
  );
}
