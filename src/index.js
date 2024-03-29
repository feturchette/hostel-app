import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import App from './App';
import './config/ReactotronConfig';
import {store, persistor} from './store';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fa7346" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}
