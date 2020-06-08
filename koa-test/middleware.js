/**
 * 学习middleware执行顺序和洋葱模型
 */
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

async function middleware1 (ctx, next) {
  console.log(`middleware 1 before next.`)
  await next()
  console.log(`middleware 1 after next.`)
}


async function middleware2 (ctx, next) {
  console.log(`middleware 2 before next.`)
  await next()
  console.log(`middleware 2 after next.`)
}


async function middleware3 (ctx, next) {
  console.log(`middleware 3 before next.`)
  await next()
  console.log(`middleware 3 after next.`)
}

app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

router.prefix('/api')
router.get('/', async(ctx) => {
  ctx.body = "hello middleware"
})
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log(`server is listening on port: 3000`)
})