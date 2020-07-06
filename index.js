import React from 'react'

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

/* Redux */
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/store'

// Redux Persist
import { PersistGate } from 'redux-persist/es/integration/react'

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root)
