/**
 * 简易koa server搭建
 */
const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()

router.get('/', ctx => {
  ctx.body = 'hello world'
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)