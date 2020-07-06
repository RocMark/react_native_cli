// import { headerWithLocale } from '../../lib/locale/localeSetup'
// import { headerWithToken, headerWithRefreshToken } from '../../lib/token/tokenApi'

//* ******************************************************************************** * */

const generateInterceptorFunc = ({ apiRequest, apiName }) => {
  apiRequest.interceptors.request.use(
    (config) => {
      return reqSuccessFunc(config, apiName)
    },
    (error) => {
      return reqFailFunc(error, apiName)
    },
  )

  apiRequest.interceptors.response.use(
    (response) => {
      return resSuccessFunc(response, apiName)
    },
    (error) => {
      return resFailFunc(error, apiName)
    },
  )
}

//* ******************************************************************************** * */

const reqSuccessFunc = async (config, groupName) => {
  // console.log(`${groupName}`, config)

  // login / logout 不需要帶 token & locale 作為表頭
  if (groupName !== 'loginRequest') {
    // 更動表頭
    config.headers = {
      // ...(await headerWithToken({groupName, configHeader: config.headers})),
      // ...(await headerWithLocale(config.headers)),
    }
  }

  return config
}

//* ******************************************************************************** * */

const reqFailFunc = (error) => {
  return Promise.reject(error)
}

const resSuccessFunc = (response) => {
  return response
}

const resFailFunc = (error) => {
  return Promise.reject(error)
}

export default { generateInterceptorFunc }
