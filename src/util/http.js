import axios from 'axios'
import { message, notification } from 'ant-design-vue'
import { baseURL } from './util.js'

const instance = axios.create({
  // 创建axios实例，在这里可以设置请求的默认配置
  timeout: 100000, // 设置超时时间10s
  baseURL, // 根据自己配置的反向代理去设置不同环境的baeUrl
})

const httpCode = {
  // 这里我简单列出一些常见的http状态码信息，可以自己去调整配置
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时',
}

/** 添加响应拦截器  **/
instance.interceptors.response.use(
  (response) => {
    console.log(response)
    message.destroy()
    if (response.data.code === 200) {
      return Promise.resolve(response.data)
    } else if (response.data.code === 401) {
    } else {
      notification.error({
        message: '错误提示',
        description: response.data.msg,
        duration: 3,
      })
      return Promise.reject(response.data.msg)
    }
  },
  (error) => {
    message.destroy()

    if (error.response) {
      // 根据请求失败的http状态码去给用户相应的提示
      const tips =
        error.response.status in httpCode
          ? httpCode[error.response.status]
          : error.response.data.message
      notification.error({
        message: '消息提示',
        description: tips,
        duration: 3,
      })

      return Promise.reject(error)
    } else {
      notification.error({
        message: '消息提示',
        description: '请求超时, 请刷新重试',
        duration: 3,
      })
      return Promise.reject(new Error('请求超时, 请刷新重试'))
    }
  }
)

/* 发送请求操作
 * @param {String} url 请求地址
 * @param {Object} data 参数
 * @param {String} method 请求方式
 */
const request = (url = '', data = {}, method = 'GET', config) => {
  // 请求
  let bodydata = ''
  if (method === 'get' || method === 'GET') {
    bodydata = { params: { ...data } }
  } else {
    bodydata = { data: JSON.stringify(data) }
  }
  return new Promise((resolve, reject) => {
    instance({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        token: sessionStorage.getItem('token'),
      },
      method,
      url,
      ...bodydata,
      ...config,
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// POST请求
export const post = function (url, data, config) {
  return request(url, data, 'POST', config)
}

// PUT请求
export const put = function (url, data) {
  return request(url, data, 'PUT')
}

// GET请求
export const get = function (url, data) {
  return request(url, data, 'GET')
}

// DELETE请求
export const $delete = function (url, data) {
  return request(url, data, 'DELETE')
}

// POST请求
export const $postGetfile = function (url, data, config) {
  const http = axios.create({
    // 创建axios实例，在这里可以设置请求的默认配置
    timeout: 100000, // 设置超时时间10s
    baseURL, // 根据自己配置的反向代理去设置不同环境的baeUrl
  })
  const bodydata = { data: JSON.stringify(data) }
  return new Promise((resolve, reject) => {
    http({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        token: sessionStorage.getItem('token'),
      },
      method: 'POST',
      url,
      ...bodydata,
      ...config,
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export const $postPorm = function (url, data,callback) {
  const http = axios.create({
    // 创建axios实例，在这里可以设置请求的默认配置
    timeout: 100000, // 设置超时时间10s
    baseURL, // 根据自己配置的反向代理去设置不同环境的baeUrl
  })
  return new Promise((resolve, reject) => {
    http({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        token: sessionStorage.getItem('token'),
      },
      method: 'POST',
      url,
      data,
      onUploadProgress:function(progressEvent){ //原生获取上传进度的事件
        if(progressEvent.lengthComputable){
            //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
            //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
            callback(progressEvent);
        }
      },
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
