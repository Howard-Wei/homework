'use strict'

import axios from 'axios'
import business from './business'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://my.domain.com'
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (!isSuccess(response) && !response.config.silent) {
      console.error(response.data[business[response.config.business || 'standard'].msgField])
    }
    return response
  },
  function (error) {
    if (!error.config.silent) {
      console.error(error.msg)
    }
    return Promise.reject(error)
  }
)

const isSuccess = (res) => {
  const data = res.data[business[res.config.business || 'standard'].field]
  return data === business[res.config.business || 'standard'].fieldValue
}

export default _axios
