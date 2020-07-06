import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'

// Combined Reducer
import allReducer from './reducers/allReducer'

// middlewares
import middlewares from './middlewares/middlewares'

// 引入 App 用的 LocalStorage
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [''],  // 指定要保存的 allReducer 中的哪個 Reducer
}

const persistedReducer = persistReducer(persistConfig, allReducer)

// Browser Redux DevTools Docs: http://bit.ly/35BZ4bv
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [thunk, ...middlewares]

export const store = createStore(
  // persistedReducer,
  allReducer,
  // composeEnhancers(applyMiddleware(...middleWares)),
  applyMiddleware(...middleWares),
)

export const persistor = persistStore(store)
