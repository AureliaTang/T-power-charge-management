import { RouterView } from 'vue-router'

export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login'
    },
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
      needLogin: true
    },
    component: () => import('../pages/Home.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        meta: {
          title: 'Dashboard',
          needLogin: true
        },
        component: () => import('@/pages/Dashboard.vue')
      },
      {
        path: '/order',
        name: 'Order',
        meta: {
          title: 'Charging Session Management',
          needLogin: true
        },
        component: () => import('@/pages/Order.vue')
      },
      {
        path: '/admin',
        name: 'Admin',
        meta: {
          title: 'Operator Management',
          needLogin: true
        },
        component: () => import('@/pages/Admin.vue')
      },
      {
        path: '/pilemanage/:sn/:no',
        name: 'PileManage',
        meta: {
          title: 'Pile Management',
          needLogin: true
        },
        component: () => import('@/pages/PileManage.vue')
      },
      {
        path: '/user',
        name: 'User',
        meta: {
          title: 'User Management',
          needLogin: true
        },
        component: () => import('@/pages/User.vue')
      },
      {
        path: '/station',
        name: 'station',
        meta: {
          title: 'Charging Station Management',
          needLogin: true
        },
        component: () => import('@/pages/Station.vue')
      },
      {
        path: '/pile',
        name: 'Pile',
        meta: {
          title: 'Charging Pile Management',
          needLogin: true
        },
        component: () => import('@/pages/Pile.vue')
      },
      {
        path: '/equipment',
        name: 'Equipment',
        meta: {
          title: 'Equipment monitoring',
          needLogin: true
        },
        component: () => import('@/pages/Equipment.vue')
      },
      {
        path: '/electricity',
        name: 'Electricity',
        meta: {
          title: 'Electricity monitoring',
          needLogin: true
        },
        component: () => import('@/pages/Electricity.vue')
      },
      {
        path: '/dict',
        name: 'Dict',
        meta: {
          title: '字典管理',
          needLogin: true
        },
        component: () => import('@/pages/Dict.vue')
      },
      {
        path: '/vehicle',
        name: 'Vehicle',
        meta: {
          title: 'Vehicle information',
          needLogin: true
        },
        component: () => import('@/pages/Vehicle.vue')
      },
      {
        path: '/record',
        name: 'Record',
        meta: {
          title: 'Charging Record',
          needLogin: true
        },
        component: () => import('@/pages/Record.vue')
      },
      {
        path: '/integral',
        name: 'Integral',
        meta: {
          title: '积分管理',
          needLogin: true
        },
        component: () => import('@/pages/Integral.vue')
      },
      {
        path: '/reconciliation',
        name: 'Reconciliation',
        meta: {
          title: 'statement',
          needLogin: true
        },
        component: () => import('@/pages/Reconciliation.vue')
      },
      {
        path: '/datePick',
        name: 'DatePick',
        meta: {
          title: 'DatePick',
          needLogin: true
        },
        component: () => import('@/pages/DatePick.vue')
      },
    ]
  },
]