import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

/* Hooks */
import { useExample } from '../../../hooks/exampleHooks'

const TestCompo = () => {
  const exampleHooks = useExample()

  return (
    <View style={styles.container}>
      <Text>{`exampleHooks${JSON.stringify(exampleHooks.data)}`}</Text>
      <Text>TestCompo</Text>
    </View>
  )
}

export default TestCompo
