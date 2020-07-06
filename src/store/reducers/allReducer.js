import { combineReducers } from 'redux'

import globalReducer from './global/globalReducer'
import exampleReducer from './example/exampleReducer'

const reducers = {
  globalState: globalReducer,
  exampleState: exampleReducer,
}

const allReducer = combineReducers(reducers)

export default allReducer
