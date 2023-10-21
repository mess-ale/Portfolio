import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import eng from './translations/eng/global.json';
import amh from './translations/amh/global.json';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18n.init({
  interpolation: { escapeValue: false }, // React already escapes variables
  lng: 'eng', // Set the default language
  resources: {
    eng: {
      translation: eng
    },
    amh: {
      translation: amh
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </I18nextProvider>
  </BrowserRouter>
);
