import { fetchOrganizParameterValue, fetchUserParameterValue } from '@/api/parameter'
import { Message } from 'element-ui'

export default (Vue) => {
  Vue.prototype.asyncOrganizParameterValue = function(key, defaultValue, description, callback) {
    if (!key) {
      Message({
        title: '获取参数值失败',
        message: '没有或传入的参数键无效!',
        type: 'error',
        duration: 5000
      })
      return
    }
    if (typeof callback !== 'function') {
      Message({
        title: '获取参数值失败',
        message: '没有或传入的回调函数callback不正确!',
        type: 'error',
        duration: 5000
      })
      return
    }
    fetchOrganizParameterValue(key, defaultValue, description).then(response => {
      callback(response.data)
    }).catch(reason => {
      Message({
        title: '获取参数值失败',
        message: reason.message,
        type: 'error',
        duration: 5000
      })
    })
  }

  Vue.prototype.syncOrganizParameterValue = function(key, defaultValue, description) {
    if (!key) {
      Message({
        title: '获取参数值失败',
        message: '没有或传入的参数键无效!',
        type: 'error',
        duration: 5000
      })
      return
    }
    fetchOrganizParameterValue(key, defaultValue, description, 'get').then(response => {
      return response.data
    }).catch(reason => {
      Message({
        title: '获取参数值失败',
        message: reason.message,
        type: 'error',
        duration: 5000
      })
    })
  }

  Vue.prototype.asyncUserParameterValue = function(key, defaultValue, description, callback) {
    if (!key) {
      Message({
        title: '获取参数值失败',
        message: '没有或传入的参数键无效!',
        type: 'error',
        duration: 5000
      })
      return
    }
    if (typeof callback !== 'function') {
      Message({
        title: '获取参数值失败',
        message: '没有或传入的回调函数callback不正确!',
        type: 'error',
        duration: 5000
      })
      return
    }
    fetchUserParameterValue(key, defaultValue, description).then(response => {
      callback(response.data)
    }).catch(reason => {
      Message({
        title: '获取参数值失败',
        message: reason.message,
        type: 'error',
        duration: 5000
      })
    })
  }

  Vue.prototype.syncUserParameterValue = function(key, defaultValue, description) {
    if (!key) {
      Message({
        title: '获取参数值失败',
        message: '没有或传入的参数键无效!',
        type: 'error',
        duration: 5000
      })
      return
    }
    fetchUserParameterValue(key, defaultValue, description, 'get').then(response => {
      return response.data
    }).catch(reason => {
      Message({
        title: '获取参数值失败',
        message: reason.message,
        type: 'error',
        duration: 5000
      })
    })
  }
}
