import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName: 'login' */'../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */'../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'forget' */'../views/Forget.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/reg',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Reg,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/forget',
    name: 'Forget',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Forget,
    meta: {
      title: '找回密码'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
