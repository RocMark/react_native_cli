// ------------------------------------
// Import
// ------------------------------------

import axios from 'axios'
import testLib from '../../interceptors/interceptors'
import actionNames from '../constant/actionNames'
import { SERVER_API_URL } from 'react-native-dotenv'

// ------------------------------------
// Interceptor
// ------------------------------------

const apiName = 'globalRequest'
const globalRequest = axios.create({
  baseURL: SERVER_API_URL,
})

testLib.generateInterceptorFunc({ apiRequest: globalRequest, apiName })

// ------------------------------------
// Constants
// ------------------------------------

const { EXAMPLE_STR } = actionNames

// ------------------------------------
// Action initialState
// ------------------------------------

const initialState = {}

// ------------------------------------
// Action Creator ( async, expose to components )
// Action ( sync expose to components)
// ------------------------------------

// ------------------------------------
// Actions & ActionCreators 統合輸出
// ------------------------------------

export const actions = {}

// ------------------------------------
// Reducer (expose to index.js )
// ------------------------------------
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default globalReducer
