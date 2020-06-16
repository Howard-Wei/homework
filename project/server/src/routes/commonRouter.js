import Router from 'koa-router'
import commonController from '../controller/commonController'
const router = new Router({
  prefix: '/common'
})

router.post('/getCaptcha', commonController.getCaptcha)

export default router
