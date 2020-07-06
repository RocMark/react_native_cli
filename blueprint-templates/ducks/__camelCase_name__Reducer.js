// ------------------------------------
// Import
// ------------------------------------

import axios from 'axios'
import testLib from '../../interceptors/interceptors'
import actionNames from '../constant/actionNames'
import { SERVER_API_URL } from 'react-native-dotenv'

// ! 至 modules/allReducer.js 新增 State 名 & 修改路徑
// import { responseFail_A } from ''

// ------------------------------------
// Interceptor
// ------------------------------------

const apiName = '{{camelCase name}}Request'
const {{camelCase name}}Request = axios.create({
  baseURL: SERVER_API_URL,
})

testLib.generateInterceptorFunc({ apiRequest: {{camelCase name}}Request, apiName })

// ------------------------------------
// Constants
// ------------------------------------

const { EXAMPLE_STR } = actionNames

// ------------------------------------
// Action initialState
// ------------------------------------

const initialState = {
}

// ------------------------------------
// Action Creator ( async, expose to components )
// Action ( sync expose to components)
// ------------------------------------

// ------------------------------------
// Actions & ActionCreators 統合輸出
// ------------------------------------

export const actions = {
}

// ------------------------------------
// Reducer (expose to index.js )
// ------------------------------------
const {{camelCase name}}Reducer = (state = initialState, action) => {
    
    default:
      return state
  }
}

export default {{camelCase name}}Reducer
