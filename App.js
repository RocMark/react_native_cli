import React from 'react'

/* Component */
import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

/* Hooks */
import { useExample } from './src/hooks/exampleHooks'

/* Redux */
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/store'

// Redux Persist
import { PersistGate } from 'redux-persist/es/integration/react'

const App = () => {
  const exampleHooks = useExample()
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <View style={styles.body}>
            <Text>{`exampleHooks${JSON.stringify(exampleHooks.data)}`}</Text>
        <Text>{'App'}</Text>
      </View>
          </View>
        </PersistGate>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({})

export default App
