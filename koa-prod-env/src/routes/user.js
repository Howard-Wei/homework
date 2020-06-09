import Router from 'koa-router'
import userController from '../api/userController'
const router = new Router({
  prefix: '/user'
})

router.get('/:name', userController.info)

export default router