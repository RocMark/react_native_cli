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

const apiName = 'exampleRequest'
const exampleRequest = axios.create({
  baseURL: SERVER_API_URL,
})

testLib.generateInterceptorFunc({ apiRequest: exampleRequest, apiName })

// ------------------------------------
// Constants
// ------------------------------------

const { EXAMPLE_STR } = actionNames

// ------------------------------------
// Action initialState
// ------------------------------------

const initialState = {
  exampleState: {},
}

// ------------------------------------
// Action Creator ( async, expose to components )
// Action ( sync expose to components)
// ------------------------------------

export const example_AC = (data) => {
  // const reqData = {}
  // const url = `/${reqData.id}`
  const url = ''
  return (dispatch) => {
    // exampleRequest
    dispatch(example_A(data))
  }
}

export const example_A = (data) => {
  return {
    type: EXAMPLE_STR,
    data,
  }
}

// ****************************************************************

// ------------------------------------
// Actions & ActionCreators 統合輸出
// ------------------------------------

export const actions = {
  example_AC,
}

// ------------------------------------
// Reducer (expose to index.js )
// ------------------------------------
const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_STR:
      return {
        ...state,
        exampleState: action.data,
      }
    default:
      return state
  }
}

export default exampleReducer
