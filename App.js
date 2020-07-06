import React from 'react'

/* Component */
import { StyleSheet, View, Text } from 'react-native'
import TestCompo from './src/components/Test/TestCompo/TestCompo'

const App = () => {
  return (
    <View style={styles.app}>
      <TestCompo />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
