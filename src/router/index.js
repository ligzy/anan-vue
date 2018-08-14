import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import { Notification } from 'element-ui'

/* Layout */
import Layout from '@/views/platform/layout/Layout'
import Page404 from '@/views/platform/errorPage/404'

/**
 //当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 hidden: true // (默认 false)

 //当设置 noredirect 的时候该路由在面包屑导航中不可被点击
 redirect: noredirect

 //当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 //只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 //若你想不管路由下面的 children 声明的个数都显示你的根路由
 //你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 alwaysShow: true

 name:'router-name'            //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 meta : {
  title: 'title'              //设置该路由在侧边栏和面包屑中展示的名字
  icon: 'svg-name'            //设置该路由的图标
  noCache: true               //如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
}
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/platform/login/index'), hidden: true },
  { path: '/authredirect', component: () => import('@/views/platform/login/authredirect'), hidden: true },
  { path: '/401', component: () => import('@/views/platform/errorPage/401'), hidden: true },
  { path: '/404', component: Page404, hidden: true },
  { path: '/500', component: () => import('@/views/platform/errorPage/500'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/platform/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard' }
    }, {
      path: 'userInfo',
      component: () => import('@/views/platform/user/info'),
      name: 'userInfo',
      meta: { title: 'userInfo', icon: 'user' },
      hidden: true
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
/* { path: '/system', component: Layout, redirect: 'noredirect', name: 'system', meta: { title: 'system', icon: 'form' }},
 { path: 'permission', component: () => import('@/views/platform/permission/index'), name: 'system_permission', meta: { title: 'system_permission', icon: 'tree' }},
 { path: 'organiz', component: () => import('@/views/platform/organization/index'), name: 'system_organiz', meta: { title: 'system_organiz', icon: 'organization' }},
 { path: 'user', component: () => import('@/views/platform/user/index'), name: 'system_user', meta: { title: 'system_user', icon: 'user' }},
 { path: 'role', component: () => import('@/views/platform/role/index'), name: 'system_role', meta: { title: 'system_role', icon: 'role' }},
 { path: '/config', component: Layout, redirect: 'noredirect', name: 'config', meta: { title: 'config', icon: 'parameter' }},
 { path: 'application', component: () => import('@/views/platform/errorPage/404'), name: 'config_application', meta: { title: 'config_application', icon: 'list' }},
 { path: 'parameter', component: () => import('@/views/platform/parameter/index'), name: 'config_parameter', meta: { title: 'config_parameter', icon: 'parameter' }},
 { path: 'dictionary', component: () => import('@/views/platform/dictionary/index'), name: 'config_dictionary', meta: { title: 'config_dictionary', icon: 'dictionary' }},
 { path: '/monitor', component: Layout, redirect: 'noredirect', name: 'monitor', meta: { title: 'monitor', icon: 'monitor' }},
 { path: 'eureka', component: Page404, name: 'monitor_eureka', meta: { title: 'monitor_eureka', icon: 'monitor' }},
 { path: 'admin', component: () => import('@/views/platform/errorPage/404'), name: 'monitor_admin', meta: { title: 'monitor_admin', icon: 'monitor' }},
 { path: 'sleuth', component: () => import('@/views/platform/errorPage/404'), name: 'monitor_sleuth', meta: { title: 'monitor_sleuth', icon: 'monitor' }},
 { path: 'cache', component: () => import('@/views/platform/errorPage/404'), name: 'monitor_cache', meta: { title: 'monitor_cache', icon: 'monitor' }},
 { path: 'elk', component: () => import('@/views/platform/errorPage/404'), name: 'monitor_elk', meta: { title: 'monitor_elk', icon: 'monitor' }},
 { path: 'onlineuser', component: () => import('@/views/platform/errorPage/404'), name: 'monitor_onlineuser', meta: { title: 'monitor_onlineuser', icon: 'monitor' }},
 { path: '/authentication', component: Layout, redirect: 'noredirect', name: 'authentication', meta: { title: 'authentication', icon: 'permision' }},
 { path: 'client', component: () => import('@/views/platform/client/index'), name: 'authentication_client', meta: { title: 'authentication_client', icon: 'permision' }},
 { path: 'service', component: () => import('@/views/platform/errorPage/404'), name: 'authentication_service', meta: { title: 'authentication_service', icon: 'permision' }},

 { path: '*', redirect: '/404', hidden: true }*/
]
/**
 * 根据后台权限标识(cdp_sys_perimission.code)创建动态路由
 * @returns {*}
 * @param permissionTree 用户权限树
 */
export function dynamicAddAsyncRouter(permissionTree) {
  const aRouter = []
  if (!permissionTree) {
    return aRouter
  }
  permissionTree.forEach(permission => {
    const {
      code,
      type,
      status,
      icon,
      url,
      children
    } = permission
    // 未开启的权限则也不显示
    if (status !== 0) {
      return
    }
    // 优先从预定义中加载，如果没有找到则自动创建
    let singelRouter = findAsyncRouter(code)
    if (isEmpty(singelRouter)) {
      const nUrl = (url || 'views/platform/errorPage/404')
      switch (type) {
        // 组件菜单
        case 1:
          singelRouter = {
            name: code,
            path: code,
            component: () => import(`@/${nUrl}.vue`).catch(error => {
              Notification.error({
                title: '获取组件失败',
                message: error.message
              })
            }),
            meta: {
              title: code,
              icon: icon
            },
            children: isEmpty(children) ? [] : dynamicAddAsyncRouter(children)
          }
          break
        // 链接菜单
        case 2:
          singelRouter = {
            name: code,
            path: code,
            component: () => import(`@/${nUrl}.vue`).catch(error => {
              Notification.error({
                title: '获取组件失败',
                message: error.message
              })
            }),
            meta: {
              title: code,
              icon: icon
            },
            children: isEmpty(children) ? [] : dynamicAddAsyncRouter(children)
          }
          break
        // 目录菜单
        case 3:
          singelRouter = {
            name: code,
            path: '/' + code,
            component: () => import('@/views/platform/layout/Layout').catch(error => {
              Notification.error({
                title: '获取组件失败',
                message: error.message
              })
            }),
            meta: {
              title: code,
              icon: icon
            },
            redirect: 'noredirect',
            children: isEmpty(children) ? [] : dynamicAddAsyncRouter(children)
          }
          break
        // 只遍历菜单类型
        default:
          return
      }
    }
    aRouter.push(singelRouter)
  })
  if (permissionTree.level === 0) {
    aRouter.push({ path: '*', redirect: '/404', hidden: true })
  }
  return aRouter
}

/**
 * @return {boolean}
 */
function isEmpty(val) {
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    return val === 'null' || val == null || val === 'undefined' || val === undefined || val === ''
  }
  return false
}
/**
 * 根据后台权限标识(cdp_sys_perimission.code)在异步路由中查找是否存在，存在则返回对应路由
 * @param permissionCode
 * @returns {*}
 */
function findAsyncRouter(permissionCode) {
  let rc = {}
  for (let j = 0; j < asyncRouterMap.length; j++) {
    const router = asyncRouterMap[j]
    if (router.name && router.name === permissionCode) {
      rc = router
      rc.children = []
      break
    }
  }
  return rc
}
