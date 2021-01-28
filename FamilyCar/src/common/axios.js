/**
 * @file axios 处理
 * @author shy
 */

import axios from 'axios'
import qs from 'qs'
let instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
let doAxios = options => new Promise((resolve, reject) => {
  if (options.method === 'post' && options.data) {
    if (options.url.indexOf('.json') !== -1) {
      options.url = options.url.substr(0, options.url.length - 5)
      options.data = JSON.stringify(options.data)
    } else {
      // eslint-disable-next-line no-undef
      options.data = qs.stringify(options.data)
    }
  }
  if (options.method === 'get' || options.method === undefined) {
    if (options.data && !options.params) {
      options.params = options.data
      delete options.data
    }
  }
  instance.request(options).then(res => {
    let data = res.data
    if (res.status === 200 && (+data.status === 0 || data.status === null)) {
      resolve(data)
    } else {
      reject(data)
    }
  }, res => {
    reject(res)
  })
})

export default {
  install (Vue) {
    Vue.prototype.$axios = doAxios
  }
}
