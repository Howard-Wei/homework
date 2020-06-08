const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')

const app = new Koa()

const router = new Router()

app.use(cors())
app.use(koaBody())

router.prefix('/api')

app.use(async(ctx, next) => {
  if (ctx.request.url === '/') {
    ctx.body = 'This is my homework, please send post request to /api/user'
  } else {
    await next()
  }
})

router.post('/user', async(ctx) => {
  let { header } = ctx.request
  let { name, email } = ctx.request.body
  // 鉴权
  if (!header.role || header.role !== 'admin') {
    return ctx.body = {
      code: 401,
      msg: "unauthoreized post"
    }
  }
  // 值验证
  if (!name || !email) {
    return ctx.body = {
      code: 404,
      msg: 'name和email不能为空'
    }
  }

  ctx.body = {
    code: 200,
    data: {
      name,
      email
    },
    msg: '上传成功'
  }
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log(`server is listening on port:3000`)
})