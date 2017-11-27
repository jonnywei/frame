import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/Home'
import Login from '@/components/login/login'
import CaseCreate from '@/components/case/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:"login",
      component:Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Home
    },
    {
      path:'/',
      name:"控制台",
      redirect:{path:'/login'}
    },

    {
      path: '/case',
      component: Home,
      meta: {
        name: '活动'
      },
      children: [{
        path: '', // 默认路径
        redirect: 'create',
        meta: {
          hidden: true // 隐藏的路由不会在路由菜单中显示出来
        }
      }, {
        path: 'create',
        component: CaseCreate,
        meta: {
          name: '创建'
        }
      }, {
        path: 'list',
        component: CaseCreate,
        meta: {
          name: '管理'
        }
      }]
    },

  ],
  mode: 'history'

})
