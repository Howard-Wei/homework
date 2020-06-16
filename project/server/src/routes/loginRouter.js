import Router from 'koa-router'
import loginController from '../controller/loginController'
const router = new Router({
  prefix: '/login'
})

router.post('/forget', loginController.sendMail)

export default router
