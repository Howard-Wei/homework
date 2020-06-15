import Router from 'koa-router'
import loginController from '../controller/loginController'
const router = new Router({
  prefix: '/login'
})

router.post('/getCaptcha', loginController.getCaptcha)

export default router
